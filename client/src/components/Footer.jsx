import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-primary/20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-white p-2 px-3 rounded-sm shadow-lg group-hover:bg-primary transition-colors">
                                <img src="/logowithoutbg.png" alt="Aevicta Logo" className="h-16 w-auto object-contain" />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-[15px] leading-relaxed">
                            Aevicta Finance provides simple and secure loan solutions to help you achieve your dreams. Trusted by thousands for institutional-grade financial services.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-tight">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/service' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'FAQs', path: '/faq' }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-slate-400 hover:text-green-500 transition-colors flex items-center gap-2">
                                        <div className="w-1.5 h-[1.5px] bg-green-500"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-tight">Our Services</h4>
                        <ul className="space-y-4">
                            {['Car Loan', 'Wedding Loan', 'Property Loan', 'Education Loan', 'Business Loan'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-green-500 transition-colors flex items-center gap-2">
                                        <div className="w-1.5 h-[1.5px] bg-green-500"></div>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-tight">Contact Us</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Email Us</span>
                                    <span className="text-white font-bold">needhelp@company.com</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Call Anytime</span>
                                    <span className="text-white font-bold">+91 9812310000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[14px]">
                        © 2026 Aevicta Finance. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link to="/terms" className="text-slate-500 hover:text-white transition-colors text-[14px]">Terms & Conditions</Link>
                        <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors text-[14px]">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

