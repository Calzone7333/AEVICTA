import React, { useState } from 'react';
import { ChevronDown, Plus, X, HelpCircle, Search, MessageSquare, Book, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { 
        id: 'general', 
        name: 'General Report', 
        desc: 'A general report provides a concise overview of key findings and conclusions on a specific subject regarding property auctions.',
        icon: HelpCircle 
    },
    { 
        id: 'auction', 
        name: 'Our Service', 
        desc: 'Our service delivers tailored solutions to meet your unique property bidding needs efficiently and effectively.',
        icon: MessageSquare 
    },
    { 
        id: 'security', 
        name: 'Support', 
        desc: 'Our dedicated support team is here to assist you with any questions or issues you may have about legal checks or auction participation.',
        icon: Shield 
    },
];

const faqs = [
    {
        category: 'general',
        question: "What is Aevicta?",
        answer: "Aevicta is India's premier aggregator for bank auction properties. We simplify the search process by bringing multiple bank listings into one easy-to-use platform, providing you with data-driven insights to make informed decisions."
    },
    {
        category: 'general',
        question: "Is there a fee to search for properties?",
        answer: "No, searching for properties on Aevicta includes a free tier. We also offer premium plans for advanced features like detailed reports, legal status checks, and dedicated support."
    },
    {
        category: 'auction',
        question: "How do I participate in an auction?",
        answer: "To participate, you typically need to visit the specific bank's official auction portal (which we link to), register there, submit the Earnest Money Deposit (EMD) as specified in the tender document, and complete their KYC process."
    },
    {
        category: 'auction',
        question: "What is EMD (Earnest Money Deposit)?",
        answer: "EMD is a refundable security deposit that a bidder must submit to the bank to demonstrate serious interest in buying the property. It is usually 10% of the reserve price. If you win, it's adjusted against the final price; if you lose, it's refunded."
    },
    {
        category: 'auction',
        question: "Is the reserve price the final price?",
        answer: "No, the reserve price is merely the starting point. It is the minimum price below which the bank will not accept bids. The final sale price is determined during the live e-auction process."
    },
    {
        category: 'security',
        question: "Are the property titles verified?",
        answer: "We aggregate listings from verified banking sources. However, 'As is where is' is the standard rule for auctions. We strongly recommend that you perform independent legal due diligence regarding the property's title and encumbrances before bidding."
    },
    {
        category: 'security',
        question: "Can I inspect the property before bidding?",
        answer: "Yes, banks usually specify an inspection date and time in the public notice. We highly recommend visiting the property physically to assess its condition and occupancy status."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="bg-white min-h-screen text-slate-900 selection:bg-[#E11D48]/10 antialiased">
            {/* Header Section */}
            <div className="pt-40 pb-24 px-6 text-center max-w-[1400px] mx-auto border-b border-slate-100">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#E11D48]/5 text-[#E11D48] text-[0.7rem] font-black uppercase tracking-[0.4em] mb-8 border border-[#E11D48]/10">
                    HELP CENTER
                </div>
                <h1 
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-2xl md:text-4xl font-bold text-slate-950 tracking-tight mb-8 leading-[1.1] uppercase"
                >
                    Frequently Asked <br /> Questions
                </h1>
                <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[0.75rem] max-w-xl mx-auto border-l-2 border-slate-200 pl-4">
                    Trusted by thousands of property investors across India
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-32">
                <div className="space-y-40">
                    {categories.map((category) => (
                        <div key={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                            {/* Left Column: Category Info */}
                            <div className="lg:col-span-4 lg:sticky lg:top-32">
                                <h2 
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                    className="text-xl font-bold text-slate-950 leading-none mb-6 uppercase tracking-tight"
                                >
                                    {category.name}
                                </h2>
                                <p 
                                    style={{ 
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '18px',
                                        fontWeight: 400,
                                        lineHeight: '28px',
                                        color: 'oklch(0.554 0.046 257.417)'
                                    }}
                                    className="max-w-xs border-l-4 border-slate-100 pl-6"
                                >
                                    {category.desc}
                                </p>
                            </div>

                            {/* Right Column: Accordion List - NO ROUNDED */}
                            <div className="lg:col-span-8">
                                <div className="space-y-4">
                                    {faqs
                                        .filter(faq => faq.category === category.id)
                                        .map((faq, idx) => {
                                            const itemKey = `${category.id}-${idx}`;
                                            const isOpen = openIndex === itemKey;
                                            
                                            return (
                                                <div 
                                                    key={itemKey}
                                                    className={`transition-all duration-300 border ${isOpen 
                                                        ? 'bg-slate-50 border-slate-200 shadow-xl' 
                                                        : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-lg'}`}
                                                >
                                                    <button
                                                        onClick={() => setOpenIndex(isOpen ? null : itemKey)}
                                                        className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                                                    >
                                                        <span className={`text-[1.05rem] font-bold pr-12 transition-colors ${isOpen ? 'text-slate-950' : 'text-slate-700'}`}>
                                                            {faq.question}
                                                        </span>
                                                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#E11D48] text-white shadow-xl rotate-45' : 'bg-slate-50 text-slate-400'}`}>
                                                            <Plus size={18} strokeWidth={3} />
                                                        </div>
                                                    </button>
                                                    
                                                    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                        <div 
                                                            style={{ 
                                                                fontFamily: "'Inter', sans-serif",
                                                                fontSize: '18px',
                                                                fontWeight: 400,
                                                                lineHeight: '28px',
                                                                color: 'oklch(0.554 0.046 257.417)'
                                                            }}
                                                            className="px-8 pb-8 antialiased max-w-2xl"
                                                        >
                                                            {faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default FAQ;

