import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-[#00A3E0]/10 antialiased">
            {/* 1. Breadcrumb Hero Section */}
            <section className="bg-[#001a33] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">Contact Us</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white font-display tracking-tight">Contact Us</h1>
                </div>
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Contact Info & Form Section */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Left Side: Contact Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Get in touch with us</span>
                                    <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-[#001a33] leading-tight">
                                    Ask for your query
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {/* Call Anytime */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-[#00A3E0] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#00A3E0]/20 group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="font-black text-[#001a33] text-[15px] uppercase tracking-widest">Call Anytime</h4>
                                        <p className="text-slate-500 font-bold text-lg">+1 9812310000</p>
                                    </div>
                                </div>

                                {/* Write Email */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-[#00A3E0] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#00A3E0]/20 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="font-black text-[#001a33] text-[15px] uppercase tracking-widest">Write Email</h4>
                                        <p className="text-slate-500 font-bold text-lg">needhelp@company.com</p>
                                    </div>
                                </div>

                                {/* Visit Office */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-[#00A3E0] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#00A3E0]/20 group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="font-black text-[#001a33] text-[15px] uppercase tracking-widest">Visit Office</h4>
                                        <p className="text-slate-500 font-bold text-lg leading-relaxed">
                                            80 Maiden Lane, <br />
                                            Brooklyn, New York, USA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 bg-[#f4f7fa] p-12 rounded-sm relative">
                            <form className="grid sm:grid-cols-2 gap-6">
                                <div className="sm:col-span-1">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="w-full px-6 py-4 bg-white border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full px-6 py-4 bg-white border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <input 
                                        type="text" 
                                        placeholder="Phone Number" 
                                        className="w-full px-6 py-4 bg-white border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <input 
                                        type="text" 
                                        placeholder="Subject" 
                                        className="w-full px-6 py-4 bg-white border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea 
                                        rows="6" 
                                        placeholder="Write Message" 
                                        className="w-full px-6 py-4 bg-white border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700 resize-none"
                                    ></textarea>
                                </div>
                                <div className="sm:col-span-2 pt-4">
                                    <motion.button 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-[#00A3E0] text-white px-10 py-5 font-black uppercase tracking-widest text-[13px] flex items-center gap-3 shadow-xl shadow-[#00A3E0]/20"
                                    >
                                        Send A Message <Send size={18} />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Full Width Map Section */}
            <section className="h-[600px] w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4221434979863!2d-74.00824307321152!3d40.706385311285276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a173f4ab783%3A0x5a5319e17f3a0a4b!2s80%20Maiden%20Ln%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sin!4v1770635103522!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                />
            </section>
        </div>
    );
};

export default Contact;
