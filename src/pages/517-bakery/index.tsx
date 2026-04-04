import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CakeSlice, Sun, Wheat, Sparkles, ChefHat, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  'https://picsum.photos/seed/bakery1/1920/1080',
  'https://picsum.photos/seed/bakery2/1920/1080',
  'https://picsum.photos/seed/bakery3/1920/1080',
];

export default function Bakery517() {
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
            src="https://picsum.photos/seed/bakerybg/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-900/60 to-transparent" />
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
                src="https://picsum.photos/seed/bakerylogo/300/100" 
                alt="517 Bakery Logo" 
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
                517 Bakery
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs md:text-xl text-amber-100 font-light"
              >
                "Baked with love, served with a smile."
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Carousel */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Baked with Love</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At 517 Bakery, we believe in the magic of freshly baked goods. From artisanal breads to decadent pastries, every item is crafted with passion and the finest ingredients.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our master bakers wake up early to ensure that every loaf, every pastry, and every sweet treat is baked to perfection. We source only the finest ingredients to create flavors that bring comfort and joy.
              </p>
            </div>
            
            {/* Carousel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              {heroImages.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`517 Bakery ${idx + 1}`}
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
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-amber-400 w-6' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Offerings</h2>
            <p className="text-slate-600">Fresh from the oven, daily!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Wheat, title: 'Artisan Breads', desc: 'Handcrafted loaves baked fresh every morning. From sourdough to pandesal, we have your daily bread.' },
              { icon: CakeSlice, title: 'Pastries & Cakes', desc: 'Decadent cakes, flaky pastries, and sweet treats perfect for any celebration.' },
              { icon: ChefHat, title: 'Specialty Items', desc: 'Seasonal specials and signature items crafted by our expert bakers.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">Ask our friendly staff about today's fresh bread of the day and seasonal specials!</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose 517 Bakery?</h2>
            <p className="text-amber-200">Our promise to you, every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Fresh Daily', desc: 'All our products are baked fresh every morning. No preservatives, just pure goodness.' },
              { icon: Heart, title: 'Quality Ingredients', desc: 'We source only the finest ingredients to ensure every bite is delicious.' },
              { icon: Sun, title: 'Community Favorite', desc: 'Beloved by locals, we\'ve been serving our community with pride for years.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-amber-100">{item.desc}</p>
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
              className="bg-amber-50 p-10 rounded-3xl border border-amber-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the neighborhood bakery of choice, bringing people together through the love of authentic, high-quality baked goods.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-amber-50 p-10 rounded-3xl border border-amber-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide our community with fresh, delicious, and beautifully crafted baked goods daily, ensuring every bite is a memorable experience.
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
            <p className="text-slate-600">Fresh baked goods await!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-amber-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-amber-100">We'd love to hear from you!</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-amber-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-slate-600">456 Oven Street, Pastry Town, PT 67890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-amber-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Store Hours</p>
                    <p className="text-slate-600">Monday to Saturday | 7:00 AM – 7:00 PM</p>
                    <p className="text-slate-500 text-sm">Closed on Sundays</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-600" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">info@517bakery.com</p>
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
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors">
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
