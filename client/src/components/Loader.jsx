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

                {/* 4-Dot Loader */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="relative w-12 h-12"
                >
                    {/* Top Dot */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                    {/* Bottom Dot */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                    {/* Left Dot */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-sm shadow-primary/40"></div>
                    {/* Right Dot */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-sm shadow-primary/40"></div>
                </motion.div>
        </div>
    );
};

export default Loader;


