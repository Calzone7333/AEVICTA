import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="bg-brand-light min-h-screen text-brand-dark font-sans selection:bg-brand-primary/30">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-10 pt-40 pb-20 border-b border-black/5">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[0.6rem] font-black uppercase tracking-[0.3em] mb-8 border border-brand-primary/20">
                        Protection
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10 uppercase">
                        Privacy Policy
                    </h1>
                    <p className="text-[0.7rem] font-black opacity-40 uppercase tracking-[0.4em]">
                        Effective Date: February 14, 2025
                    </p>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="max-w-[1400px] mx-auto px-10 py-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                    <div className="md:col-span-8 space-y-32">
                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">01.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Introduction</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                Welcome to Aevicta. We value your privacy and are committed to protecting your sensitive data with the same diligence we apply to our property intelligence. This Privacy Policy outlines how your information is handled within our architecture to ensure a secure bidding experience.
                            </p>
                        </section>

                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">02.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Data We Collect</h2>
                            <div className="space-y-6">
                                <p className="text-lg font-medium leading-relaxed text-slate-500">To provide a high-fidelity experience, we collect specific segments of data:</p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[
                                        { title: 'Identity Data', content: 'Verified name, username, or unique platform identifiers.' },
                                        { title: 'Contact Data', content: 'Email address, verified telephone numbers, and secure mailing paths.' },
                                        { title: 'Technical Data', content: 'IP address, secure login timestamps, and browser orientation.' },
                                        { title: 'Interaction Data', content: 'Behavioral insights on how you engage with our auction filters and tools.' }
                                    ].map((item, i) => (
                                        <li key={i} className="p-6 bg-white/50 border border-black/5 rounded-2xl flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                                            <div>
                                                <span className="text-[0.8rem] font-black uppercase tracking-widest block mb-1">{item.title}</span>
                                                <span className="text-[0.9rem] font-medium text-slate-400">{item.content}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">03.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">How We Use Your Data</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                Aevicta utilizes your data primarily to personalize your investment feed, manage executive-level accounts, and provide instantaneous auction notifications. We normalize this information to improve platform stability and prevent unauthorized access to sensitive bidding resources.
                            </p>
                        </section>

                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">04.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Data Security</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                We have implemented robust encryption protocols and secure-layer gateways to ensure your personal data is shielded from accidental loss or external breach. Access to your personal data is restricted to authorized personnel who are subject to a strict duty of confidentiality.
                            </p>
                        </section>
                    </div>

                    {/* Right Sidebar Info */}
                    <div className="md:col-span-4 hidden md:block">
                        <div className="sticky top-32 p-10 bg-white rounded-[32px] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                            <Shield className="w-8 h-8 text-brand-primary mb-6" />
                            <h3 className="text-xl font-bold mb-4">Privacy Standards</h3>
                            <p className="text-sm font-medium leading-loose text-slate-500 mb-8">
                                We are committed to transparency. Our data collection is governed by the highest standards of digital privacy and ethical aggregation.
                            </p>
                            <Link to="/contact" className="text-xs font-black uppercase tracking-widest border-b border-black pb-1 hover:border-brand-primary hover:text-brand-primary transition-all">
                                Privacy Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;

