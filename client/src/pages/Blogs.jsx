import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, MessageSquare, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { API_BASE_URL } from '../apiConfig';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const mockBlogs = [
        {
            id: 1,
            title: "How to Get a Business Loan in Chennai: A Complete Step-by-Step Guide",
            excerpt: "A practical walkthrough for Chennai business owners covering eligibility criteria, documents required, types of loans available, common mistakes to avoid, and how to improve your approval chances.",
            content: "A practical walkthrough for Chennai business owners covering eligibility criteria, documents required, types of loans available, common mistakes to avoid, and how to improve your approval chances.",
            category: "Business Loan",
            author: "Aevicta Team",
            createdAt: "2025-05-10"
        },
        {
            id: 2,
            title: "Working Capital Loan vs Term Loan: Which One Does Your Business Actually Need?",
            excerpt: "A clear comparison with real-world examples relevant to Chennai businesses, helping owners choose the right loan type for their specific situation.",
            content: "A clear comparison with real-world examples relevant to Chennai businesses, helping owners choose the right loan type for their specific situation.",
            category: "Finance Tips",
            author: "Aevicta Team",
            createdAt: "2025-05-08"
        },
        {
            id: 3,
            title: "5 Reasons Business Loans Get Rejected in India (And How to Avoid Every Single One)",
            excerpt: "A candid, helpful breakdown of why banks reject applications and what business owners can do right now to strengthen their financial profile before applying.",
            content: "A candid, helpful breakdown of why banks reject applications and what business owners can do right now to strengthen their financial profile before applying.",
            category: "Business Insights",
            author: "Aevicta Team",
            createdAt: "2025-05-05"
        },
        {
            id: 4,
            title: "MSME Loans in Chennai: Everything You Need to Know in 2025",
            excerpt: "A comprehensive guide to MSME-specific loan products available through banks in Chennai, covering eligibility, documentation, timelines, and how to apply.",
            content: "A comprehensive guide to MSME-specific loan products available through banks in Chennai, covering eligibility, documentation, timelines, and how to apply.",
            category: "MSME",
            author: "Aevicta Team",
            createdAt: "2025-05-02"
        },
        {
            id: 5,
            title: "How to Improve Your Business CIBIL Score Before Applying for a Loan",
            excerpt: "Actionable steps for Chennai entrepreneurs to strengthen their credit profile and significantly increase their chances of loan approval.",
            content: "Actionable steps for Chennai entrepreneurs to strengthen their credit profile and significantly increase their chances of loan approval.",
            category: "Credit Score",
            author: "Aevicta Team",
            createdAt: "2025-04-28"
        },
        {
            id: 6,
            title: "Why Chennai Businesses Are Getting Better Loan Results With Expert Assistance",
            excerpt: "An honest look at the advantages of having expert support during the loan process, what it saves in time, money, and stress compared to going it alone.",
            content: "An honest look at the advantages of having expert support during the loan process, what it saves in time, money, and stress compared to going it alone.",
            category: "Success Stories",
            author: "Aevicta Team",
            createdAt: "2025-04-25"
        }
    ];

    useEffect(() => {
        setBlogs(mockBlogs);
        setLoading(false);
    }, []);

    return (
        <div className="bg-[#f2f4f7] min-h-screen font-sans selection:bg-primary/10">
            {/* 1. Hero Section */}
            <section className="bg-[#001a33] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <Link to="/" className="bg-white/10 text-white px-3 py-1 rounded-sm hover:bg-white/20 transition-colors">Home</Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">Blog</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-white font-display tracking-tight">Blog</h1>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Main Content & Sidebar */}
            <section className="py-24">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Blogs Column (75%) */}
                        <div className="lg:col-span-8 space-y-12">
                            {blogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-white shadow-sm border border-slate-100 overflow-hidden group"
                                >
                                    <div className="p-10 space-y-6">
                                        <div className="flex flex-wrap items-center gap-6 text-[13px] text-slate-400 font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="text-primary" />
                                                <span>{new Date(blog.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <User size={14} className="text-primary" />
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Tag size={14} className="text-primary" />
                                                <span>{blog.category}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-black text-[#001a33] hover:text-primary transition-colors leading-tight cursor-pointer" onClick={() => toggleExpand(blog.id)}>
                                            {blog.title}
                                        </h2>

                                        <p className="text-slate-500 leading-relaxed text-[15px]">
                                            {blog.excerpt}
                                        </p>

                                        <AnimatePresence>
                                            {expandedId === blog.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-6 text-slate-600 leading-relaxed text-[15px] border-t border-slate-50">
                                                        {blog.content}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <div className="pt-6 flex items-center justify-between border-t border-slate-50">
                                            <button
                                                onClick={() => toggleExpand(blog.id)}
                                                className="flex items-center gap-2 text-slate-900 font-black uppercase text-[13px] tracking-widest group/btn"
                                            >
                                                <ArrowRight size={16} className={`text-primary transition-transform ${expandedId === blog.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                                                <span>{expandedId === blog.id ? 'Show Less' : 'Read More'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}


                        </div>

                        {/* Sidebar Column (25%) */}
                        <aside className="lg:col-span-4 space-y-10">

                            {/* Search */}
                            <div className="bg-white p-8 border border-slate-100 shadow-sm">
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="flex-1 bg-slate-50 border-r-0 border-slate-100 px-4 py-3 text-sm focus:outline-none"
                                    />
                                    <button className="bg-primary text-white p-3 hover:bg-slate-900 transition-colors">
                                        <Search size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-8 border border-slate-100 shadow-sm space-y-6">
                                <h4 className="text-lg font-black text-[#001a33] border-b border-slate-100 pb-4">Categories</h4>
                                <ul className="space-y-4">
                                    {Object.entries(
                                        blogs.reduce((acc, b) => {
                                            acc[b.category] = (acc[b.category] || 0) + 1;
                                            return acc;
                                        }, {})
                                    ).map(([name, count]) => (
                                        <li key={name}>
                                            <a href="#" className="flex items-center justify-between text-[14px] font-bold text-slate-500 hover:text-primary transition-colors group">
                                                <div className="flex items-center gap-2">
                                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <span>{name}</span>
                                                </div>
                                                <span className="text-slate-300 font-medium">({count})</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tags */}
                            <div className="bg-white p-8 border border-slate-100 shadow-sm space-y-6">
                                <h4 className="text-lg font-black text-[#001a33] border-b border-slate-100 pb-4">Tags</h4>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {Array.from(new Set(blogs.map(b => b.category.toLowerCase()))).map((tag) => (
                                        <a
                                            key={tag}
                                            href="#"
                                            className="px-4 py-2 bg-slate-50 text-[12px] font-bold text-slate-500 hover:bg-primary hover:text-white transition-all uppercase tracking-wider"
                                        >
                                            {tag}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;

