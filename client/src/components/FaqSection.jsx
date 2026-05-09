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
            question: "What is an institutional property auction?",
            answer: "It is a process where banks and financial institutions auction assets (residential or commercial) to recover dues. These are typically verified assets offered at competitive prices, providing a transparent way to buy high-value properties."
        },
        {
            question: "How do I register for an auction?",
            answer: "You can register by creating an account on our platform, submitting your KYC documents (PAN, Aadhaar), and paying the Earnest Money Deposit (EMD) for the specific property you are interested in."
        },
        {
            question: "Are the properties listed here verified?",
            answer: "Yes, all properties listed on our platform undergo a primary legal and physical verification process by the respective banks and our institutional team to ensure authenticity and clear titles."
        },
        {
            question: "Can I visit the property before bidding?",
            answer: "Absolutely. Each listing includes specific inspection dates and contact details. You can schedule a visit to inspect the physical condition and surrounding locality of the asset before placing your bid."
        },
        {
            question: "What happens after I win an auction?",
            answer: "Once you are the successful bidder, you will receive a Sale Confirmation. You then need to pay the remaining balance within the specified timeline (usually 15-30 days) to receive the official Sale Certificate."
        },
        {
            question: "Is my EMD refundable if I don't win?",
            answer: "Yes, if you are not the successful bidder, the Earnest Money Deposit (EMD) is fully refunded to your registered bank account within the stipulated time frame mentioned in the auction terms."
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

