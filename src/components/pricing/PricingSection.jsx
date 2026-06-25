import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const pricingData = {
  "Web Development": [
    {
      name: "Basic",
      description: "Perfect for establishing your online presence.",
      monthlyPrice: 9999,
      features: ["Single Page Website", "Mobile Responsive", "Basic SEO Setup", "Contact Form Integration", "1 Month Support"],
    },
    {
      name: "Standard",
      description: "Ideal for growing businesses needing more power.",
      monthlyPrice: 19999,
      features: ["Up to 5 Pages", "Custom UI/UX Design", "Advanced SEO Optimization", "CMS Integration", "3 Months Support"],
      isPopular: true,
    },
    {
      name: "Premium",
      description: "Comprehensive solution for scaling enterprises.",
      monthlyPrice: 29999,
      features: ["Unlimited Pages", "E-Commerce Functionality", "Custom Animations", "Payment Gateway", "1 Year Priority Support"],
    }
  ],
  "Social Media Growth": [
    {
      name: "Basic",
      description: "Consistent presence for growing your audience.",
      monthlyPrice: 6999,
      features: ["8 Posts/Month", "Basic Account Optimization", "Monthly Analytics Report", "Standard Graphic Design", "Email Support"],
    },
    {
      name: "Standard",
      description: "Aggressive growth strategy for ambitious brands.",
      monthlyPrice: 12999,
      features: ["15 Posts/Month", "4 Short Form Reels", "Community Management", "Custom Strategy Plan", "Priority WhatsApp Support"],
      isPopular: true,
    },
    {
      name: "Premium",
      description: "Full-scale viral marketing and brand dominance.",
      monthlyPrice: 18999,
      features: ["30 Posts/Month", "8 High-Quality Reels", "Influencer Outreach", "Paid Ads Management", "24/7 Priority Support"],
    }
  ],
  "Editing & Designing": [
    {
      name: "Basic",
      description: "Professional visuals for your daily content needs.",
      monthlyPrice: 4999,
      features: ["5 Graphic Designs", "1 Short Video Edit", "Basic Color Correction", "2 Revisions", "Standard Delivery"],
    },
    {
      name: "Standard",
      description: "High-impact designs and reels for engagement.",
      monthlyPrice: 8999,
      features: ["15 Graphic Designs", "4 Video Edits (Reels)", "Advanced Transitions", "Thumbnail Design", "4 Revisions"],
      isPopular: true,
    },
    {
      name: "Premium",
      description: "Cinematic quality editing and limitless design.",
      monthlyPrice: 14999,
      features: ["Unlimited Graphic Designs", "10 High-End Video Edits", "Cinematic Color Grading", "Custom Motion Graphics", "Unlimited Revisions"],
    }
  ]
};

const PricingSection = ({ isDark }) => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [activeCategory, setActiveCategory] = useState('Web Development');

    const categories = Object.keys(pricingData);
    const activePlans = pricingData[activeCategory];

    return (
        <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-transparent' : 'bg-background'}`}>
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-bold tracking-widest uppercase
                            ${isDark ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-primary/5 text-primary border border-primary/10'}
                        `}
                    >
                        <Sparkles className="w-4 h-4" /> Pricing Plans
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-h2 mb-6"
                    >
                        Simple, Transparent & Flexible Pricing
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-body"
                    >
                        Choose the perfect plan for your business. Switch between services and billing cycles to instantly view the correct pricing.
                    </motion.p>
                </div>

                {/* Billing Toggle */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mb-10"
                >
                    <div className={`flex items-center gap-2 p-1.5 rounded-full ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/5'}`}>
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-8 py-3 rounded-full font-heading font-bold text-sm tracking-widest uppercase transition-all duration-300
                                ${billingCycle === 'monthly' 
                                    ? (isDark ? 'bg-accent text-primary shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'bg-primary text-white shadow-md') 
                                    : (isDark ? 'text-text-secondary hover:text-white' : 'text-text-secondary hover:text-primary')
                                }
                            `}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`relative px-8 py-3 rounded-full font-heading font-bold text-sm tracking-widest uppercase transition-all duration-300
                                ${billingCycle === 'yearly' 
                                    ? (isDark ? 'bg-accent text-primary shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'bg-primary text-white shadow-md') 
                                    : (isDark ? 'text-text-secondary hover:text-white' : 'text-text-secondary hover:text-primary')
                                }
                            `}
                        >
                            Yearly
                            {/* Save Badge */}
                            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-body px-2 py-0.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Service Category Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mb-16 px-4"
                >
                    <div className={`flex flex-col md:flex-row items-center p-1.5 rounded-2xl md:rounded-full whitespace-nowrap gap-2 md:gap-0 w-full md:w-auto
                        ${isDark ? 'bg-white/5 border border-white/5' : 'bg-black/5 border border-black/5'}
                    `}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative w-full md:w-auto px-6 py-3.5 rounded-xl md:rounded-full font-heading font-bold text-base transition-colors duration-300
                                    ${activeCategory === category 
                                        ? (isDark ? 'text-white' : 'text-primary') 
                                        : (isDark ? 'text-text-secondary hover:text-white' : 'text-text-secondary hover:text-primary')
                                    }
                                `}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeCategoryBg"
                                        className={`absolute inset-0 rounded-xl md:rounded-full -z-10
                                            ${isDark ? 'bg-white/10 shadow-lg' : 'bg-white shadow-md'}
                                        `}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {activePlans.map((plan, index) => {
                            const isYearly = billingCycle === 'yearly';
                            const price = isYearly ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice;
                            
                            return (
                                <motion.div
                                    key={`${activeCategory}-${plan.name}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`relative group flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500
                                        ${plan.isPopular 
                                            ? (isDark 
                                                ? 'bg-secondary/30 border-accent shadow-[0_0_40px_rgba(201,168,76,0.15)] scale-[1.02] lg:scale-105 z-10' 
                                                : 'bg-white border-accent shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-[1.02] lg:scale-105 z-10')
                                            : (isDark 
                                                ? 'bg-secondary/10 border-white/5 hover:border-accent/50' 
                                                : 'bg-white/60 border-black/5 hover:border-accent/30 shadow-lg')
                                        }
                                        backdrop-blur-xl hover:-translate-y-2
                                    `}
                                >
                                    {plan.isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C9A84C] to-[#EAD7A4] text-primary text-xs font-bold font-body px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                            Recommended
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="card-h3 mb-2">{plan.name}</h3>
                                        <p className="text-body text-sm min-h-[40px] opacity-80">{plan.description}</p>
                                    </div>

                                    <div className="mb-2 flex items-end gap-1">
                                        <span className={`text-4xl lg:text-5xl font-magical font-bold tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>
                                            ₹{price.toLocaleString('en-IN')}
                                        </span>
                                        <span className={`text-sm font-body font-medium mb-1.5 ${isDark ? 'text-text-secondary' : 'text-text-muted'}`}>
                                            /mo
                                        </span>
                                    </div>
                                    
                                    <div className="h-6 mb-6">
                                        {isYearly ? (
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-xs font-body font-bold text-green-500/90 tracking-wider uppercase"
                                            >
                                                Billed annually (₹{(price * 12).toLocaleString('en-IN')})
                                            </motion.div>
                                        ) : (
                                            <div className="text-xs font-body font-medium opacity-0">Spacer</div>
                                        )}
                                    </div>

                                    <div className="flex-1 mb-10">
                                        <p className="text-xs font-body font-bold uppercase tracking-widest mb-6 opacity-50">What's included</p>
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className={`mt-0.5 rounded-full p-1 shrink-0
                                                        ${plan.isPopular 
                                                            ? (isDark ? 'bg-accent/20 text-accent' : 'bg-accent/20 text-primary') 
                                                            : (isDark ? 'bg-white/5 text-text-secondary' : 'bg-primary/5 text-primary/70')}
                                                    `}>
                                                        <Check className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className={`text-sm md:text-base font-body leading-tight ${isDark ? 'text-text-secondary' : 'text-text-primary'}`}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className={`w-full py-4 rounded-2xl font-heading font-bold text-lg tracking-widest uppercase transition-all duration-300 mt-auto
                                        ${plan.isPopular
                                            ? 'bg-gradient-to-r from-[#C9A84C] to-[#EAD7A4] text-primary hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:scale-[1.02]'
                                            : (isDark 
                                                ? 'bg-white/5 text-white hover:bg-accent hover:text-primary border border-white/10 hover:border-accent' 
                                                : 'bg-primary/5 text-primary hover:bg-primary hover:text-white border border-primary/10')
                                        }
                                    `}>
                                        Get Started
                                    </button>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
