import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Coffee, Tag, Heart, CheckCircle2, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  'https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/650399926_122103291777256103_7014430875862060442_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeG0hGwtiAP5YONEfX8k-Rm4B5xO5D2oVqoHnE7kPahWquvlb1fZTmXt0e56C-Q_lPZzR3oLxIVuBUlm2KUeQqWE&_nc_ohc=UzsbmLBlLpEQ7kNvwHjRBCn&_nc_oc=Adrn3mL2s9kBS--JKgM0ZouzzdkYbiy1FOdApfiMKFFBv8esu3ca3lazQgIEI-Wd1pw&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=uxHGYsIqNLJ-CSIn1ttcjA&_nc_ss=7a3a8&oh=00_Af3CwNxOx89FFRAMsihJZQ-OUYYjO6cqWh9KpoBnAoUHRQ&oe=69D4112B',
  'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/649079176_122103291981256103_6706803296947917984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeG9e6obEw0GhBwM4sxf5CUluuqic5Af2Z-66qJzkB_Zn4Kj-JNTbkFIgpODcHVe3R_S0Xd3BNxCodcmkxvxs-gd&_nc_ohc=-9rCwV7N-YwQ7kNvwHoC_CH&_nc_oc=AdpXPELnkUey5fSxHI-Kc_iXOeAwrRA78x2E_vBcAqslNsSIJzlVDWxz458yHR3d9j4&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=QPfwgEIyrTflkcPT78sWJA&_nc_ss=7a3a8&oh=00_Af1QeUnJFkdvKVgdDo6jjm5f0EnPxk0Q4CUHxRGwheTQkg&oe=69D4059C',
  'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/648295133_122103292383256103_1180980975423930961_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGnH1Cu8EC5ZP1WfyOTusWNqGOK9QuJF4CoY4r1C4kXgMyFfKFCElrdB_8kjivHk4Tzft69hxE2Ql6fINrvuyGx&_nc_ohc=VU6QSMGxbEQQ7kNvwFWq2zd&_nc_oc=Adrh0eyOBJRxqWIiHp1D2UsjcueDNVVqkIsmTehwSdnLaNeXwCiipEfQRWG6bjZq-JI&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=hFJgr-EfXQ4nh4Rb4Tez7w&_nc_ss=7a3a8&oh=00_Af2be-56TCMSQBQD7P1X-QFIoVSXo4YShBSznbmVtjzCig&oe=69D414DE',
];

export default function IAmMilktea() {
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
            src="https://picsum.photos/seed/milkteabg/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#94a036]/80 via-[#94a036]/60 to-transparent" />
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
                src="src/assets/iAmMilktea/iammilktea-logo.png" 
                alt="I AM MILKTEA Logo" 
                className="h-90 md:h-100 object-contain"
              />
            </motion.div>

            {/* Text Content - Only visible on desktop */}
            <div className="text-right flex-shrink-0 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-end gap-2 mb-1"
              >
                <Link to="/" className="flex items-center gap-1 text-[#d0d91b] hover:text-[#b8c015] transition-colors">
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
                I AM MILKTEA
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs md:text-xl text-[#d0d91b] font-light"
              >
                "I Am... Milktea. I Am your daily dose of Joy."
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Carousel */}
      <section className="py-20 bg-[#d0d91b]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Daily Dose of Happiness</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Your daily dose of happiness is just a visit away! Whether you are craving a creamy, refreshing drink or looking for the perfect spot to bond with your barkada, we've got a cup with your name on it.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We serve a wide variety of creamy milktea flavors, perfectly paired with our daily fresh-baked breads.
              </p>
            </div>
            
            {/* Carousel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              {heroImages.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`I AM MILKTEA ${idx + 1}`}
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
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-[#d0d91b] w-6' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cup Sizes & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Cup Sizes</h2>
            <p className="text-slate-600">Choose your perfect size!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { size: 'Small', volume: '12 oz', price: 'From ₱45' },
              { size: 'Medium', volume: '16 oz', price: 'From ₱60' },
              { size: 'Large', volume: '22 oz', price: 'From ₱75' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#d0d91b]/10 rounded-2xl p-8 text-center border border-[#d0d91b]/20 hover:shadow-xl transition-shadow"
              >
                <Coffee className="mx-auto mb-4 text-[#94a036]" size={32} />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.size}</h3>
                <p className="text-[#94a036] font-medium mb-2">{item.volume}</p>
                <p className="text-slate-900 font-bold text-lg">{item.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">Ask our friendly staff about our available flavors and fresh bread of the day!</p>
          </div>
        </div>
      </section>

      {/* Deals & Promos */}
      <section className="py-20 bg-[#94a036] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Deals & Promos</h2>
            <p className="text-[#d0d91b]">We love treating our customers!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#d0d91b]" size={28} />
                <h3 className="text-xl font-bold">Barkada Treat-Tea!</h3>
              </div>
              <p className="text-white/90 mb-4">
                Buy any 3 cups (any size) and get 1 <strong>FREE Small Size</strong> cup of any flavor!
              </p>
              <p className="text-sm text-white/70">Perfect for sharing with your squad.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Tag className="text-[#d0d91b]" size={28} />
                <h3 className="text-xl font-bold">Double Delight Promo!</h3>
              </div>
              <p className="text-white/90 mb-4">
                Buy 1, Take 1 with a <strong>50% discount</strong> on your second cup!
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[#d0d91b] font-bold">Small</p>
                  <p className="text-lg font-bold">₱45</p>
                </div>
                <div>
                  <p className="text-[#d0d91b] font-bold">Medium</p>
                  <p className="text-lg font-bold">₱60</p>
                </div>
                <div>
                  <p className="text-[#d0d91b] font-bold">Large</p>
                  <p className="text-lg font-bold">₱75</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">Follow our Facebook Page @iammilktea for limited-time seasonal promos, new flavors, and giveaways!</p>
          </div>
        </div>
      </section>

      {/* Philosophy / Sunday Rest */}
      <section className="py-20 bg-[#d0d91b]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="mx-auto mb-6 text-[#d5261e]" size={48} />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Philosophy</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              At I AM MILKTEA, we believe that just as a good cup of tea needs time to steep, we also need time to rest and reconnect.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d0d91b]/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-[#d5261e] mb-2">Sunday Rest Day</h3>
              <p className="text-slate-600 italic mb-4">Psalm 136:1 - "Give thanks to the Lord for He is good. His love endures forever."</p>
              <p className="text-slate-600">
                In observance of the Lord's Day, our store is <strong>CLOSED every Sunday</strong>. We encourage our staff and customers to spend this time in fellowship, rest, and worship with family. We recharge our hearts on Sunday so we can serve you with even more joy from Monday to Saturday!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Us Today!</h2>
            <p className="text-slate-600">Ready for your close-up and your favorite cup?</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-[#d0d91b] p-8 text-[#94a036]">
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-[#94a036]/80">We'd love to hear from you!</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-[#d0d91b]" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-slate-600">Zone 2 Pedro T. Orata (Bactad), Urdaneta City, Pangasinan, Philippines</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-[#d0d91b]" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Store Hours</p>
                    <p className="text-slate-600">Monday to Saturday | 9:00 AM – 9:00 PM</p>
                    <p className="text-[#d5261e] text-sm">Closed on Sundays</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#d0d91b]" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#d0d91b]" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">hello@iammiltea.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Tag className="text-[#d0d91b]" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Facebook</p>
                    <p className="text-slate-600">@iammilktea</p>
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
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d0d91b]/20 focus:border-[#d0d91b] transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d0d91b]/20 focus:border-[#d0d91b] transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d0d91b]/20 focus:border-[#d0d91b] transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d0d91b]/20 focus:border-[#d0d91b] transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-3 rounded-xl bg-[#d0d91b] hover:bg-[#b8c015] text-[#94a036] font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtags */}
      <section className="py-12 bg-[#d0d91b]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#94a036] font-medium mb-4">Hashtags</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['#IAmMilktea', '#MilkteaLover', '#UrdanetaCity', '#NewCreation517'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white rounded-full text-[#94a036] text-sm font-medium border border-[#d0d91b]/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
