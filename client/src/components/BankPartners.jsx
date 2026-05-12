import React from 'react';
import { motion } from 'framer-motion';

const BankPartners = () => {
    const privateBanks = [
        { name: "HDFC Bank", logo: "/logos/hdfc.png" },
        { name: "ICICI Bank", logo: "/logos/icici.png" },
        { name: "Axis Bank", logo: "/logos/axis.png" },
        { name: "Yes Bank", logo: "/logos/yes.png" },
        { name: "IndusInd Bank", logo: "/logos/indusind.png" },
        { name: "IDFC First", logo: "/logos/idfc.png" }
    ];

    const publicBanks = [
        { name: "SBI", logo: "/logos/sbi.png" },
        { name: "Bank of Baroda", logo: "/logos/bob.png" },
        { name: "PNB", logo: "/logos/pnb.png" },
        { name: "Canara Bank", logo: "/logos/canara.png" },
        { name: "Union Bank", logo: "/logos/union.png" },
        { name: "Indian Bank", logo: "/logos/indian.png" },
        { name: "Bank of India", logo: "/logos/boi.png" },
        { name: "Central Bank", logo: "/logos/central.png" },
        { name: "IOB", logo: "/logos/iob.png" },
        { name: "Bank of Maharashtra", logo: "/logos/bom.png" }
    ];

    return (
        <section className="py-16 bg-slate-50 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-24 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-[13px]">Our Network</span>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-navy tracking-tight">Backed by India's Most Trusted Banks</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">We have direct partnerships and tie-ups with leading financial institutions to ensure you get the best interest rates and fastest approvals.</p>
                </div>

                {/* Private Sector Banks */}
                <div className="mb-20">
                    <div className="flex items-center gap-6 mb-12">
                        <h3 className="text-xl font-black text-navy uppercase tracking-[0.2em] whitespace-nowrap">Private Sector Partners</h3>
                        <div className="h-[1px] w-full bg-slate-200"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {privateBanks.map((bank, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="bg-white p-2 flex flex-col items-center justify-center h-28 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
                            >
                                <div className="w-full h-18 mb-1 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={bank.logo}
                                        alt={bank.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${bank.name}&background=f1f5f9&color=0f172a&bold=true`;
                                        }}
                                        className="max-h-full max-w-full object-contain transition-all duration-500"
                                    />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">{bank.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Public Sector Banks */}
                <div>
                    <div className="flex items-center gap-6 mb-12">
                        <h3 className="text-xl font-black text-navy uppercase tracking-[0.2em] whitespace-nowrap">Public Sector & Nationalized</h3>
                        <div className="h-[1px] w-full bg-slate-200"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {publicBanks.map((bank, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="bg-white p-2 flex flex-col items-center justify-center h-24 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
                            >
                                <div className="w-full h-14 mb-1 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={bank.logo}
                                        alt={bank.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${bank.name}&background=f1f5f9&color=0f172a&bold=true`;
                                        }}
                                        className="max-h-full max-w-full object-contain transition-all duration-500"
                                    />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">{bank.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BankPartners;
