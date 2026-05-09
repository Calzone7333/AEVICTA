import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Wallet, ShieldCheck, Zap, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);

  const words = "Connecting Your".split(" ");
  
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 lg:pt-32 pb-20 lg:pb-0 overflow-hidden">
      {/* Background Video with Parallax */}
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedMetadata={(e) => e.target.playbackRate = 0.5}
          className="w-full h-full object-cover object-center scale-110"
        >
          <source src="/Hero/Herobanner_bg_video.mp4" type="video/mp4" />
        </video>
        
        {/* Animated Background Overlay - Moving Gradient */}
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 30%, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)",
              "radial-gradient(circle at 80% 70%, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)",
              "radial-gradient(circle at 20% 30%, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-10"
        />

        {/* SVG Background Animation - Subtle Particles */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random()
              }}
              animate={{ 
                y: [null, "-20%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Vertical Arrows - Positioned neatly on the right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 hidden xl:flex"
      >
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full border-[1.5px] border-white/70 flex items-center justify-center transition-all group"
        >
          <ArrowLeft size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-white" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full border-[1.5px] border-white/70 flex items-center justify-center transition-all group"
        >
          <ArrowRight size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-white" />
        </motion.button>
      </motion.div>

      <motion.div 
        style={{ y: textY }}
        className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full relative z-30 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20 lg:pt-0"
      >
        {/* Left Side Text Content */}
        <div className="text-white space-y-4 lg:space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="text-[12px] lg:text-[14px] font-bold tracking-widest uppercase opacity-80 mb-2">
              Simple & Secure Payment Process
            </p>
            <div className="h-1 w-20 bg-primary" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-[1.1] lg:leading-[1.05] overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-2 lg:mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden lg:block" /> 
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-primary inline-block"
            >
              Loan Needs
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-white/20 mt-8 lg:mt-12 max-w-lg mx-auto lg:mx-0"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-none flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                <Zap size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] lg:text-[15px] font-bold font-sans uppercase tracking-tight leading-tight">Quick Payment <br /> Process</span>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-none flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] lg:text-[15px] font-bold font-sans uppercase tracking-tight leading-tight">No Prepayment <br /> Fees</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
