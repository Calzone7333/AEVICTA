import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building, Users, Landmark, Zap, Target, Scale, ShieldCheck, FileText, CheckCircle2, PieChart, Coins, Briefcase } from 'lucide-react';

const Service = () => {
    const [activeTab, setActiveTab] = useState('New Business');

    const tabs = [
        'New Business', 
        'Compliance', 
        'GST & Income Tax', 
        'Virtual CFO', 
        'Fundraising', 
        'Business Loan'
    ];

    const serviceData = {
        'New Business': [
            { title: 'Sole Proprietorship Registration', icon: Building, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Partnership Firm Registration', icon: Users, img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop' },
            { title: 'LLP Registration', icon: Landmark, img: 'https://images.unsplash.com/photo-1507679799987-c73774573b0a?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Private Limited Company', icon: Building, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Public Limited Company', icon: Building, img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop' },
            { title: 'One Person Company', icon: Landmark, img: 'https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Startup Business Registration', icon: Zap, img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Section 8 Company Registration', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Producer Company Registration', icon: Briefcase, img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Indian Subsidiary Registration', icon: Landmark, img: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Branch Office Registration', icon: Building, img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Foreign Subsidiary', icon: Landmark, img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop' },
            { title: '80G & 12A Registration', icon: FileText, img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Society Registration', icon: Users, img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Trust Registration', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
            { title: 'DSC Registration', icon: Zap, img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Udyam Registration', icon: Landmark, img: 'https://images.unsplash.com/photo-1541888941255-081ad4a67039?q=80&w=1000&auto=format&fit=crop' },
            { title: 'FSSAI Registration', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=1000&auto=format&fit=crop' },
            { title: 'IEC Registration', icon: FileText, img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Drug & Cosmetic License', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=1000&auto=format&fit=crop' },
            { title: 'PF Registration', icon: Users, img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop' },
            { title: 'ESI Registration', icon: Users, img: 'https://images.unsplash.com/photo-1556761175-4b46a572b736?q=80&w=1000&auto=format&fit=crop' }
        ],
        'Compliance': [
            { title: 'Adding Director', icon: Zap, img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Removal of Director', icon: Target, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Increase Authorized Share Capital', icon: Scale, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Change Company Address', icon: Building, img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop' },
            { title: 'MOM & AOA Amendments', icon: FileText, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
            { title: 'DIN Validation', icon: Landmark, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'DIN Surrender', icon: Target, img: 'https://images.unsplash.com/photo-1554224155-1696413575b9?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Closure of Private Limited Company', icon: Target, img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop' },
            { title: 'LLP Name Change', icon: FileText, img: 'https://images.unsplash.com/photo-1507679799987-c73774573b0a?q=80&w=1000&auto=format&fit=crop' },
            { title: 'LLP Adding a Designated Partner', icon: Users, img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Changes in LLP Agreement', icon: FileText, img: 'https://images.unsplash.com/photo-1507679799987-c73774573b0a?q=80&w=1000&auto=format&fit=crop' },
            { title: 'LLP Roc Compliance', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Closure of LLP', icon: Target, img: 'https://images.unsplash.com/photo-1554224155-1696413575b9?q=80&w=1000&auto=format&fit=crop' }
        ],
        'GST & Income Tax': [
            { title: 'GST Registration', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1554224155-1696413575b9?q=80&w=1000&auto=format&fit=crop' },
            { title: 'GST Return Filing', icon: FileText, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Letter of Undertaking', icon: CheckCircle2, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'GST E-Way Bill', icon: FileText, img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop' },
            { title: 'GST Cancellation/Surrender', icon: Target, img: 'https://images.unsplash.com/photo-1554224155-6199393a4e6b?q=80&w=1000&auto=format&fit=crop' },
            { title: 'GST Registration Modification', icon: FileText, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Income Tax Return Filing', icon: FileText, img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Form 15CA & Form 15CB Filing', icon: FileText, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' },
            { title: 'NRI Income Tax Planning', icon: Users, img: 'https://images.unsplash.com/photo-1556761175-4b46a572b736?q=80&w=1000&auto=format&fit=crop' }
        ],
        'Virtual CFO': [
            { title: 'Bookkeeping & Accounting', icon: PieChart, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Payroll Services', icon: Users, img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Virtual CFO Service', icon: Briefcase, img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop' },
            { title: 'CMA Report Preparation', icon: FileText, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Business Plan Preparation', icon: PieChart, img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop' },
            { title: 'IND-AS Compliance', icon: Landmark, img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Valuation for M&A', icon: Scale, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Taxation for M&A', icon: Coins, img: 'https://images.unsplash.com/photo-1554224155-1696413575b9?q=80&w=1000&auto=format&fit=crop' }
        ],
        'Fundraising': [
            { title: 'Fundraising Support', icon: Coins, img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Investment Pitch Deck', icon: PieChart, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Detailed Project Report', icon: FileText, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' }
        ],
        'Business Loan': [
            { title: 'Corporate Business Loans', icon: Briefcase, img: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop' },
            { title: 'SME Loan Support', icon: Building, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop' }
        ]
    };

    const serviceDesc = "We provide expert legal and financial services to help your business grow and stay compliant with all government regulations.";

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-[#00A3E0]/10 antialiased">
            {/* 1. Breadcrumb Hero Section */}
            <section className="bg-[#001a33] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">Services</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white font-display tracking-tight">Our Services</h1>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Tabs & Grid */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-20 border-b border-slate-200 pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-6 font-display font-black uppercase tracking-tight transition-all relative text-center
                                    ${activeTab === tab 
                                        ? 'opacity-100' 
                                        : 'opacity-40 hover:opacity-100'
                                    }
                                `}
                                style={{ 
                                    fontSize: '16px', 
                                    fontWeight: '900', 
                                    lineHeight: '24px', 
                                    color: 'oklch(0.208 0.042 265.755)',
                                    fontFamily: 'Rajdhani, sans-serif'
                                }}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div 
                                        layoutId="activeServiceTabHighlight"
                                        className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-primary"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Service Cards Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {serviceData[activeTab].map((service, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="bg-white group relative shadow-sm hover:shadow-xl transition-all duration-500 rounded-none border border-slate-100 p-10 space-y-6"
                                >
                                    <div className="w-16 h-16 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <service.icon size={32} />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-[#001a33] group-hover:text-primary transition-colors leading-tight min-h-[50px] flex items-center">{service.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-[14px] line-clamp-3">{service.desc || serviceDesc}</p>
                                        <div className="pt-4 flex items-center gap-2 text-primary font-black uppercase text-[12px] tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                            <span>Learn More</span>
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#001a33] py-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-4xl font-black text-white leading-tight">Expert Financial <br /> Solutions Await</h2>
                        <p className="text-slate-400 max-w-md mx-auto md:mx-0">Get in touch with our expert consultants for tailored business registrations, tax planning, and growth strategies.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-[#001a33] px-10 py-5 font-black uppercase tracking-widest text-[13px]"
                        >
                            Contact Us
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#00A3E0] text-white px-10 py-5 font-black uppercase tracking-widest text-[13px] shadow-2xl shadow-[#00A3E0]/20"
                        >
                            Schedule A Call
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
