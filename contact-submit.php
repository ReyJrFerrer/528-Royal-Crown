<?php
// Load environment variables
function loadEnv($path) {
    if (!file_exists($path)) {
        return false;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        
        if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
    return true;
}

// Load environment variables
loadEnv('.env');

// Set content type to JSON
header('Content-Type: application/json');

// Enable CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Check if form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Get and sanitize form data
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Please enter a valid email address.']);
    exit;
}

// Basic spam protection
if (strlen($message) > 2000) {
    echo json_encode(['status' => 'error', 'message' => 'Message is too long.']);
    exit;
}

// Get environment variables
$to_email = getenv('CONTACT_EMAIL') ?: 'support@528royalcare.com';
$smtp_host = getenv('SMTP_HOST') ?: 'smtp.hostinger.com';
$smtp_port = getenv('SMTP_PORT') ?: 587;
$smtp_username = getenv('SMTP_USER') ?: 'support@528royalcare.com';
$smtp_password = getenv('SMTP_PASS');
$from_name = getenv('FROM_NAME') ?: '528 Royal Care Contact Form';

// Prepare email content
$email_subject = "Contact Form Submission: " . $subject;
$email_body = "
New contact form submission from SRV website:

Name: $name
Email: $email
Subject: $subject

Message:
$message

---
This message was sent from the SRV contact form.
Reply directly to this email to respond to the sender.
";

// Send email using PHPMailer SMTP
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_username;
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = (int) $smtp_port;
    $mail->CharSet    = PHPMailer::CHARSET_UTF8;

    // Recipients
    $mail->setFrom($smtp_username, $from_name);
    $mail->addAddress($to_email);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false);
    $mail->Subject = $email_subject;
    $mail->Body    = $email_body;

    $mail->send();

    echo json_encode([
        'status' => 'success',
        'message' => 'Thank you for your message! We\'ll get back to you soon.'
    ]);
} catch (Exception $e) {
    error_log("Contact form email failed to send. To: $to_email, From: $email. Error: " . $mail->ErrorInfo);

    echo json_encode([
        'status' => 'error',
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly.'
    ]);
}
?>