import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LayoutDashboard, Users, FileText, BarChart3, 
    LogOut, Mail, Phone, Calendar, Search, 
    ChevronRight, ArrowUpRight, Globe, Monitor, Smartphone, Database
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({ loanCount: 0, contactCount: 0, visitorCount: 0 });
    const [loans, setLoans] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [analytics, setAnalytics] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        fetchData();
    }, [token]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const headers = { 'Authorization': `Bearer ${token}` };
            
            const [statsRes, loansRes, contactsRes, analyticsRes] = await Promise.all([
                fetch(`${API_BASE_URL}/admin/stats`, { headers }),
                fetch(`${API_BASE_URL}/admin/loans`, { headers }),
                fetch(`${API_BASE_URL}/admin/contacts`, { headers }),
                fetch(`${API_BASE_URL}/admin/analytics`, { headers })
            ]);

            const statsData = await statsRes.json();
            const loansData = await loansRes.json();
            const contactsData = await contactsRes.json();
            const analyticsData = await analyticsRes.json();

            setStats(statsData);
            setLoans(loansData);
            setContacts(contactsData);
            setAnalytics(analyticsData);
        } catch (err) {
            console.error('Data fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('isAdmin');
        navigate('/');
    };

    const SidebarItem = ({ id, icon: Icon, label }) => (
        <button 
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-4 px-6 py-5 transition-all duration-300 relative group ${activeTab === id ? 'text-primary bg-slate-50' : 'text-slate-400 hover:text-navy hover:bg-slate-50/50'}`}
        >
            <Icon size={24} />
            <span className="font-black uppercase tracking-widest text-[13px]">{label}</span>
            {activeTab === id && (
                <motion.div layoutId="active" className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            )}
        </button>
    );

    if (loading) return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin"></div>
                <p className="font-black uppercase tracking-widest text-[10px] text-slate-400">Syncing Data...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-100 flex flex-col fixed inset-y-0 z-50">
                <div className="p-8 border-b border-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center">
                            <Database size={16} className="text-white" />
                        </div>
                        <span className="font-black uppercase tracking-tighter text-xl text-navy">AEVICTA</span>
                    </div>
                </div>
                
                <nav className="flex-1 py-8">
                    <SidebarItem id="overview" icon={LayoutDashboard} label="Overview" />
                    <SidebarItem id="loans" icon={FileText} label="Loan Requests" />
                    <SidebarItem id="contacts" icon={Mail} label="Inquiries" />
                    <SidebarItem id="analytics" icon={BarChart3} label="Visitor Logs" />
                </nav>

                <div className="p-8 border-t border-slate-50">
                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 text-red-500 hover:text-red-700 transition-colors px-6"
                    >
                        <LogOut size={20} />
                        <span className="font-black uppercase tracking-widest text-[11px]">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-12">
                {/* Header */}
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-navy uppercase tracking-tight">Admin Dashboard</h1>
                        <p className="text-slate-400 text-base mt-2 font-bold uppercase tracking-widest">Aevicta Finance Portal</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-navy font-black text-[16px] uppercase tracking-wider">Super Admin</p>
                            <p className="text-slate-400 text-[12px] uppercase font-bold tracking-widest">Active Session</p>
                        </div>
                        <div className="w-16 h-16 bg-navy flex items-center justify-center text-white font-black text-xl">A</div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div 
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            {/* Stat Cards */}
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { label: 'Total Applications', value: stats.loanCount, icon: FileText, color: 'text-primary' },
                                    { label: 'Contact Inquiries', value: stats.contactCount, icon: Mail, color: 'text-blue-500' },
                                    { label: 'Website Visits', value: stats.visitorCount, icon: Globe, color: 'text-navy' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-4 bg-slate-50 group-hover:bg-primary transition-colors ${stat.color} group-hover:text-white`}>
                                                <stat.icon size={28} />
                                            </div>
                                            <ArrowUpRight className="text-slate-200" size={24} />
                                        </div>
                                        <h3 className="text-5xl font-black text-navy mb-2">{stat.value}</h3>
                                        <p className="text-slate-400 text-[13px] font-black uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Recent Activity Mini-Tables */}
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-white border border-slate-100 shadow-sm p-8">
                                    <div className="flex justify-between items-center mb-8">
                                        <h4 className="font-black text-navy uppercase tracking-widest text-[13px]">Recent Loan Requests</h4>
                                        <button onClick={() => setActiveTab('loans')} className="text-primary text-[11px] font-black uppercase tracking-widest hover:underline">View All</button>
                                    </div>
                                    <div className="space-y-6">
                                        {loans.slice(0, 5).map((loan, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100">
                                                <div>
                                                    <p className="text-navy font-bold text-[13px]">{loan.full_name}</p>
                                                    <p className="text-slate-400 text-[11px] uppercase tracking-widest font-bold mt-1">{loan.loan_type} • ₹{loan.amount}</p>
                                                </div>
                                                <ChevronRight size={16} className="text-slate-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-100 shadow-sm p-8">
                                    <div className="flex justify-between items-center mb-8">
                                        <h4 className="font-black text-navy uppercase tracking-widest text-[13px]">Latest Inquiries</h4>
                                        <button onClick={() => setActiveTab('contacts')} className="text-primary text-[11px] font-black uppercase tracking-widest hover:underline">View All</button>
                                    </div>
                                    <div className="space-y-6">
                                        {contacts.slice(0, 5).map((contact, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100">
                                                <div>
                                                    <p className="text-navy font-bold text-[13px]">{contact.name}</p>
                                                    <p className="text-slate-400 text-[11px] uppercase tracking-widest font-bold mt-1">{contact.service || 'General Inquiry'}</p>
                                                </div>
                                                <ChevronRight size={16} className="text-slate-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'loans' && (
                        <motion.div 
                            key="loans"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
                                <h2 className="font-black text-navy uppercase tracking-widest text-lg">Loan Applications</h2>
                                <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 border border-slate-100">
                                    <Search size={16} className="text-slate-400" />
                                    <input type="text" placeholder="Search applications..." className="bg-transparent outline-none text-xs font-bold w-64" />
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            {['Date', 'Name', 'Business', 'Loan Type', 'Amount', 'Contact'].map(h => (
                                                <th key={h} className="p-6 text-[13px] font-black uppercase tracking-[0.2em] text-slate-400">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {loans.map((loan, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="p-6 text-[15px] font-bold text-slate-500 whitespace-nowrap">{new Date(loan.created_at).toLocaleDateString()}</td>
                                                <td className="p-6 text-[16px] font-black text-navy">{loan.full_name}</td>
                                                <td className="p-6 text-[15px] font-bold text-slate-500">{loan.business_name}</td>
                                                <td className="p-6"><span className="px-3 py-1 bg-primary/5 text-primary text-[13px] font-black uppercase tracking-widest">{loan.loan_type}</span></td>
                                                <td className="p-6 text-[16px] font-black text-navy">₹{loan.amount}</td>
                                                <td className="p-6">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[14px] font-bold text-navy flex items-center gap-2"><Phone size={14} className="text-slate-300" /> {loan.phone}</span>
                                                        <span className="text-[13px] font-bold text-slate-400 flex items-center gap-2"><Mail size={14} className="text-slate-300" /> {loan.email}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'contacts' && (
                        <motion.div 
                            key="contacts"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
                                <h2 className="font-black text-navy uppercase tracking-widest text-lg">Inquiries & Messages</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            {['Date', 'Name', 'Service', 'Message', 'Contact'].map(h => (
                                                <th key={h} className="p-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {contacts.map((contact, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors group align-top">
                                                <td className="p-6 text-[13px] font-bold text-slate-500 whitespace-nowrap">{new Date(contact.created_at).toLocaleDateString()}</td>
                                                <td className="p-6 text-[14px] font-black text-navy">{contact.name}</td>
                                                <td className="p-6"><span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-black uppercase tracking-widest">{contact.service || 'General'}</span></td>
                                                <td className="p-6 text-[13px] font-bold text-slate-500 max-w-md leading-relaxed">{contact.message}</td>
                                                <td className="p-6">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[12px] font-bold text-navy">{contact.phone}</span>
                                                        <span className="text-[11px] font-bold text-slate-400">{contact.email}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'analytics' && (
                        <motion.div 
                            key="analytics"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
                                <h2 className="font-black text-navy uppercase tracking-widest text-lg">Website Visit Logs</h2>
                                <div className="px-4 py-2 bg-green-50 text-green-600 text-[11px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Live Tracking Active
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            {['Time', 'Page URL', 'Browser', 'OS', 'Device', 'IP Address'].map(h => (
                                                <th key={h} className="p-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {analytics.map((log, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="p-6 text-[12px] font-bold text-slate-400 whitespace-nowrap">{new Date(log.visited_at).toLocaleTimeString()}</td>
                                                <td className="p-6 text-[13px] font-bold text-navy flex items-center gap-2">
                                                    <Globe size={14} className="text-slate-300" />
                                                    {log.page_url}
                                                </td>
                                                <td className="p-6 text-[13px] font-bold text-slate-500 flex items-center gap-2">
                                                    <Monitor size={14} className="text-slate-300" />
                                                    {log.browser}
                                                </td>
                                                <td className="p-6 text-[13px] font-bold text-slate-500">{log.os}</td>
                                                <td className="p-6 text-[13px] font-bold text-slate-500 flex items-center gap-2">
                                                    <Smartphone size={14} className="text-slate-300" />
                                                    {log.device}
                                                </td>
                                                <td className="p-6 text-[12px] font-mono font-bold text-slate-400">{log.ip}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default Dashboard;
