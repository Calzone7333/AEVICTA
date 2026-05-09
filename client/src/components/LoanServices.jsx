import React from 'react';
import { Car, Heart, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Car Loan',
    desc: 'Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.',
    icon: <Car size={24} />,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Wedding Loan',
    desc: 'For Couple provide easy and affordable with easy process lorem ipsum minim veniam aute irure lorm.',
    icon: <Heart size={24} />,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Property Loan',
    desc: 'Everyone want to buy property so people want to buy home, land or commercial properly low interest.',
    icon: <Home size={24} />,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop'
  }
];

const LoanServices = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">What We're Offering</span>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h2 className="section-heading">All Loans Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="bg-white group cursor-pointer transition-all duration-500 rounded-none overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Overlay */}
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="absolute -bottom-6 right-8 w-16 h-16 bg-primary text-white flex items-center justify-center rounded-none z-10 border border-white/20 shadow-lg"
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 pt-10 space-y-4">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="content-p">
                  {service.desc}
                </p>
                <div className="pt-4">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="w-12 h-12 bg-slate-900 text-white rounded-none flex items-center justify-center group-hover:bg-green-500 transition-all duration-300"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanServices;

