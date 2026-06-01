import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Percent, CheckCircle2, RefreshCcw, Check, ArrowRight, Zap, MapPin, Users } from 'lucide-react';

const FeaturesSection = () => {
    const mainFeatures = [
        {
            icon: Zap,
            title: "Fast and Stress-Free Process",
            desc: "No endless queues. No confusing jargon. We simplify the entire loan journey from start to finish and make sure nothing falls through the cracks."
        },
        {
            icon: MapPin,
            title: "Chennai-Rooted, Business-Focused",
            desc: "We know Chennai's business landscape inside out. From the wholesale corridors of George Town to the tech parks of Sholinganallur, we understand what your business needs to grow."
        },
        {
            icon: Users,
            title: "100% Personalized Guidance",
            desc: "No generic advice. We study your business, your goals, and your financials, then match you with the most suitable loan option available through our banking network."
        }
    ];

    const trustServices = [
        "Business Term Loans", "Working Capital Loans",
        "MSME and SME Loans", "Startup Funding",
        "Loan Against Property", "Balance Transfer",
        "Loan Top-Up", "Debt Restructuring"
    ];

    const trustSteps = [
        { id: 1, text: "Assess your business goals and current financial standing" },
        { id: 2, text: "Match you with the best bank from our curated network" },
        { id: 3, text: "Prepare and organize all required documentation for you" },
        { id: 4, text: "Submit and track your application until funds are credited" }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Section 1: Flexible and Quick Business Loans */}
            <section className="py-16 relative overflow-hidden bg-slate-50">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12"
                    >
                        <div className="lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-[14px] font-medium text-slate-500">Get to Know About</span>
                                <div className="h-[3px] w-12 bg-primary"></div>
                            </div>
                            <h2 className="section-heading">
                                Simplify Your Business <br /> Loan Journey
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="content-p">
                                Aevicta works with Chennai's entrepreneurs, traders, manufacturers, and growing enterprises to connect them with the right business loan from the right financial institution. Our team understands the local market, the banks, and the paperwork, and we put all of that knowledge to work for you.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mainFeatures.map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-none transition-all duration-500 group flex items-start gap-6 border border-slate-100 relative overflow-hidden"
                            >
                                {/* Hover Reveal Background */}
                                <motion.div 
                                    className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                />
                                
                                <div className="relative z-10 w-16 h-16 bg-slate-50 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <feature.icon size={32} strokeWidth={1.5} />
                                    </motion.div>
                                </div>
                                <div className="relative z-10 space-y-2">
                                    <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-tight transition-colors group-hover:text-primary">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[13px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Trust and Fast Services - Offset White/Red Layout */}
            <section className="relative w-full mt-16 mb-24 bg-white border-y border-slate-100">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-stretch">
                        {/* Left Content Area (White) */}
                        <div className="lg:w-[65%] bg-white p-10 lg:p-16 relative overflow-hidden">
                            {/* Topographic Background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 100 C 150 150 350 50 500 100 C 650 150 850 50 1000 100 L 1000 0 L 0 0 Z" fill="none" stroke="black" strokeWidth="0.5" />
                                    <path d="M0 200 C 200 250 400 150 600 200 C 800 250 900 150 1000 200" fill="none" stroke="black" strokeWidth="0.5" />
                                    <path d="M0 300 C 100 350 300 250 500 300 C 700 350 900 250 1000 300" fill="none" stroke="black" strokeWidth="0.5" />
                                </svg>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 space-y-12"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[14px] font-medium text-slate-400">Our Banking Partners</span>
                                        <div className="h-[3px] w-10 bg-primary"></div>
                                    </div>
                                    <h2 className="section-heading">
                                        Backed by India's Most <br /> Trusted Banks
                                    </h2>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-40 h-40 rounded-none overflow-hidden shrink-0 border-4 border-slate-50 shadow-2xl shadow-slate-200/50">
                                        <img 
                                            src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop" 
                                            alt="Banking" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-8">
                                        <p className="content-p">
                                            We have established relationships with leading banks and NBFCs across India. When you work with Aevicta, you get access to a curated network of financial institutions that trust our process and prioritize our clients.
                                        </p>
                                        <div className="grid grid-cols-2 gap-y-5 gap-x-12">
                                            {trustServices.map((service, idx) => (
                                                <div key={idx} className="flex items-center gap-3 group">
                                                    <div className="w-5 h-5 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                        <Check size={12} strokeWidth={4} />
                                                    </div>
                                                    <span className="text-slate-500 font-bold text-[12px] uppercase tracking-wider group-hover:text-primary transition-colors">{service}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Card Area (Primary Red) - Offset Layout */}
                        <div className="lg:w-[35%] bg-primary p-10 lg:p-12 flex flex-col justify-center relative lg:-my-8 lg:translate-x-4 z-20">
                            <div className="space-y-4">
                                {trustSteps.map((step, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="bg-white p-6 rounded-none flex items-center gap-6 group hover:translate-x-2 transition-all duration-500 border border-slate-100"
                                    >
                                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg shrink-0">
                                            {step.id}
                                        </div>
                                        <p className="text-slate-800 font-bold text-[13px] leading-snug">
                                            {step.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 overflow-hidden bg-white border-t border-slate-100">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-10 left-10 rotate-45"><CheckCircle2 size={200} className="text-primary" /></div>
                    <div className="absolute bottom-10 right-10 -rotate-12"><RefreshCcw size={200} className="text-primary" /></div>
                </div>
                
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 text-center md:text-left max-w-2xl"
                    >
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <span className="text-primary font-semibold uppercase tracking-[0.2em] text-[13px]">Simple / Transparent / Secure</span>
                        </div>
                        <h2 className="section-heading">
                            Get a Business Loans <span className="text-primary underline decoration-primary/20 underline-offset-8">Quickly</span>
                        </h2>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0"
                    >
                        <Link 
                            to="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all block ring-4 ring-primary/10"
                        >
                            Apply For Loan Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesSection;
