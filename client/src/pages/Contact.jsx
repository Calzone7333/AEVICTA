import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../apiConfig';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Log visit
        fetch(`${API_BASE_URL}/analytics/log`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pageUrl: window.location.pathname })
        }).catch(err => console.error('Analytics error:', err));
    }, []);

    const areas = [
        "Anna Nagar", "T. Nagar", "Velachery", "Ambattur", "Guindy", "Chromepet", 
        "Tambaram", "Perambur", "Avadi", "OMR", "Sholinganallur", "Adyar", 
        "Mylapore", "Porur", "Pallavaram", "Kodambakkam", "Nungambakkam", 
        "Thiruvottiyur", "Mogappair", "Kolathur", "Virugambakkam", "Saidapet", 
        "Poonamallee", "Koyambedu", "Egmore", "George Town", "Tondiarpet", 
        "Madhavaram", "Redhills", "Manali"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${API_BASE_URL}/forms/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Your message has been sent successfully! Our team will contact you soon.' });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-primary/10 antialiased">
            {/* 1. Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">Contact Us</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white font-display tracking-tight leading-tight">Let's Get Your Business Funded</h1>
                    <p className="text-white/60 text-lg lg:text-xl max-w-2xl mt-6">Whether you already know what loan you need or are just starting to explore your options, our team is ready to help. Reach out today. The first conversation is completely free.</p>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Contact Info & Form Section */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Left Side: Contact Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-primary">Contact Details</span>
                                    <div className="h-[2px] w-12 bg-primary"></div>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-navy leading-tight">
                                    Fueling Your Business Growth Starts Here
                                </h2>
                                <p className="text-slate-500 max-w-md">
                                    Our loan specialists are here to guide you through every step of the approval process.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-primary rounded-none flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                        <Phone size={24} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="font-black text-navy text-[15px] uppercase tracking-widest">Call Anytime</h4>
                                        <p className="text-slate-500 font-bold text-lg">+91 9943048554</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-primary rounded-none flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                        <Mail size={24} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="font-black text-navy text-[15px] uppercase tracking-widest">Write Email</h4>
                                        <p className="text-slate-500 font-bold text-lg">info@aevicta.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-primary rounded-none flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <h4 className="font-black text-navy text-[15px] uppercase tracking-widest">Our Location</h4>
                                        <p className="text-slate-500 font-bold text-lg leading-relaxed">
                                            Chennai, Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 bg-slate-50 p-12 rounded-none relative">
                            <div className="mb-10">
                                <h3 className="text-2xl font-black text-navy uppercase tracking-tight">Talk to a Business Loan Expert</h3>
                                <p className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Get a Free Callback Within 24 Hours</p>
                            </div>
                            
                            {status.message && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-8 p-4 font-bold uppercase tracking-wider text-xs border-l-4 ${status.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700'}`}
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                                <div className="sm:col-span-1">
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Full Name" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 focus:border-primary outline-none rounded-none transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <input 
                                        type="email" 
                                        required
                                        placeholder="Email Address" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 focus:border-primary outline-none rounded-none transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Mobile Number" 
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 focus:border-primary outline-none rounded-none transition-all text-slate-700" 
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <select 
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 focus:border-primary outline-none rounded-none transition-all text-slate-500"
                                    >
                                        <option value="">Select Loan Type</option>
                                        <option value="term-loan">Term Loan</option>
                                        <option value="working-capital">Working Capital</option>
                                        <option value="msme">MSME Loan</option>
                                        <option value="startup">Startup Funding</option>
                                        <option value="lap">Loan Against Property</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea 
                                        rows="4" 
                                        placeholder="Your Query or Message (Optional)" 
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-6 py-4 bg-white border border-slate-200 focus:border-primary outline-none rounded-none transition-all text-slate-700 resize-none"
                                    ></textarea>
                                </div>
                                <div className="sm:col-span-2">
                                    <motion.button 
                                        whileHover={{ scale: 1.02 }} 
                                        whileTap={{ scale: 0.98 }} 
                                        disabled={loading}
                                        className={`bg-primary text-white px-12 py-5 font-black uppercase tracking-widest text-[13px] flex items-center justify-center gap-3 shadow-xl shadow-primary/20 w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? 'Sending...' : 'Get a callback within 24 hours'} <Send size={18} />
                                    </motion.button>
                                    <p className="text-[10px] text-slate-400 mt-4 text-center">Your information is completely confidential. We will never share your details without consent.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Area Coverage */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center space-y-12">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.2em] text-[13px]">Area Coverage</span>
                            <div className="h-[2px] w-8 bg-primary"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-navy tracking-tight">Serving Businesses Across All of Chennai</h2>
                        <p className="text-slate-500 max-w-3xl mx-auto">We assist clients from every part of Chennai and its surrounding areas. If your business is in Chennai, we are here for you.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {areas.map((area, idx) => (
                            <span key={idx} className="px-6 py-2 bg-white border border-slate-200 text-navy font-bold text-[13px] uppercase tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Map Section */}
            <section className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.0689241!3d13.0474878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3e70280e957e03!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715500000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Aevicta Chennai Office"
                />
            </section>
        </div>
    );
};

export default Contact;
