import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`rounded-none overflow-hidden border transition-all duration-500 ${isOpen ? 'bg-white border-primary/20' : 'bg-slate-50 border-slate-100 hover:bg-white'}`}>
            <button 
                onClick={onClick}
                className="w-full px-5 py-4 flex items-center justify-between text-left group"
            >
                <span 
                    className="faq-question transition-colors duration-300"
                >
                    {question}
                </span>
                <div className={`w-10 h-10 rounded-none flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-white text-slate-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div 
                            className="content-p px-7 pb-8 font-medium"
                        >
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What documents are required for a business loan in Chennai?",
            answer: "Typically, you'll need business registration proof (GST/Trade License), last 6-12 months bank statements, KYC of directors/partners, and audited financials (for larger amounts). We help you organize all of these correctly."
        },
        {
            question: "How long does the loan approval process take?",
            answer: "While it varies by bank, we strive for fast-track approvals. Most working capital and term loans are approved within 7-14 business days once all documentation is submitted correctly."
        },
        {
            question: "Do I need collateral for a business loan?",
            answer: "Not necessarily. We specialize in both secured (with collateral like property) and unsecured business loans. MSME schemes often provide funding without collateral for eligible businesses."
        },
        {
            question: "Can I get a loan if my business is a startup?",
            answer: "Yes. While harder than established firms, we have specific expertise in startup business funding. We help you present a strong business plan and financial projections to the right lenders."
        },
        {
            question: "What is the typical interest rate for business loans?",
            answer: "Rates vary based on the bank, loan type, and your business profile. They generally range from 9% to 18%. Our role is to negotiate the most competitive rate available for you."
        },
        {
            question: "Why should I use Aevicta instead of going directly to a bank?",
            answer: "We save you time and stress. We know which banks are currently favoring your industry, we handle the paperwork, and we ensure your application is structured for maximum approval chance, which often leads to better terms."
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>
            
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">Any more inquiry?</span>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="section-heading">Frequently Asked Questions</h2>
                    <p className="content-p max-w-2xl mx-auto">
                        Find answers to common questions about our marketplace and process.
                    </p>
                </motion.div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="space-y-6">
                        {faqs.slice(0, 3).map((faq, i) => (
                            <FaqItem 
                                key={i}
                                question={faq.question} 
                                answer={faq.answer} 
                                isOpen={openIndex === i} 
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)} 
                            />
                        ))}
                    </div>
                    <div className="space-y-6">
                        {faqs.slice(3, 6).map((faq, i) => {
                            const actualIndex = i + 3;
                            return (
                                <FaqItem 
                                    key={actualIndex}
                                    question={faq.question} 
                                    answer={faq.answer} 
                                    isOpen={openIndex === actualIndex} 
                                    onClick={() => setOpenIndex(openIndex === actualIndex ? -1 : actualIndex)} 
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;

