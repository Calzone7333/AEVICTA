import React, { useState } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Introduction = () => {
  const [loanAmount, setLoanAmount] = useState(18000);
  const [loanTerm, setLoanTerm] = useState(8);

  const monthlyPay = (loanAmount / loanTerm).toFixed(2);
  const totalPayBack = (loanAmount * 1.05).toFixed(0);

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
                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">Company Introductions</span>
                <div className="h-[2px] w-12 bg-primary"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                Our Loans will Fill Your <br /> Dreams Come True
              </h2>
            </div>

            <p className="content-p max-w-xl">
              We offer a wide range of loan products tailored to meet your unique needs. Whether it's for a new home, education, or business expansion, our flexible solutions ensure your financial goals are within reach.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-slate-50 rounded-none flex items-center justify-center text-primary">
                  <Award size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-slate-900 uppercase text-[14px] tracking-tight">Award Winning</h4>
                  <p className="content-p !text-[13px]">Finance categories winning more than 10 awards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-slate-50 rounded-none flex items-center justify-center text-primary">
                  <ShieldCheck size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-slate-900 uppercase text-[14px] tracking-tight">Certified Company</h4>
                  <p className="content-p !text-[13px]">Approved Finance company to provide loans</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Calculator */}
          <div className="flex justify-end relative z-30 mt-[-280px] perspective-1000">
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-none shadow-2xl overflow-hidden max-w-md w-full border border-slate-100"
            >
              <div className="bg-primary p-8 text-center relative overflow-hidden group">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <h3 className="text-white text-2xl font-bold font-display uppercase tracking-tight relative z-10">How Much You Need</h3>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-primary"></div>
              </div>

              <div className="p-10 space-y-8 text-slate-800">
                <div className="space-y-4">
                  <div className="flex justify-between font-display font-black text-[14px] leading-[21px]" style={{ color: 'oklch(0.208 0.042 265.755)' }}>
                    <span>₹1000</span>
                    <motion.span 
                      key={loanAmount}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      ₹{loanAmount}
                    </motion.span>
                    <span>₹40000</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="40000" 
                    step="500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between font-display font-black text-[14px] leading-[21px]" style={{ color: 'oklch(0.208 0.042 265.755)' }}>
                    <span>1 Month</span>
                    <motion.span 
                      key={loanTerm}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      {loanTerm} Months
                    </motion.span>
                    <span>12 Months</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {['Pay Monthly', 'Term of Use', 'Total Pay Back'].map((label, idx) => (
                    <div key={idx} className="flex justify-between items-center font-display font-black text-[14px] leading-[21px]" style={{ color: 'oklch(0.208 0.042 265.755)' }}>
                      <span className="uppercase">{label}</span>
                      <motion.span 
                        key={loanAmount + loanTerm}
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {label === 'Pay Monthly' ? `₹${monthlyPay}` : label === 'Term of Use' ? `${loanTerm} Months` : `₹${totalPayBack}`}
                      </motion.span>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/apply"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white py-3.5 font-display font-black uppercase tracking-widest text-center text-[14px] leading-[21px] transition-all rounded-none shadow-lg shadow-green-500/20"
                  >
                    Apply For Loan
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

