import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { API_BASE_URL } from '../apiConfig';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/blogs/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setBlog(data);
                }
            } catch (error) {
                console.error("Failed to fetch blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) return null;

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f2f4f7]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#001a33] mb-4">Blog not found</h2>
                    <Link to="/blogs" className="text-primary hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={16} /> Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f2f4f7] min-h-screen font-sans selection:bg-primary/10">
            {/* Hero Section */}
            <section className="bg-[#001a33] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <Link to="/" className="bg-white/10 text-white px-3 py-1 rounded-sm hover:bg-white/20 transition-colors">Home</Link>
                        <span className="text-white/40">/</span>
                        <Link to="/blogs" className="bg-white/10 text-white px-3 py-1 rounded-sm hover:bg-white/20 transition-colors">Blogs</Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">{blog.category}</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-white font-display tracking-tight leading-tight">{blog.title}</h1>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/70 font-bold uppercase tracking-widest mt-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-primary" />
                            <span>{new Date(blog.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
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
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
                    <div className="bg-white p-10 lg:p-16 shadow-sm border border-slate-100">
                        {blog.image_url && (
                            <div className="mb-8 text-center">
                                <img 
                                    src={blog.image_url.startsWith('http') ? blog.image_url : `${window.location.origin}${blog.image_url}`} 
                                    alt={blog.title} 
                                    className="inline-block w-full max-w-[800px] h-auto max-h-[400px] object-contain" 
                                />
                            </div>
                        )}
                        <div className="text-slate-600 leading-relaxed text-[16px]">
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Link to="/blogs" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                            <ArrowLeft size={16} /> Back to All Blogs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
