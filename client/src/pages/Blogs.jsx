import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, MessageSquare, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { API_BASE_URL } from '../apiConfig';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const mockBlogs = [
        {
            id: 1,
            title: "For Car auto you will get 90% loan amount",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus [...]",
            category: "Credit Card",
            author: "admin",
            createdAt: "2020-12-31",
            comments: 0,
            imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "How to get education loan for overseas",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus [...]",
            category: "Car Loan",
            author: "admin",
            createdAt: "2020-12-31",
            comments: 0,
            imageUrl: "https://images.unsplash.com/photo-1523240715632-610349ef5008?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Easy way to calculate interest on a loan",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus [...]",
            category: "Investment",
            author: "admin",
            createdAt: "2020-12-31",
            comments: 0,
            imageUrl: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "How find low interest rate for home loan",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus [...]",
            category: "Education",
            author: "admin",
            createdAt: "2020-12-31",
            comments: 0,
            imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/blogs`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setBlogs(data);
                } else {
                    setBlogs(mockBlogs);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch blogs:", err);
                setBlogs(mockBlogs);
                setLoading(false);
            });
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
                                    <div className="relative h-[450px] overflow-hidden">
                                        <img 
                                            src={blog.imageUrl} 
                                            alt={blog.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                        />
                                        <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 text-[13px] font-black uppercase tracking-widest shadow-lg">
                                            {new Date(blog.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </div>
                                    </div>

                                    <div className="p-10 space-y-6">
                                        <div className="flex items-center gap-6 text-[13px] text-slate-400 font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <User size={14} className="text-primary" />
                                                <span>{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Tag size={14} className="text-primary" />
                                                <span>{blog.category}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-black text-[#001a33] hover:text-primary transition-colors leading-tight">
                                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                                        </h2>

                                        <p className="text-slate-500 leading-relaxed text-[15px]">
                                            {blog.excerpt}
                                        </p>

                                        <div className="pt-6 flex items-center justify-between border-t border-slate-50">
                                            <Link 
                                                to={`/blog/${blog.id}`} 
                                                className="flex items-center gap-2 text-slate-900 font-black uppercase text-[13px] tracking-widest group/btn"
                                            >
                                                <ArrowRight size={16} className="text-primary group-hover/btn:translate-x-1 transition-transform" />
                                                <span>Read More</span>
                                            </Link>
                                            <div className="flex items-center gap-2 text-slate-400 text-[13px] font-bold">
                                                <MessageSquare size={14} />
                                                <span>{blog.comments} Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}

                            {/* Pagination */}
                            <div className="flex justify-center items-center gap-3 pt-8">
                                <button className="w-10 h-10 bg-primary text-white font-black rounded-full flex items-center justify-center">1</button>
                                <button className="w-10 h-10 bg-white text-slate-400 font-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">2</button>
                                <button className="w-10 h-10 bg-white text-slate-400 font-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
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
                                    {[
                                        { name: 'Business', count: 1 },
                                        { name: 'Car Loan', count: 1 },
                                        { name: 'Credit Card', count: 1 },
                                        { name: 'Education', count: 2 },
                                        { name: 'Investment', count: 1 }
                                    ].map((cat) => (
                                        <li key={cat.name}>
                                            <a href="#" className="flex items-center justify-between text-[14px] font-bold text-slate-500 hover:text-primary transition-colors group">
                                                <div className="flex items-center gap-2">
                                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <span>{cat.name}</span>
                                                </div>
                                                <span className="text-slate-300 font-medium">({cat.count})</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tags */}
                            <div className="bg-white p-8 border border-slate-100 shadow-sm space-y-6">
                                <h4 className="text-lg font-black text-[#001a33] border-b border-slate-100 pb-4">Tags</h4>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['bank', 'business', 'check', 'company', 'doc', 'house loan', 'it loan', 'loan', 'New', 'video'].map((tag) => (
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

