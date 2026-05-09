import React, { useState } from 'react';
import { Search, FileCheck, Gavel, Upload, ShieldCheck, Banknote, Key } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('Buying');

    const content = {
        Buying: [
            {
                icon: Search,
                title: "Search Properties",
                desc: "Browse through thousands of verified residential and commercial assets listed by top banks."
            },
            {
                icon: FileCheck,
                title: "Register & Verify",
                desc: "Complete your KYC and register for the auction to secure your bidding rights."
            },
            {
                icon: Gavel,
                title: "Place Your Bid",
                desc: "Join the live auction, place your bids in real-time, and win your desired property."
            }
        ],
        Renting: [
            {
                icon: Search,
                title: "Find Rentals",
                desc: "Explore premium rental properties across major cities with detailed asset information."
            },
            {
                icon: FileCheck,
                title: "Document Check",
                desc: "Submit your basic details and identification for quick tenant verification."
            },
            {
                icon: Key,
                title: "Move In",
                desc: "Finalize your agreement online and get the keys to your new space hassle-free."
            }
        ],
        Selling: [
            {
                icon: Upload,
                title: "List Your Asset",
                desc: "Upload property details, high-quality images, and legal documents to our platform."
            },
            {
                icon: ShieldCheck,
                title: "Asset Verification",
                desc: "Our institutional team reviews and verifies the asset for authenticity and compliance."
            },
            {
                icon: Banknote,
                title: "Start Auction",
                desc: "We host your property on our marketplace and find the best institutional buyers."
            }
        ]
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading mb-4">
                        How It Works
                    </h2>
                    <p className="content-p max-w-2xl mx-auto">
                        Our platform simplifies the institutional property journey into three professional steps.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center items-center gap-4 mb-16">
                    {['Buying', 'Renting', 'Selling'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-2.5 rounded-none font-bold text-[0.88rem] transition-all duration-300 ${
                                activeTab === tab 
                                ? 'bg-primary text-white' 
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    <AnimatePresence mode="wait">
                        {content[activeTab].map((step, idx) => (
                            <motion.div
                                key={activeTab + idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="relative bg-slate-50 border border-slate-100 rounded-none p-6 flex flex-col items-center text-center group transition-all duration-500"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center text-[0.75rem] font-black border-4 border-white">
                                    0{idx + 1}
                                </div>

                                <div className="w-14 h-14 rounded-none bg-white flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100">
                                    <step.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h4 
                                    className="text-xl font-black text-slate-900 mb-3 tracking-tight"
                                >
                                    {step.title}
                                </h4>
                                <p className="content-p">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

