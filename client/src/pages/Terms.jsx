import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="bg-brand-light min-h-screen text-brand-dark font-sans selection:bg-brand-primary/30">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-10 pt-40 pb-20 border-b border-black/5">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[0.6rem] font-black uppercase tracking-[0.3em] mb-8 border border-brand-primary/20">
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10 uppercase">
                        Terms of Service
                    </h1>
                    <p className="text-[0.7rem] font-black opacity-40 uppercase tracking-[0.4em]">
                        Last Updated: February 4, 2025
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
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Agreement to Terms</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                By accessing the Aevicta platform, you represent and warrant that you agree to be bound by these Terms of Service in their entirety. These terms govern your access to and use of our bank auction aggregation services. If you disagree with any segment of these legal protocols, you must immediately cease all use of our services.
                            </p>
                        </section>

                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">02.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Use License</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                Permission is granted to temporarily view and utilize the proprietary tools and data on the Aevicta website for personal, non-commercial transitory viewing only. This license does not transfer title and strictly prohibits any unauthorized data scraping, replication, or distribution of our verified listing metadata.
                            </p>
                        </section>

                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">03.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Disclaimer</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                The materials and property auction data on Aevicta are provided on an 'as is' basis. While we strive for absolute accuracy, Aevicta makes no warranties, expressed or implied, regarding the final state or legal encumbrances of properties listed by third-party banking institutions.
                            </p>
                        </section>

                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[1.5rem] font-black text-brand-primary">04.</div>
                                <div className="h-px bg-black/5 flex-grow" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Limitations of Liability</h2>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                In no event shall Aevicta or its executive partners be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the auction materials on our platform, even if notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>
                    </div>

                    {/* Right Sidebar Info */}
                    <div className="md:col-span-4 hidden md:block">
                        <div className="sticky top-32 p-10 bg-white rounded-[32px] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                            <Shield className="w-8 h-8 text-brand-primary mb-6" />
                            <h3 className="text-xl font-bold mb-4">Secure & Protected</h3>
                            <p className="text-sm font-medium leading-loose text-slate-500 mb-8">
                                Our legal terms are designed to protect both the investor and the integrity of the bank auction data we aggregate.
                            </p>
                            <Link to="/contact" className="text-xs font-black uppercase tracking-widest border-b border-black pb-1 hover:border-brand-primary hover:text-brand-primary transition-all">
                                Legal Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;

