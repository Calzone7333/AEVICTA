import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';

const ApplyNow = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-[#00A3E0]/10 antialiased">
            {/* 1. Breadcrumb Hero Section */}
            <section className="bg-[#001a33] pt-40 pb-24 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-sm">Home</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/60">Apply Now</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white font-display tracking-tight">Apply Now</h1>
                </div>
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </section>

            {/* 2. Multi-Section Form */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <form className="space-y-20">
                        
                        {/* Section 1: Loan Details */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Calculate your loan amount</span>
                                    <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                                </div>
                                <h2 className="text-3xl font-black text-[#001a33]">Loan Details</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Loan Amount*</label>
                                    <input type="text" placeholder="Loan Amount" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Monthly Income*</label>
                                    <input type="text" placeholder="Monthly Income" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Purpose of Loan*</label>
                                    <div className="relative">
                                        <select className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700 appearance-none cursor-pointer">
                                            <option>Business</option>
                                            <option>Personal</option>
                                            <option>Education</option>
                                            <option>Home</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Loan Years*</label>
                                    <div className="relative">
                                        <select className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700 appearance-none cursor-pointer">
                                            <option>6 Months</option>
                                            <option>12 Months</option>
                                            <option>24 Months</option>
                                            <option>36 Months</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Personal Details */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Ask for more details</span>
                                    <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                                </div>
                                <h2 className="text-3xl font-black text-[#001a33]">Personal Details</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Full Name (as per taxpayer ID)</label>
                                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Email*</label>
                                    <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Mobile Number*</label>
                                    <input type="text" placeholder="Mobile Number" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Marital Status*</label>
                                    <div className="relative">
                                        <select className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700 appearance-none cursor-pointer">
                                            <option>Single</option>
                                            <option>Married</option>
                                            <option>Divorced</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Birth Date* (as per taxpayer ID)</label>
                                    <input type="date" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Number Of Dependents*</label>
                                    <div className="relative">
                                        <select className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700 appearance-none cursor-pointer">
                                            <option>0 Dependents</option>
                                            <option>1 Dependent</option>
                                            <option>2 Dependents</option>
                                            <option>3+ Dependents</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Address Details */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Street, City And State</span>
                                    <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                                </div>
                                <h2 className="text-3xl font-black text-[#001a33]">Address Details</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">House No/Name*</label>
                                    <input type="text" placeholder="House Number/Name" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Street*</label>
                                    <input type="text" placeholder="Street" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">City*</label>
                                    <input type="text" placeholder="City" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">State*</label>
                                    <input type="text" placeholder="State" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Country*</label>
                                    <input type="text" placeholder="Country" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Pin Code*</label>
                                    <input type="text" placeholder="Pin Code" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Other Details */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#00A3E0]">Employment and other stuff</span>
                                    <div className="h-[2px] w-12 bg-[#00A3E0]"></div>
                                </div>
                                <h2 className="text-3xl font-black text-[#001a33]">Other Details</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="space-y-2 md:col-span-2 lg:col-span-1">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Employment Industry*</label>
                                    <input type="text" placeholder="Employment Industry" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2 md:col-span-2 lg:col-span-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Employer Name*</label>
                                    <input type="text" placeholder="Employer Name" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Employer Status*</label>
                                    <div className="relative">
                                        <select className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700 appearance-none cursor-pointer">
                                            <option>Full Time Employed</option>
                                            <option>Part Time Employed</option>
                                            <option>Self Employed</option>
                                            <option>Unemployed</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Length of Employment*</label>
                                    <input type="text" placeholder="Length of Employment" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">Work Phone Number*</label>
                                    <input type="text" placeholder="Work Phone Number" className="w-full px-6 py-4 bg-[#f4f7fa] border border-transparent focus:border-[#00A3E0] outline-none rounded-sm transition-all text-slate-700" />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-10 border-t border-slate-100">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="bg-[#00A3E0] text-white px-12 py-5 font-black uppercase tracking-widest text-[14px] shadow-xl shadow-[#00A3E0]/20"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ApplyNow;
