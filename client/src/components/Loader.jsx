import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = true }) => {
    const containerClasses = fullScreen 
        ? "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden" 
        : "flex flex-col items-center justify-center py-20 gap-4 w-full";

    return (
        <div className={containerClasses}>
            {/* Sophisticated Background Gradients */}
            {fullScreen && (
                <>
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </>
            )}

            <div className="relative flex flex-col items-center">
                {/* Main Spinner Group */}
                <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
                    {/* Outer Ring */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-[3px] border-slate-100 border-t-primary"
                    />
                    
                    {/* Inner Ring */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 rounded-full border-[2px] border-slate-100 border-b-green-500"
                    />

                    {/* Center Icon */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="z-10 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/20"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </motion.div>
                </div>

                {/* Brand Text Section */}
                <div className="flex flex-col items-center">
                    <motion.h2 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-black text-slate-900 tracking-tighter mb-1"
                    >
                        AEVICTA
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-[2px] bg-green-500 rounded-full mb-3"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.6 }}
                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500"
                    >
                        Loading Excellence
                    </motion.p>
                </div>

                {/* Discrete Progress Bar */}
                <div className="absolute bottom-[-60px] w-40 h-[2px] bg-slate-50 rounded-full overflow-hidden">
                    <motion.div 
                        animate={{ 
                            left: ["-100%", "100%"]
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;


