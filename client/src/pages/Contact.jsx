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
                    <h1 className="text-4xl lg:text-5xl font-semibold text-white font-display tracking-tight leading-tight">Let's Get Your Business Funded</h1>
                    <p className="text-white/60 text-lg lg:text-xl max-w-2xl mt-6">Whether you already know what loan you need or are just starting to explore your options, our team is ready to help. Reach out today. The first conversation is completely free.</p>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Contact Info Section */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center space-y-20">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">Contact Details</span>
                            <div className="h-[2px] w-8 bg-primary"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-navy leading-tight">
                            Fueling Your Business Growth Starts Here
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Our loan specialists are here to guide you through every step of the approval process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center gap-6 group">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/20">
                                <Phone size={32} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-navy text-[15px] uppercase tracking-widest">Call Anytime</h4>
                                <p className="text-slate-500 font-bold text-lg">+91 9943048554</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-6 group">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/20">
                                <Mail size={32} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-navy text-[15px] uppercase tracking-widest">Write Email</h4>
                                <p className="text-slate-500 font-bold text-lg">info@aevicta.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-6 group">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/20">
                                <MapPin size={32} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-navy text-[15px] uppercase tracking-widest">Our Location</h4>
                                <p className="text-slate-500 font-bold text-lg leading-relaxed">
                                    Chennai, Tamil Nadu, India
                                </p>
                            </div>
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
                            <span className="text-primary font-semibold uppercase tracking-[0.2em] text-[13px]">Area Coverage</span>
                            <div className="h-[2px] w-8 bg-primary"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-navy tracking-tight">Serving Businesses Across All of Chennai</h2>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5568896669265!2d80.18824307450411!3d13.063853112850145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267324f4ab783%3A0x5a5319e17f3a0a4b!2sGayathri%20Thiruvengadam%20%26%20Associates!5e0!3m2!1sen!2sin!4v1780289482541!5m2!1sen!2sin"
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
