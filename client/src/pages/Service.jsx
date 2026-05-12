import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building, Landmark, Coins, Briefcase, Rocket, RefreshCw, CheckCircle2 } from 'lucide-react';

const Service = () => {
    const services = [
        { 
            title: 'Business Term Loans', 
            icon: Building, 
            desc: 'Best for: Expansion, Infrastructure, Equipment Purchase. A lump sum of capital repaid over a fixed period with structured EMIs. Ideal for long-term investments.'
        },
        { 
            title: 'Working Capital Loans', 
            icon: Coins, 
            desc: 'Best for: Daily Operations, Inventory, Payroll, Cash Flow. Ensures your business keeps moving without cash flow stress.'
        },
        { 
            title: 'MSME and SME Loans', 
            icon: Briefcase, 
            desc: 'Best for: Micro, Small and Medium Enterprises. We identify the right scheme for your profile and ensure you get all entitled benefits.'
        },
        { 
            title: 'Startup Business Funding', 
            icon: Rocket, 
            desc: 'Best for: New Businesses. Whether pre-revenue or early-stage, we help structure your application to present your business in the best light.'
        },
        { 
            title: 'Loan Against Property (LAP)', 
            icon: Landmark, 
            desc: 'Best for: Higher Loan Amounts, Lower Interest Rates. Use your property as collateral for smarter, large-scale funding needs.'
        },
        { 
            title: 'Balance Transfer & Top-Up', 
            icon: RefreshCw, 
            desc: 'Best for: Existing Loan Holders. Switch to a better bank or access additional funds to save money and gain financial headroom.'
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-primary/10 antialiased">
            {/* 1. Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">Services</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white font-display tracking-tight leading-tight">Business Loans, Simplified.</h1>
                    <p className="text-white/60 text-lg lg:text-xl max-w-2xl mt-6">From the first enquiry to the final approval, we handle the heavy lifting so you get funded faster, smarter, and with zero confusion.</p>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Intro Copy */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
                    <p className="text-slate-500 leading-relaxed text-lg lg:text-xl max-w-4xl mx-auto">
                        At Aevicta, business loans are not just one of the things we do. They are the only thing we do, and we do it exceptionally well. We work with Chennai's business community across every industry, every scale, and every stage to connect them with the right loan from the right institution at the right time.
                    </p>
                </div>
            </section>

            {/* 3. Service Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-navy group-hover:text-primary transition-colors mb-4">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-[15px]">{service.desc}</p>
                                <div className="pt-8 flex items-center gap-2 text-primary font-black uppercase text-[12px] tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <span>Apply Now</span>
                                    <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Service Page CTA */}
            <section className="py-32 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 text-center space-y-8">
                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">Not Sure Which Loan Is Right for You?</h2>
                    <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto">That is exactly what we are here for. Tell us about your business and your goals, and we will tell you exactly what you need and how to get it.</p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-12 py-5 font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20"
                    >
                        Book a Free Consultation
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Service;
