import React from 'react';
import { Play, Quote, CheckCircle2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-primary/10 antialiased">
            {/* 1. Breadcrumb Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="bg-white/10 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">About Us</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-semibold text-white font-display tracking-tight leading-tight">We Exist to Make Business Funding Accessible to Every Business in Chennai</h1>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Who We Are */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative flex gap-6">
                            <div className="w-1/2 aspect-[4/5] overflow-hidden rounded-none shadow-xl">
                                <img src="/about2.jpeg" alt="Business Meeting" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 aspect-[4/5] overflow-hidden rounded-none shadow-xl relative translate-y-12">
                                <img src="/about1.jpeg" alt="Loan Consultation" className="w-full h-full object-cover" />
                                <div className="absolute top-0 right-0 h-full w-12 bg-primary flex items-center justify-center [writing-mode:vertical-lr]">
                                    <span className="text-white font-semibold text-[12px] uppercase tracking-[0.3em] rotate-180">Who Is Aevicta?</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">About Aevicta</span>
                                    <div className="h-[2px] w-12 bg-primary"></div>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-semibold text-navy leading-tight">
                                    Your Dedicated Partner in <br /> Business Finance
                                </h2>
                            </div>
                            <div className="space-y-6 text-slate-500 leading-relaxed text-[15px]">
                                <p>
                                    Aevicta is a Chennai-based business loan assistance firm. Our entire focus is on one thing: helping Chennai's businesses get the funding they need, without the stress and confusion that usually comes with it.
                                </p>
                                <p>
                                    We are not a bank. We do not lend money. What we do is bring deep expertise in business finance, strong relationships with leading banks and NBFCs, and a genuine commitment to every client we work with. We sit on your side of the table, understanding your needs first, and then finding the financial solution that fits.
                                </p>
                                <p>
                                    From a small kirana store owner in Chromepet looking for their first working capital loan, to a mid-sized manufacturer in Guindy exploring expansion finance, every business that comes to us gets the same level of attention, honesty, and expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Story */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">Why We Started</span>
                                    <div className="h-[2px] w-12 bg-primary"></div>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-semibold text-navy leading-tight">
                                    Simplifying the Funding <br /> Journey
                                </h2>
                            </div>
                            <div className="space-y-6 text-slate-500 leading-relaxed text-[15px]">
                                <p>
                                    Getting a business loan in India is harder than it should be. Piles of documents, unclear eligibility criteria, multiple bank visits, and still no guarantee of approval. It is a process that drains time, money, and morale from business owners who already have enough on their plate.
                                </p>
                                <p>
                                    We started Aevicta because we believed that Chennai's businesses deserved a better experience. A simpler process. An expert in their corner. Someone who speaks the language of both business and banking, and uses that knowledge to make funding happen faster and smarter.
                                </p>
                                <p className="font-bold text-navy">
                                    That is the gap we fill. That is why Aevicta exists.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 bg-navy p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
                             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                             <h3 className="text-2xl font-semibold text-white relative z-10">"Chennai's businesses deserve a better experience. A simpler process. An expert in their corner."</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Values */}
            <section className="py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-20">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <span className="text-primary font-semibold uppercase tracking-[0.2em] text-[13px]">Our Values</span>
                            <div className="h-[2px] w-8 bg-primary"></div>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-navy tracking-tight">What Drives Everything We Do</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Transparency First', desc: 'We tell you the truth about your eligibility, your chances, and what to expect. No false promises.' },
                            { title: 'Your Goals, Our Priority', desc: 'We do not push products. We assess your business and recommend what genuinely serves your best interest.' },
                            { title: 'Deep Local Knowledge', desc: 'Years of understanding Chennai\'s business ecosystem gives our clients a real edge.' },
                            { title: 'With You Start to Finish', desc: 'We stay involved from the first meeting to the moment funds are credited to your account.' }
                        ].map((v, i) => (
                            <div key={i} className="p-10 border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group">
                                <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h4 className="text-lg font-semibold text-navy mb-4">{v.title}</h4>
                                <p className="text-slate-500 text-[14px] leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="bg-navy py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <h3 className="text-3xl font-semibold text-white max-w-xl text-center md:text-left">Let's Work Together to Grow Your Business</h3>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest text-sm shadow-2xl shadow-primary/20"
                    >
                        Get in Touch With Us
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default About;
