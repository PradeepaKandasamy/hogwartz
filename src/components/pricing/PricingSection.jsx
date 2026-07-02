import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Star } from 'lucide-react';

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
        <section className={`py-32 px-6 relative overflow-hidden ${isDark ? 'bg-[#05050A]' : 'bg-[#FAFAFA]'}`}>
            {/* Ambient Background Effects */}
            {isDark && (
                <>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-highlight/10 blur-[150px] rounded-full pointer-events-none opacity-30" />
                </>
            )}

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-[0.2em] uppercase
                            ${isDark 
                                ? 'bg-[#1A1A2E] text-accent border border-accent/20' 
                                : 'bg-white text-primary border border-black/10 shadow-sm'}
                        `}
                    >
                        <Zap className="w-3.5 h-3.5" /> Pricing Plans
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]
                            ${isDark ? 'text-white' : 'text-primary'}
                        `}
                    >
                        Simple, Transparent & Flexible Pricing
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`font-body text-lg md:text-xl max-w-2xl mx-auto
                            ${isDark ? 'text-text-secondary' : 'text-text-secondary'}
                        `}
                    >
                        Choose the perfect plan for your business. Switch between services and billing cycles to instantly view the correct pricing.
                    </motion.p>
                </div>

                {/* SaaS Premium Billing Toggle */}
                {activeCategory !== 'Web Development' && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mb-12"
                >
                    <div className={`relative flex items-center p-1.5 rounded-full backdrop-blur-xl
                        ${isDark ? 'bg-[#11111A] border border-white/5 shadow-inner' : 'bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'}
                    `}>
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`relative px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 z-10
                                ${billingCycle === 'monthly' 
                                    ? (isDark ? 'text-white' : 'text-primary') 
                                    : (isDark ? 'text-white/40 hover:text-white/80' : 'text-primary/40 hover:text-primary/80')
                                }
                            `}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`relative px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 z-10
                                ${billingCycle === 'yearly' 
                                    ? (isDark ? 'text-white' : 'text-primary') 
                                    : (isDark ? 'text-white/40 hover:text-white/80' : 'text-primary/40 hover:text-primary/80')
                                }
                            `}
                        >
                            Yearly
                            {/* Save Badge */}
                            <span className="absolute -top-4 -right-6 bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                                Save 20%
                            </span>
                        </button>

                        {/* Animated Slider */}
                        <div className="absolute inset-0 p-1.5 pointer-events-none">
                            <motion.div
                                className={`w-1/2 h-full rounded-full shadow-md ${isDark ? 'bg-[#1E1E2E] border border-white/10' : 'bg-gray-100 border border-black/5'}`}
                                animate={{
                                    x: billingCycle === 'monthly' ? "0%" : "100%"
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        </div>
                    </div>
                </motion.div>
                )}

                {/* Service Category Selector (Segmented Tabs) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mb-20 px-4"
                >
                    <div className={`flex flex-col md:flex-row items-center p-1.5 rounded-2xl md:rounded-full w-full md:w-auto
                        ${isDark ? 'bg-[#11111A] border border-white/5' : 'bg-white border border-black/5 shadow-sm'}
                    `}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative w-full md:w-auto px-8 py-3.5 rounded-xl md:rounded-full font-body font-medium text-sm md:text-base transition-colors duration-300
                                    ${activeCategory === category 
                                        ? (isDark ? 'text-accent' : 'text-primary') 
                                        : (isDark ? 'text-white/50 hover:text-white' : 'text-text-muted hover:text-primary')
                                    }
                                `}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="categoryTabBg"
                                        className={`absolute inset-0 rounded-xl md:rounded-full -z-10
                                            ${isDark ? 'bg-accent/10 border border-accent/20' : 'bg-primary/5 border border-primary/10'}
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
                            const isWebDev = activeCategory === 'Web Development';
                            const isYearly = !isWebDev && billingCycle === 'yearly';
                            const price = isYearly ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice;
                            
                            return (
                                <motion.div
                                    key={`${activeCategory}-${plan.name}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0, 1] }}
                                    className={`relative group flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-500
                                        ${plan.isPopular 
                                            ? (isDark 
                                                ? 'bg-gradient-to-b from-[#1E1E2E] to-[#11111A] border border-accent/40 shadow-[0_0_50px_rgba(201,168,76,0.1)] scale-100 lg:scale-105 z-10' 
                                                : 'bg-white border-2 border-accent shadow-[0_20px_60px_rgba(201,168,76,0.15)] scale-100 lg:scale-105 z-10')
                                            : (isDark 
                                                ? 'bg-[#11111A] border border-white/5 hover:border-white/10 hover:bg-[#151520]' 
                                                : 'bg-white border border-black/5 hover:border-black/10 hover:shadow-xl')
                                        }
                                        backdrop-blur-2xl hover:-translate-y-2
                                    `}
                                >
                                    {/* Recommended Badge */}
                                    {plan.isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-accent to-highlight text-primary text-xs font-bold font-body px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                                            <Star className="w-3 h-3 fill-primary" /> Recommended
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-3
                                            ${isDark ? 'text-white' : 'text-primary'}
                                        `}>
                                            {plan.name}
                                        </h3>
                                        <p className={`font-body text-sm leading-relaxed min-h-[44px]
                                            ${isDark ? 'text-text-secondary' : 'text-text-muted'}
                                        `}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Price Display */}
                                    <div className="mb-2 flex items-baseline gap-1.5">
                                        <span className={`text-5xl md:text-6xl font-heading font-extrabold tracking-tight
                                            ${isDark ? 'text-white' : 'text-primary'}
                                        `}>
                                            ₹{price.toLocaleString('en-IN')}
                                        </span>
                                        {!isWebDev && (
                                            <span className={`text-base font-body font-medium
                                                ${isDark ? 'text-text-secondary' : 'text-text-muted'}
                                            `}>
                                                /mo
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Yearly Billed Indicator */}
                                    <div className="h-8 mb-8 border-b border-white/5 pb-8">
                                        <AnimatePresence mode="popLayout">
                                            {isYearly && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className={`text-sm font-body font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}
                                                >
                                                    Billed annually (₹{(price * 12).toLocaleString('en-IN')})
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Features List */}
                                    <div className="flex-1 mb-10">
                                        <p className={`text-xs font-body font-bold uppercase tracking-widest mb-6 
                                            ${isDark ? 'text-white/40' : 'text-primary/40'}
                                        `}>
                                            What's included
                                        </p>
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className={`mt-1 shrink-0 flex items-center justify-center w-5 h-5 rounded-full
                                                        ${plan.isPopular 
                                                            ? (isDark ? 'bg-accent/20 text-accent' : 'bg-accent/20 text-accent') 
                                                            : (isDark ? 'bg-white/10 text-white/70' : 'bg-primary/10 text-primary/70')}
                                                    `}>
                                                        <Check className="w-3 h-3 stroke-[3]" />
                                                    </div>
                                                    <span className={`text-base font-body leading-tight
                                                        ${isDark ? 'text-white/80' : 'text-primary/80'}
                                                    `}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full py-4 rounded-2xl font-body font-bold text-sm tracking-widest uppercase transition-all duration-300 mt-auto
                                        ${plan.isPopular
                                            ? 'bg-accent text-primary hover:bg-highlight hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:scale-[1.02]'
                                            : (isDark 
                                                ? 'bg-white/5 text-white hover:bg-white hover:text-primary border border-white/10' 
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
