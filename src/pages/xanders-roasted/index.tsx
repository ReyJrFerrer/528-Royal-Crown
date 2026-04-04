import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Drumstick, Flame, Star, Utensils, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  'https://picsum.photos/seed/roasted1/1920/1080',
  'https://picsum.photos/seed/roasted2/1920/1080',
  'https://picsum.photos/seed/roasted3/1920/1080',
];

export default function XandersRoasted() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Logo Only */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/roastedbg/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-rose-900/60 to-transparent" />
        </div>

        {/* Hero Content - Logo Only */}
        <div className="relative z-10 px-4 w-full">
          <div className="flex flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0"
            >
              <img 
                src="https://picsum.photos/seed/xanderslogo/300/100" 
                alt="Xander's Roasted Logo" 
                className="h-28 md:h-32 object-contain"
              />
            </motion.div>

            {/* Text Content - Only visible on desktop */}
            <div className="text-right flex-shrink-0 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-end gap-2 mb-1"
              >
                <Link to="/" className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors">
                  <span className="text-xs md:text-sm font-medium">528 Royal Crown</span>
                  <Crown size={14} />
                </Link>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-5xl font-bold text-white"
              >
                Xander's Roasted
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs md:text-xl text-rose-100 font-light"
              >
                "Savory perfection in every bite."
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Carousel */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Savory Perfection</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Xander's Roasted Chicken And Liempo offers the most flavorful and succulent roasted meats in town. Our secret marinade and slow-roasting process guarantee a mouthwatering experience.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every chicken is marinated for 24 hours with our proprietary blend of herbs and spices, then slow-roasted to golden perfection. Our liempo is carefully selected and roasted to achieve that perfect balance of crispy skin and tender meat.
              </p>
            </div>
            
            {/* Carousel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              {heroImages.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`Xander's Roasted ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                  referrerPolicy="no-referrer"
                />
              ))}
              
              {/* Carousel Controls */}
              <button 
                onClick={goToPrev}
                className="absolute left-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="text-white" size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-colors"
              >
                <ChevronRight className="text-white" size={20} />
              </button>

              {/* Carousel Dots */}
              <div className="absolute bottom-4 z-20 flex gap-2">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-rose-400 w-6' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Signature Items */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Signature Items</h2>
            <p className="text-slate-600">Our crowd favorites!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Drumstick, title: 'Roasted Whole Chicken', desc: 'Succulent whole chicken marinated for 24 hours and slow-roasted to golden perfection. Perfect for family meals.' },
              { icon: Flame, title: 'Roasted Liempo', desc: 'Tender pork belly with perfectly crispy skin, marinated in our secret blend of spices.' },
              { icon: Utensils, title: 'Combo Meals', desc: 'Get the best of both worlds with our chicken and liempo combo plates, served with rice and vegetables.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-rose-50 rounded-2xl p-8 border border-rose-100 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Love Us */}
      <section className="py-20 bg-rose-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why People Love Us</h2>
            <p className="text-rose-200">Our promise to every customer.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: 'Secret Marinade', desc: 'Our 24-hour marination process ensures every bite is packed with flavor.' },
              { icon: Star, title: 'Premium Quality', desc: 'We source only the freshest chicken and pork for your dining pleasure.' },
              { icon: Heart, title: 'Family Recipe', desc: 'Passed down through generations, our recipe is authentically yours to enjoy.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-rose-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-rose-50 p-10 rounded-3xl border border-rose-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the top destination for roasted chicken and liempo, celebrated for our unique flavors and uncompromising quality.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-rose-50 p-10 rounded-3xl border border-rose-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To serve consistently delicious, high-quality roasted meats that bring families and friends together for satisfying meals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Us Today!</h2>
            <p className="text-slate-600">Bring home the flavor!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-rose-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-rose-100">We'd love to hear from you!</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-rose-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-slate-600">789 Grill Avenue, Meatville, MV 13579</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-rose-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Store Hours</p>
                    <p className="text-slate-600">Monday to Sunday | 10:00 AM – 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-rose-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">+1 (555) 246-8135</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-rose-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">contact@xandersroasted.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
