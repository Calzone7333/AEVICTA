import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ChevronDown, 
    Plus, 
    X, 
    HelpCircle, 
    Search, 
    MessageSquare, 
    Book, 
    Shield, 
    ArrowRight,
    CreditCard,
    ClipboardCheck,
    Users,
    Briefcase
} from 'lucide-react';

const categories = [
    { 
        id: 'loans', 
        name: 'Loan Solutions', 
        desc: 'Explore our wide range of business financing options tailored for Chennai businesses.',
        icon: CreditCard 
    },
    { 
        id: 'process', 
        name: 'Our Process', 
        desc: 'Understand how we assist you from application to disbursement with minimal stress.',
        icon: ClipboardCheck 
    },
    { 
        id: 'eligibility', 
        name: 'Eligibility', 
        desc: 'Find out the requirements and documents needed for various business funding types.',
        icon: Users 
    },
    { 
        id: 'support', 
        name: 'Support & Security', 
        desc: 'Learn about our data privacy policies and how we protect your business information.',
        icon: Shield 
    }
];

const faqs = [
    {
        category: 'loans',
        question: "What types of business loans does Aevicta assist with?",
        answer: "We specialize in a variety of funding options including Unsecured Business Loans, MSME/SME Loans, Working Capital Loans, Machinery Loans, and Startup Funding. We work with multiple banking partners to find the best fit for your business."
    },
    {
        category: 'loans',
        question: "Do you offer loans without collateral?",
        answer: "Yes, we facilitate Unsecured Business Loans where no collateral is required. These are typically based on your business turnover, banking history, and credit score (CIBIL)."
    },
    {
        category: 'process',
        question: "How long does the approval process take?",
        answer: "The timeline varies by loan type. Unsecured loans can often be approved within 48-72 hours, while secured loans (like Loan Against Property) may take 7-10 working days for full processing and disbursement."
    },
    {
        category: 'process',
        question: "What is Aevicta's role in the loan process?",
        answer: "Aevicta acts as your dedicated financial consultant. We analyze your requirements, prepare your documentation, identify the right banking partner with the lowest interest rates, and handle the entire application process on your behalf."
    },
    {
        category: 'eligibility',
        question: "What are the basic eligibility criteria for a business loan?",
        answer: "Generally, your business should be operational for at least 1-3 years (depending on the loan type), have a stable annual turnover, and a healthy credit history. For startups, we look at business plans and projected cash flows."
    },
    {
        category: 'eligibility',
        question: "What documents are required for the application?",
        answer: "Standard documents include 6-12 months of bank statements, GST returns, 2-3 years of ITR with financials (P&L and Balance Sheet), KYC of promoters, and business registration proof (Udyam, MOA, etc.)."
    },
    {
        category: 'support',
        question: "Is my business data safe with Aevicta?",
        answer: "Absolutely. We treat your financial data with the highest level of confidentiality. Your documents are shared only with specific banking partners for the purpose of loan evaluation and are never used for any other purpose."
    },
    {
        category: 'support',
        question: "Does Aevicta charge a fee for its services?",
        answer: "We believe in transparency. Our service charges depend on the complexity of the case and the loan amount. We provide a clear fee structure upfront before we begin the documentation process."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('loans');

    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 antialiased pt-20">
            {/* Hero Section */}
            <div className="relative bg-white border-b border-slate-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
                <div className="max-w-[1400px] mx-auto px-6 py-24 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-[13px]">Help Center</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-navy tracking-tight mb-6">
                        Find Answers to <br /> Your <span className="text-primary">Funding Questions</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl font-medium text-lg leading-relaxed mb-8">
                        Everything you need to know about getting your business funded in Chennai. Can't find what you're looking for? Contact our support team.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="tel:+919943048554" className="bg-navy text-white px-8 py-4 font-bold flex items-center gap-3 hover:bg-primary transition-all shadow-lg shadow-navy/20">
                            <MessageSquare size={20} />
                            Talk to an Expert
                        </a>
                        <a href="mailto:info@aevicta.com" className="bg-white border-2 border-slate-200 text-navy px-8 py-4 font-bold flex items-center gap-3 hover:border-primary hover:text-primary transition-all">
                            Email Support
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-12 gap-16">
                    
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Categories</h3>
                        <div className="grid gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`group flex items-start gap-4 p-5 text-left border transition-all duration-300 ${
                                        activeCategory === cat.id 
                                        ? 'bg-white border-primary shadow-xl shadow-primary/5 translate-x-2' 
                                        : 'bg-white/50 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-lg'
                                    }`}
                                >
                                    <div className={`p-3 transition-colors ${activeCategory === cat.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                        <cat.icon size={20} />
                                    </div>
                                    <div>
                                        <span className={`block font-black uppercase tracking-tight mb-1 ${activeCategory === cat.id ? 'text-navy' : 'text-slate-600'}`}>
                                            {cat.name}
                                        </span>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                            {cat.desc}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Search Card */}
                        <div className="bg-navy p-8 text-white mt-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-primary/40 transition-colors"></div>
                            <h4 className="text-xl font-black mb-4 relative z-10">Need a Custom Solution?</h4>
                            <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed">
                                Every business has unique needs. Let us create a custom funding plan just for you.
                            </p>
                            <Link to="/apply" className="inline-flex items-center gap-2 text-primary font-bold group/link relative z-10">
                                Apply for Free Assessment
                                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* FAQ Content */}
                    <div className="lg:col-span-8">
                        <div className="mb-10 flex items-center gap-4">
                            <h2 className="text-2xl font-black text-navy uppercase tracking-tight">
                                {categories.find(c => c.id === activeCategory)?.name}
                            </h2>
                            <div className="h-[2px] flex-grow bg-slate-200"></div>
                        </div>

                        <div className="space-y-4">
                            {faqs
                                .filter(faq => faq.category === activeCategory)
                                .map((faq, idx) => {
                                    const isOpen = openIndex === idx;
                                    return (
                                        <div 
                                            key={idx}
                                            className={`border transition-all duration-500 ${
                                                isOpen 
                                                ? 'bg-white border-primary shadow-2xl shadow-primary/10' 
                                                : 'bg-white border-slate-100 hover:border-slate-300'
                                            }`}
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                                className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none group"
                                            >
                                                <span className={`text-lg font-black tracking-tight pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-navy group-hover:text-primary'}`}>
                                                    {faq.question}
                                                </span>
                                                <div className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                                                    <ChevronDown size={20} strokeWidth={3} />
                                                </div>
                                            </button>
                                            
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 lg:px-8 pb-8 text-slate-500 font-medium leading-relaxed text-lg border-t border-slate-50 pt-6">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        {/* Didn't find answer */}
                        <div className="mt-16 p-10 bg-white border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 rounded-full">
                                <HelpCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-navy mb-4 uppercase tracking-tight">Still have questions?</h3>
                            <p className="text-slate-500 mb-8 max-w-lg mx-auto font-medium">
                                We're here to help you navigate the complexities of business finance. Reach out to us anytime.
                            </p>
                            <div className="flex justify-center gap-6">
                                <Link to="/contact" className="text-primary font-black uppercase tracking-widest text-sm hover:underline">Contact Page</Link>
                                <span className="text-slate-200">|</span>
                                <button onClick={() => window.scrollTo(0, 0)} className="text-slate-400 font-black uppercase tracking-widest text-sm hover:text-navy transition-colors">Back to Top</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQ;
