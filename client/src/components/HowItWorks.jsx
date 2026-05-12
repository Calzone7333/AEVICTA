import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, CheckCircle2, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
    const stats = [
        { icon: Users, val: '100+', label: 'Applications Processed' },
        { icon: Building2, val: '25+', label: 'Banking Partners' },
        { icon: CheckCircle2, val: '98%', label: 'Success Rate' },
        { icon: TrendingUp, val: '₹50Cr+', label: 'Funds Facilitated' }
    ];

    return (
        <div className="bg-white">
            {/* Social Proof Numbers */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center space-y-3"
                            >
                                <div className="w-16 h-16 bg-primary/5 text-primary rounded-none mx-auto flex items-center justify-center">
                                    <stat.icon size={32} />
                                </div>
                                <h3 className="text-4xl font-black text-navy tracking-tight">{stat.val}</h3>
                                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
