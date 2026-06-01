import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('adminUsername', data.username);
                localStorage.setItem('isAdmin', 'true');
                navigate('/dashboard');
            } else {
                setError(data.message || 'Authentication failed');
            }
        } catch (err) {
            setError('Server connection error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[400px]"
            >
                {/* Header Section */}
                <div className="mb-10 text-left">
                    <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back!</h1>
                    <p className="text-slate-400 text-sm">Let's track what your AI is doing!</p>
                </div>

                {/* Form Section */}
                <div className="space-y-6">
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-100"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-8">
                        {/* Email/Username Input */}
                        <div className="relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold text-slate-700 z-10">Email</label>
                            <input 
                                type="text" 
                                required
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                className="w-full px-4 py-3.5 bg-transparent border-2 border-slate-300 rounded-lg focus:border-primary outline-none transition-colors text-slate-700"
                                placeholder="Your Email Address"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold text-slate-700 z-10">Password</label>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="w-full px-4 py-3.5 bg-transparent border-2 border-slate-300 rounded-lg focus:border-primary outline-none transition-colors text-slate-700"
                                placeholder="••••••••••••"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between mt-2">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded-[4px] bg-primary flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-primary">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-slate-400 hover:text-primary transition-colors">Forgot Password?</a>
                        </div>

                        <div className="pt-2">
                            <motion.button 
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-primary hover:bg-green-700 text-white py-3.5 rounded-lg font-medium text-base transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
