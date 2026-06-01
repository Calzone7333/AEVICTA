import React, { useState } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';

const Introduction = () => {
  const [formData, setFormData] = useState({
    turnover: '',
    fullName: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/forms/loan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessName: formData.fullName + ' Business',
          phone: formData.phone,
          email: formData.email,
          loanType: 'Quick Apply (Lead Form)',
          amount: formData.turnover,
          message: 'Submitted from Introduction section lead form'
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Application submitted successfully! We will contact you shortly.' });
        setFormData({ turnover: '', fullName: '', phone: '', email: '' });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">Introduction</span>
                <div className="h-[2px] w-12 bg-primary"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                Your Business Deserves <br /> Better Funding
              </h2>
            </div>

            <div className="space-y-4">
              <p className="content-p max-w-xl">
                Every business in Chennai has a story. A dream. A next step waiting to happen. But too often, that next step gets stuck. Not because the business is not ready, but because getting a loan feels like running a marathon with no finish line.
              </p>
              <p className="content-p max-w-xl">
                That is exactly why Aevicta exists. We work with Chennai's entrepreneurs, traders, manufacturers, and growing enterprises to connect them with the right business loan from the right financial institution. Our team understands the local market, the banks, and the paperwork, and we put all of that knowledge to work for you.
              </p>
              <p className="text-[13px] font-bold text-primary italic leading-relaxed">
                Whether you are in Anna Nagar, Ambattur, T. Nagar, Velachery, OMR, Guindy, Chromepet, Perambur, Avadi, Tambaram, Sholinganallur, or anywhere else across Chennai, we are here and we are ready.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-slate-50 rounded-none flex items-center justify-center text-primary">
                  <Award size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 uppercase text-[14px] tracking-tight">Local Expertise</h4>
                  <p className="content-p !text-[13px]">Deep understanding of Chennai's business landscape</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-slate-50 rounded-none flex items-center justify-center text-primary">
                  <ShieldCheck size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 uppercase text-[14px] tracking-tight">Trusted Partner</h4>
                  <p className="content-p !text-[13px]">Connected with India's most trusted banks</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <div className="flex justify-end relative z-30 mt-[-280px]">
            <div className="w-full max-w-md">
              <h3 className="bg-[#f8f9fa] text-slate-900 text-lg font-medium py-2 px-4 rounded-t-md text-center">
                Get <span className="font-bold">Funded</span>
              </h3>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-[#f8f9fa] border-[3px] border-primary p-5 sm:p-6 w-full shadow-xl rounded-sm"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.message && (
                    <div className={`p-3 text-xs font-bold uppercase tracking-wider border-l-4 ${status.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700'}`}>
                      {status.message}
                    </div>
                  )}
                  <div className="space-y-1.5">
                    <label className="block text-slate-800 font-bold text-[13px]">Annual Turnover</label>
                    <select 
                      required
                      value={formData.turnover}
                      onChange={(e) => setFormData({...formData, turnover: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded bg-white text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <option value="">Annual Turnover*</option>
                      <option value="1cr_above">1 Cr & above</option>
                      <option value="50l_1cr">50 Lac - 1 Cr</option>
                      <option value="25l_50l">25-50 Lac</option>
                      <option value="10l_25l">10-25 Lac</option>
                      <option value="5l_10l">5-10 Lac</option>
                      <option value="below_5l">Less Than 5 Lac</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-slate-800 font-bold text-[13px]">Your full name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Name of the Contact Person *"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded bg-white text-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-slate-800 font-bold text-[13px]">Phone Number</label>
                    <div className="flex border border-slate-300 rounded bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                      <div className="px-3 py-2 text-sm text-slate-700 flex items-center bg-slate-50 border-r border-slate-200">
                        +91
                      </div>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Ten Digit Mobile No. *"
                        className="w-full px-3 py-2 text-sm bg-white text-slate-700 focus:outline-none placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-slate-800 font-bold text-[13px]">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Your Email ID *"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded bg-white text-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-slate-400"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-1">
                        <input type="checkbox" className="w-4 h-4 rounded-sm text-primary focus:ring-primary border-gray-300 accent-primary" defaultChecked />
                      </div>
                      <span className="text-[12px] leading-snug text-slate-600">
                        I (including any person or entity I am authorised to give consent for) have read and agree to Aevicta's{' '}
                        <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{' '}
                        <a href="#" className="text-primary hover:underline">Terms & Conditions</a>.
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-green-500 hover:bg-green-600 text-white py-2.5 font-bold uppercase tracking-wide rounded text-[14px] transition-colors mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Submitting...' : 'APPLY NOW'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

