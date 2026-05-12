import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
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
                            Aevicta is a Chennai-based business loan assistance firm. Our entire focus is on helping Chennai's businesses get the funding they need, without the stress and confusion.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Facebook, Instagram].map((Icon, idx) => (
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
                                    <Link to={item.path} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                        <div className="w-1.5 h-[1.5px] bg-primary"></div>
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
                            {['Business Term Loans', 'Working Capital Loans', 'MSME and SME Loans', 'Startup Business Funding', 'Loan Against Property'].map(item => (
                                <li key={item}>
                                    <Link to="/service" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                        <div className="w-1.5 h-[1.5px] bg-primary"></div>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-black uppercase tracking-tight">Contact Us</h4>
                        <div className="space-y-6">
                            <a href="mailto:info@aevicta.com" className="flex items-start gap-4 group/item">
                                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                    <Mail size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Email Us</span>
                                    <span className="text-white font-bold">info@aevicta.com</span>
                                </div>
                            </a>
                            <a href="tel:+919943048554" className="flex items-start gap-4 group/item">
                                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Call Anytime</span>
                                    <span className="text-white font-bold">+91 9943048554</span>
                                </div>
                            </a>
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

