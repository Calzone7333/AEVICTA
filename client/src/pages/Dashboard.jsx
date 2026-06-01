import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, Package, FileText, BarChart2,
    MessageSquare, Mail, Zap, HelpCircle, MessageCircle, Settings,
    Search, Bell, Plus, Filter, ArrowUpDown, ChevronLeft, ChevronRight,
    FileDown, MoreHorizontal, Share, Database, LayoutTemplate, Trash2, Edit, Image
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';

const Dashboard = () => {
    const adminUsername = localStorage.getItem('adminUsername');
    const [activeTab, setActiveTab] = useState(adminUsername === 'Aevictauser' ? 'blogs' : 'overview');
    const [stats, setStats] = useState({ loanCount: 0, contactCount: 0, visitorCount: 0 });
    const [loans, setLoans] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [analytics, setAnalytics] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const [newBlog, setNewBlog] = useState({ title: '', excerpt: '', content: '', category: '', author: '', image: null, removeImage: false });
    const [editingBlogId, setEditingBlogId] = useState(null);
    const contentImageInputRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [showStats, setShowStats] = useState(true);
    const navigate = useNavigate();

    const token = localStorage.getItem('adminToken');

    const handleContentImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append('image', file);
            const headers = { 'Authorization': `Bearer ${token}` };
            
            const res = await fetch(`${API_BASE_URL}/admin/upload-image`, {
                method: 'POST',
                headers,
                body: formData
            });
            
            if (res.ok) {
                const data = await res.json();
                const imageTag = `\n<img src="${data.url}" alt="Content Image" style="max-width: 100%; margin: 20px auto; display: block;" />\n`;
                setNewBlog(prev => ({ ...prev, content: prev.content + imageTag }));
            } else {
                alert('Failed to upload image');
            }
        } catch (err) {
            console.error('Error uploading image:', err);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    const paginateData = (data) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return data.slice(startIndex, startIndex + itemsPerPage);
    };

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

            const [statsRes, loansRes, contactsRes, analyticsRes, blogsRes] = await Promise.all([
                fetch(`${API_BASE_URL}/admin/stats`, { headers }),
                fetch(`${API_BASE_URL}/admin/loans`, { headers }),
                fetch(`${API_BASE_URL}/admin/contacts`, { headers }),
                fetch(`${API_BASE_URL}/admin/analytics`, { headers }),
                fetch(`${API_BASE_URL}/blogs`)
            ]);

            const statsData = await statsRes.json();
            const loansData = await loansRes.json();
            const contactsData = await contactsRes.json();
            const analyticsData = await analyticsRes.json();
            const blogsData = await blogsRes.json();

            setStats(statsData.error ? { loanCount: 0, contactCount: 0, visitorCount: 0 } : statsData);
            setLoans(Array.isArray(loansData) ? loansData : []);
            setContacts(Array.isArray(contactsData) ? contactsData : []);
            setAnalytics(Array.isArray(analyticsData) ? analyticsData : []);
            setBlogs(Array.isArray(blogsData) ? blogsData : []);
        } catch (err) {
            console.error('Data fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddBlog = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', newBlog.title);
            formData.append('excerpt', newBlog.excerpt);
            formData.append('content', newBlog.content);
            formData.append('category', newBlog.category);
            formData.append('author', newBlog.author);
            if (newBlog.image) formData.append('image', newBlog.image);
            if (newBlog.removeImage) formData.append('removeImage', 'true');

            const headers = { 'Authorization': `Bearer ${token}` };
            
            let res;
            if (editingBlogId) {
                res = await fetch(`${API_BASE_URL}/admin/blogs/${editingBlogId}`, {
                    method: 'PUT',
                    headers,
                    body: formData
                });
            } else {
                res = await fetch(`${API_BASE_URL}/admin/blogs`, {
                    method: 'POST',
                    headers,
                    body: formData
                });
            }

            if (res.ok) {
                setNewBlog({ title: '', excerpt: '', content: '', category: '', author: '', image: null, removeImage: false });
                setEditingBlogId(null);
                fetchData();
            } else {
                alert(`Failed to ${editingBlogId ? 'update' : 'add'} blog`);
            }
        } catch (err) {
            console.error(`Error ${editingBlogId ? 'updating' : 'adding'} blog:`, err);
        }
    };

    const handleEditBlogClick = (blog) => {
        setEditingBlogId(blog.id);
        setNewBlog({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            category: blog.category,
            author: blog.author,
            image: null,
            removeImage: false
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteBlog = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            const headers = { 'Authorization': `Bearer ${token}` };
            const res = await fetch(`${API_BASE_URL}/admin/blogs/${id}`, {
                method: 'DELETE',
                headers
            });
            if (res.ok) {
                fetchData();
            }
        } catch (err) {
            console.error('Error deleting blog:', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('isAdmin');
        navigate('/');
    };

    const SidebarItem = ({ id, icon: Icon, label, count }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 group mb-1
                ${activeTab === id
                    ? 'bg-orange-50/50 text-slate-800 font-semibold relative'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
        >
            {activeTab === id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#FF6B4A] rounded-r-md"></div>
            )}
            <div className="flex items-center gap-3">
                <Icon size={18} className={activeTab === id ? "text-[#FF6B4A]" : "text-slate-400"} />
                <span className="text-[14px]">{label}</span>
            </div>
            {count && (
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${activeTab === id ? 'bg-orange-100 text-[#FF6B4A]' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                </span>
            )}
        </button>
    );

    const Badge = ({ children, type }) => {
        const types = {
            success: 'bg-green-100 text-green-700',
            warning: 'bg-yellow-100 text-yellow-700',
            danger: 'bg-red-100 text-red-700',
            info: 'bg-blue-100 text-blue-700',
            neutral: 'bg-slate-100 text-slate-600'
        };
        return (
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${types[type] || types.neutral}`}>
                {children}
            </span>
        );
    };

    if (loading) return (
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-[#FF6B4A] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-slate-400">Loading Workspace...</p>
            </div>
        </div>
    );

    const renderHeader = (title) => (
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg bg-slate-50">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Admin</span>
                </div>
            </div>
        </header>
    );

    const StatCard = ({ title, value }) => (
        <div className="p-6 border-r border-slate-100 last:border-r-0 flex-1">
            <div className="flex items-center gap-1 mb-3">
                <span className="text-sm font-medium text-slate-500">{title}</span>
                <HelpCircle size={14} className="text-slate-300" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-2">{value}</h3>
        </div>
    );

    const ChevronDownIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polyline points="6 9 12 15 18 9"></polyline></svg>
    );

    const Pagination = ({ totalItems }) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
        let pages = [];
        if (totalPages <= 5) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= 3) pages = [1, 2, 3, 4, '...', totalPages];
            else if (currentPage >= totalPages - 2) pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            else pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
        
        const [jumpTo, setJumpTo] = useState('');
        
        const handleJump = () => {
            const page = parseInt(jumpTo);
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
                setCurrentPage(page);
                setJumpTo('');
            }
        };

        if (totalItems === 0) return null;

        return (
            <div className="flex justify-between items-center py-4 px-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">Showing per page</span>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700">
                        {itemsPerPage} <ChevronDownIcon />
                    </button>
                </div>
                <div className="flex items-center gap-1">
                    <button 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-1 text-slate-300 hover:text-slate-600 disabled:opacity-50"
                    ><ChevronLeft size={16} /></button>
                    {pages.map((p, i) => (
                        <button 
                            key={i} 
                            onClick={() => typeof p === 'number' && setCurrentPage(p)}
                            className={typeof p === 'number' 
                                ? `w-7 h-7 rounded-md text-sm font-medium flex items-center justify-center ${p === currentPage ? 'bg-[#FF6B4A] text-white' : 'hover:bg-slate-100 text-slate-600'}`
                                : `text-slate-400 mx-1 cursor-default`}
                        >
                            {p}
                        </button>
                    ))}
                    <button 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-50"
                    ><ChevronRight size={16} /></button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">Go to page</span>
                    <div className="flex items-center border border-slate-200 rounded-md overflow-hidden bg-white">
                        <input 
                            type="text" 
                            value={jumpTo}
                            onChange={(e) => setJumpTo(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleJump()}
                            className="w-10 px-2 py-1 text-sm outline-none text-center" 
                        />
                        <span onClick={handleJump} className="px-2 py-1 text-xs font-semibold bg-slate-50 border-l border-slate-200 cursor-pointer hover:bg-slate-100">Go &gt;</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#F4F5F7] flex font-sans p-4 gap-4">
            {/* Sidebar Container */}
            <aside className="w-[260px] bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden shrink-0">
                {/* Logo Area */}
                <div className="p-6">
                    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-white font-bold text-lg">A.</span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <h2 className="text-sm font-bold text-slate-800 truncate">Aevicta Inc.</h2>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                    </div>
                </div>

                {/* Search */}
                <div className="px-6 mb-6">
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                        <Search size={16} className="text-slate-400" />
                        <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm w-full text-slate-600" />
                        <div className="bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 font-semibold shadow-sm">⌘K</div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 custom-scrollbar pb-6">
                    {/* Main Menu */}
                    <div className="mb-6">
                        <p className="text-[11px] font-bold text-slate-400 mb-3 px-2 tracking-wider">MAIN MENU</p>
                        {adminUsername !== 'Aevictauser' && (
                            <>
                                <SidebarItem id="overview" icon={LayoutDashboard} label="Dashboard" />
                                <SidebarItem id="loans" icon={Package} label="Loan Requests" count={loans.length} />
                                <SidebarItem id="contacts" icon={MessageSquare} label="Inquiries" count={contacts.length} />
                                <SidebarItem id="analytics" icon={BarChart2} label="Visitor Logs" count={analytics.length} />
                            </>
                        )}
                        <SidebarItem id="blogs" icon={FileText} label="Manage Blogs" count={blogs.length} />
                    </div>

                </div>

                {/* Bottom section */}
                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="mt-4 w-full text-center py-2 text-red-500 hover:bg-red-50 text-sm font-semibold rounded-lg transition-colors"
                    >
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col relative">
                <div className="p-8 pb-4">
                    {activeTab === 'overview' && renderHeader('Dashboard Overview')}
                    {activeTab === 'loans' && renderHeader('Loan Applications')}
                    {activeTab === 'contacts' && renderHeader('Customer Inquiries')}
                    {activeTab === 'analytics' && renderHeader('Analytics & Logs')}
                    {activeTab === 'blogs' && renderHeader('Blog Manager')}
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative">
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="bg-white border border-slate-200 rounded-xl flex overflow-hidden shadow-sm">
                                    <StatCard title="Total Applications" value={stats.loanCount} />
                                    <StatCard title="Total Inquiries" value={stats.contactCount} />
                                    <StatCard title="Total Visitors" value={stats.visitorCount} />
                                </div>
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h4 className="text-sm font-bold text-slate-800">Recent Loan Requests</h4>
                                            <button onClick={() => setActiveTab('loans')} className="text-xs font-semibold text-[#FF6B4A] hover:underline">View All</button>
                                        </div>
                                        <div className="space-y-4">
                                            {loans.slice(0, 5).map((loan, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg">
                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-800">{loan.full_name}</p>
                                                        <p className="text-xs font-medium text-slate-500 mt-1">{loan.loan_type} • ₹{loan.amount}</p>
                                                    </div>
                                                    <ChevronRight size={16} className="text-slate-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h4 className="text-sm font-bold text-slate-800">Latest Inquiries</h4>
                                            <button onClick={() => setActiveTab('contacts')} className="text-xs font-semibold text-[#FF6B4A] hover:underline">View All</button>
                                        </div>
                                        <div className="space-y-4">
                                            {contacts.slice(0, 5).map((contact, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg">
                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-800">{contact.name}</p>
                                                        <p className="text-xs font-medium text-slate-500 mt-1">{contact.service || 'General Inquiry'}</p>
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
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full"
                            >
                                <AnimatePresence>
                                    {showStats && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="flex border-b border-slate-200 overflow-hidden"
                                        >
                                            <StatCard title="Total Requests" value={loans.length} />
                                            <StatCard title="Total Value" value={`₹${loans.reduce((acc, curr) => {
                                                const val = Number(curr.amount?.replace(/[^0-9.-]+/g, ""));
                                                return acc + (isNaN(val) ? 0 : val);
                                            }, 0).toLocaleString()}`} />
                                            <StatCard title="Recent Activity" value={loans.slice(0, 5).length} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="overflow-x-auto flex-1">
                                    <table className="w-full text-left whitespace-nowrap">
                                        <thead>
                                            <tr className="border-b border-slate-100">
                                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 w-4 h-4 text-[#FF6B4A] focus:ring-[#FF6B4A]" /></th>
                                                <th className="py-4 pr-4 font-semibold text-xs text-slate-400">Applicant Name</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Contact Details</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Loan Type</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Amount</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Status</th>
                                                <th className="p-4 w-12 text-center text-slate-400"><Plus size={14} /></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {paginateData(loans).map((loan, i) => (
                                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 w-4 h-4 text-[#FF6B4A] focus:ring-[#FF6B4A]" /></td>
                                                    <td className="py-4 pr-4 text-sm font-semibold text-slate-800">{loan.full_name}</td>
                                                    <td className="p-4 text-sm font-medium">
                                                        <div className="flex flex-col">
                                                            <span className="text-slate-800">{loan.phone}</span>
                                                            <span className="text-slate-500 text-xs">{loan.email}</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-sm text-slate-600 font-medium">{loan.loan_type}</td>
                                                    <td className="p-4 text-sm text-slate-800 font-semibold">₹{loan.amount}</td>
                                                    <td className="p-4"><Badge type={loan.status === 'Approved' ? 'success' : loan.status === 'Rejected' ? 'danger' : loan.status === 'Review' ? 'warning' : 'neutral'}>{loan.status || 'Pending'}</Badge></td>
                                                    <td className="p-4 text-center"><button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={16} /></button></td>
                                                </tr>
                                            ))}
                                            {loans.length === 0 && (
                                                <tr><td colSpan="7" className="p-8 text-center text-slate-400 text-sm">No loan requests found</td></tr>

                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination totalItems={loans.length} />
                            </motion.div>
                        )}

                        {activeTab === 'contacts' && (
                            <motion.div
                                key="contacts"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full"
                            >
                                <div className="overflow-x-auto flex-1">
                                    <table className="w-full text-left whitespace-nowrap">
                                        <thead>
                                            <tr className="border-b border-slate-100">
                                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 w-4 h-4" /></th>
                                                <th className="py-4 pr-4 font-semibold text-xs text-slate-400">Name</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Service</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Email</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Phone</th>
                                                <th className="p-4 w-12 text-center text-slate-400"><Plus size={14} /></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {paginateData(contacts).map((contact, i) => (
                                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 w-4 h-4" /></td>
                                                    <td className="py-4 pr-4 text-sm font-semibold text-slate-800">{contact.name}</td>
                                                    <td className="p-4 text-sm text-slate-600 font-medium"><Badge type="info">{contact.service || 'General'}</Badge></td>
                                                    <td className="p-4 text-sm text-slate-500 font-medium">{contact.email}</td>
                                                    <td className="p-4 text-sm text-slate-500 font-medium">{contact.phone}</td>
                                                    <td className="p-4 text-center"><button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={16} /></button></td>
                                                </tr>
                                            ))}
                                            {contacts.length === 0 && (
                                                <tr><td colSpan="6" className="p-8 text-center text-slate-400 text-sm">No inquiries found</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination totalItems={contacts.length} />
                            </motion.div>
                        )}

                        {activeTab === 'analytics' && (
                            <motion.div
                                key="analytics"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full"
                            >
                                <div className="overflow-x-auto flex-1">
                                    <table className="w-full text-left whitespace-nowrap">
                                        <thead>
                                            <tr className="border-b border-slate-100">
                                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 w-4 h-4" /></th>
                                                <th className="py-4 pr-4 font-semibold text-xs text-slate-400">Time</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Page URL</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">Browser</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">OS / Device</th>
                                                <th className="p-4 font-semibold text-xs text-slate-400">IP Address</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {paginateData(analytics).map((log, i) => (
                                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 w-4 h-4" /></td>
                                                    <td className="py-4 pr-4 text-sm text-slate-500">{new Date(log.visited_at).toLocaleTimeString()}</td>
                                                    <td className="p-4 text-sm font-semibold text-slate-700">{log.page_url}</td>
                                                    <td className="p-4 text-sm text-slate-600"><Badge type="neutral">{log.browser}</Badge></td>
                                                    <td className="p-4 text-sm text-slate-600">{log.os} • {log.device}</td>
                                                    <td className="p-4 text-xs font-mono text-slate-400">{log.ip}</td>
                                                </tr>
                                            ))}
                                            {analytics.length === 0 && (
                                                <tr><td colSpan="6" className="p-8 text-center text-slate-400 text-sm">No visitor logs found</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination totalItems={analytics.length} />
                            </motion.div>
                        )}

                        {activeTab === 'blogs' && (
                            <motion.div
                                key="blogs"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid lg:grid-cols-5 gap-6 h-full"
                            >
                                {/* Add Blog Form */}
                                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm p-6 overflow-y-auto">
                                    <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <Edit size={16} className="text-[#FF6B4A]" /> {editingBlogId ? 'Edit Blog' : 'Compose New Blog'}
                                    </h3>
                                    <form onSubmit={handleAddBlog} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-500 mb-1.5">Blog Title</label>
                                            <input type="text" required value={newBlog.title} onChange={e => setNewBlog({ ...newBlog, title: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-700 outline-none focus:border-[#FF6B4A] transition-colors" placeholder="Enter title..." />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <label className="block text-xs font-semibold text-slate-500">Blog Image</label>
                                                {(newBlog.image || (editingBlogId && blogs.find(b => b.id === editingBlogId)?.image_url && !newBlog.removeImage)) && (
                                                    <button type="button" onClick={() => setNewBlog({ ...newBlog, image: null, removeImage: true })} className="text-[11px] font-bold text-red-500 hover:text-red-700 flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md border border-red-100">
                                                        <Trash2 size={12} /> Remove Image
                                                    </button>
                                                )}
                                            </div>
                                            <input key={newBlog.image ? newBlog.image.name : (newBlog.removeImage ? 'removed' : 'empty')} type="file" accept="image/*" onChange={e => setNewBlog({ ...newBlog, image: e.target.files[0], removeImage: false })} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm font-medium text-slate-700 outline-none focus:border-[#FF6B4A] transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Category</label>
                                                <input type="text" required value={newBlog.category} onChange={e => setNewBlog({ ...newBlog, category: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-700 outline-none focus:border-[#FF6B4A] transition-colors" placeholder="e.g. Business" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Author</label>
                                                <input type="text" required value={newBlog.author} onChange={e => setNewBlog({ ...newBlog, author: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-700 outline-none focus:border-[#FF6B4A] transition-colors" placeholder="Author name" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-500 mb-1.5">Excerpt</label>
                                            <textarea required value={newBlog.excerpt} onChange={e => setNewBlog({ ...newBlog, excerpt: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-700 outline-none focus:border-[#FF6B4A] transition-colors h-20 resize-none" placeholder="Brief summary..." />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <label className="block text-xs font-semibold text-slate-500">Content (HTML Support)</label>
                                                <button type="button" onClick={() => contentImageInputRef.current?.click()} className="text-[11px] font-bold text-[#FF6B4A] hover:text-[#e85b3b] flex items-center gap-1 transition-colors bg-orange-50 px-2 py-1 rounded-md border border-orange-100">
                                                    <Image size={12} /> Upload & Insert Image
                                                </button>
                                                <input type="file" accept="image/*" ref={contentImageInputRef} onChange={handleContentImageUpload} className="hidden" />
                                            </div>
                                            <textarea required value={newBlog.content} onChange={e => setNewBlog({ ...newBlog, content: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-700 outline-none focus:border-[#FF6B4A] transition-colors h-48 resize-none font-mono" placeholder="<p>Blog body...</p>" />
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <button type="submit" className="flex-1 bg-[#FF6B4A] text-white font-semibold rounded-lg text-sm py-3 hover:bg-[#e85b3b] transition-colors shadow-sm">
                                                {editingBlogId ? 'Update Blog Post' : 'Publish Blog Post'}
                                            </button>
                                            {editingBlogId && (
                                                <button type="button" onClick={() => { setEditingBlogId(null); setNewBlog({ title: '', excerpt: '', content: '', category: '', author: '', image: null, removeImage: false }); }} className="px-4 bg-slate-100 text-slate-600 font-semibold rounded-lg text-sm py-3 hover:bg-slate-200 transition-colors shadow-sm">
                                                    Cancel
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>

                                {/* Existing Blogs List */}
                                <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
                                    <div className="overflow-x-auto flex-1">
                                        <table className="w-full text-left whitespace-nowrap">
                                            <thead>
                                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                                    <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 w-4 h-4" /></th>
                                                    <th className="py-4 pr-4 font-semibold text-xs text-slate-400">Post Title</th>
                                                    <th className="p-4 font-semibold text-xs text-slate-400">Category</th>
                                                    <th className="p-4 font-semibold text-xs text-slate-400">Date</th>
                                                    <th className="p-4 w-12 text-center text-slate-400">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {paginateData(blogs).map(blog => (
                                                    <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                                                        <td className="p-4"><input type="checkbox" className="rounded border-slate-300 w-4 h-4" /></td>
                                                        <td className="py-4 pr-4">
                                                            <p className="text-sm font-semibold text-slate-800">{blog.title}</p>
                                                            <p className="text-xs text-slate-500 font-medium truncate w-48">{blog.excerpt}</p>
                                                        </td>
                                                        <td className="p-4"><Badge type="neutral">{blog.category}</Badge></td>
                                                        <td className="p-4 text-sm text-slate-500 font-medium">{new Date(blog.created_at).toLocaleDateString()}</td>
                                                        <td className="p-4 text-center flex justify-center items-center">
                                                            <button onClick={() => handleEditBlogClick(blog)} className="p-2 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors mr-1" title="Edit">
                                                                <Edit size={16} />
                                                            </button>
                                                            <button onClick={() => handleDeleteBlog(blog.id)} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {blogs.length === 0 && (
                                                    <tr><td colSpan="5" className="p-8 text-center text-slate-400 text-sm">No blogs published yet</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination totalItems={blogs.length} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
