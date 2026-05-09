import React from 'react';
import { Play, Quote, ChevronRight, CheckCircle2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-[#00A3E0]/10 antialiased">
            {/* 1. Breadcrumb Hero Section */}
            <section className="bg-[#001a33] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="bg-white/10 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">About Us</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white font-display tracking-tight">About Us</h1>
                </div>
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Few Words About Our Company */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side Images */}
                        <div className="relative flex gap-6">
                            <div className="w-1/2 aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                                <img src="https://images.unsplash.com/photo-1554224155-1696413575b9?q=80&w=1000&auto=format&fit=crop" alt="Office Work" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 aspect-[4/5] overflow-hidden rounded-sm shadow-xl relative translate-y-12">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" alt="Consultant" className="w-full h-full object-cover" />
                                <div className="absolute top-0 right-0 h-full w-12 bg-[#00A3E0] flex items-center justify-center [writing-mode:vertical-lr]">
                                    <span className="text-white font-black text-[12px] uppercase tracking-[0.3em] rotate-180">Trusted Company</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Get To Know About Us</span>
                                    <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-[#001a33] leading-tight">
                                    Few Words About Our <br /> Company
                                </h2>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-[15px] max-w-xl">
                                About our pylon company to provide loan to customers dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem provide more more funds to bank and small middle company.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {['Expert Financial Advice', 'Low Interest Rates', 'Quick Loan Approval', 'Trusted by Thousands'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[#001a33] font-bold text-[14px]">
                                        <CheckCircle2 size={18} className="text-[#00A3E0]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Customers Testimonials */}
            <section className="py-32 bg-[#f4f7fa] relative overflow-hidden">
                {/* World Map Background (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
                    <img src="https://www.transparenttextures.com/patterns/world-map.png" alt="Map" className="w-full h-full object-cover" />
                </div>
                
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="space-y-4 mb-16">
                        <div className="flex items-center gap-3">
                            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Customers Testimonials</span>
                            <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#001a33]">Customers Testimonials</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Vernon Roy', role: 'Founder', img: 'https://i.pravatar.cc/150?u=1' },
                            { name: 'Vernon Roy', role: 'Founder', img: 'https://i.pravatar.cc/150?u=2' },
                            { name: 'Clyde Williamson', role: 'Analytics', img: 'https://i.pravatar.cc/150?u=3' }
                        ].map((t, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 shadow-sm border-l-4 border-[#00A3E0] relative group"
                            >
                                <p className="text-slate-500 italic text-[15px] leading-relaxed mb-8">
                                    "I was very impressed by the company service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                                    <div>
                                        <h4 className="font-black text-[#001a33] text-[15px]">{t.name}</h4>
                                        <p className="text-[12px] text-[#00A3E0] font-bold uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                                <Quote size={48} className="absolute bottom-10 right-10 text-slate-100 group-hover:text-[#00A3E0]/10 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Facilities & Stats Section */}
            <section className="relative h-[600px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Facilities" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#001a33]/80"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-10 max-w-4xl px-6">
                    <button className="w-20 h-20 bg-[#00A3E0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-2xl shadow-[#00A3E0]/40">
                        <Play size={32} fill="currentColor" className="translate-x-1" />
                    </button>
                    <h2 className="text-4xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
                        We Can Give Best Facilities <br /> For Business
                    </h2>
                </div>

                {/* Counter Bar Overlay */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-6">
                    <div className="bg-[#00A3E0] py-12 px-10 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl">
                        {[
                            { val: '99%', label: 'We Approve Loans' },
                            { val: '$90K', label: 'Daily Payments' },
                            { val: '8,900', label: 'Happy Customers' },
                            { val: '346', label: 'Staff Members' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center border-r border-white/20 last:border-0">
                                <h3 className="text-4xl font-black text-white mb-1">{stat.val}</h3>
                                <p className="text-white/80 text-[12px] font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Meet the Best Agents */}
            <section className="pt-52 pb-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="space-y-4 mb-16">
                        <div className="flex items-center gap-3">
                            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Professional & Experts</span>
                            <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#001a33]">Meet the Best Agents</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'David Richard', role: 'Branch Manager', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
                            { name: 'Bobby Jenkins', role: 'Branch Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
                            { name: 'Hallie Moss', role: 'CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop' }
                        ].map((agent, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-sm shadow-lg">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img src={agent.img} alt={agent.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="absolute top-0 left-0 h-1 w-0 bg-[#00A3E0] group-hover:w-full transition-all duration-500"></div>
                                    <h4 className="font-black text-[#001a33] text-xl mb-1">{agent.name}</h4>
                                    <p className="text-[13px] text-[#00A3E0] font-bold uppercase tracking-widest">{agent.role}</p>
                                    
                                    {/* Social Hover Icons */}
                                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        <Facebook size={16} className="text-slate-400 hover:text-[#00A3E0] cursor-pointer" />
                                        <Twitter size={16} className="text-slate-400 hover:text-[#00A3E0] cursor-pointer" />
                                        <Linkedin size={16} className="text-slate-400 hover:text-[#00A3E0] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="bg-[#f4f7fa] py-20 border-t border-slate-100">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
                    <h3 className="text-3xl font-black text-[#001a33] max-w-md">Subscribe to our newsletter for daily updates.</h3>
                    <div className="flex w-full max-w-lg bg-white p-2 rounded-sm shadow-sm">
                        <input type="email" placeholder="Email Address" className="flex-1 px-4 py-3 outline-none text-slate-600" />
                        <button className="bg-[#001a33] text-white px-8 py-3 font-bold uppercase tracking-widest text-[12px] hover:bg-[#00A3E0] transition-colors">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
