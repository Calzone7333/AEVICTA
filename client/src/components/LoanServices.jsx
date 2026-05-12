import React from 'react';
import { Briefcase, Coins, Building2, Rocket, Landmark, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Business Term Loans',
    desc: 'Best for: Expansion, Infrastructure, Equipment Purchase. structured EMIs for long-term investment.',
    icon: <Building2 size={32} />,
  },
  {
    title: 'Working Capital Loans',
    desc: 'Best for: Daily Operations, Inventory, Payroll, Cash Flow. Ensuring your business keeps moving.',
    icon: <Coins size={32} />,
  },
  {
    title: 'MSME and SME Loans',
    desc: 'Best for: Micro, Small and Medium Enterprises. Restructuring applications for better results.',
    icon: <Briefcase size={32} />,
  },
  {
    title: 'Startup Business Funding',
    desc: 'Best for: New Businesses. Exploring funding options even for early-stage entrepreneurs.',
    icon: <Rocket size={32} />,
  },
  {
    title: 'Loan Against Property (LAP)',
    desc: 'Best for: Higher Loan Amounts. Lower interest rates using your property as collateral.',
    icon: <Landmark size={32} />,
  },
  {
    title: 'Balance Transfer & Top-Up',
    desc: 'Best for: Existing Loan Holders. Switch to a better bank or access additional funds.',
    icon: <RefreshCw size={32} />,
  }
];

const LoanServices = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-[13px] font-black uppercase tracking-[0.2em] text-primary">What We're Offering</span>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-navy tracking-tight leading-tight">How We Help You Get Funded</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">We specialize in connecting Chennai's businesses with the right capital. Explore our range of financial services.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="bg-white group p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-none flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-slate-50 text-primary flex items-center justify-center rounded-none group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-navy uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[13px]"
                >
                  Learn More <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanServices;
