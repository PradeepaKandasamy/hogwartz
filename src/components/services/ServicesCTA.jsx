import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const PricingCard = ({ tier, isDark }) => {
    const isPopular = tier.popular;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
                isPopular 
                    ? (isDark ? 'bg-accent/10 border-accent shadow-[0_0_40px_rgba(201,168,76,0.2)]' : 'bg-primary border-primary text-white shadow-2xl scale-105 z-10') 
                    : (isDark ? 'bg-secondary/10 border-accent/10' : 'bg-white border-primary/5 shadow-lg')
            }`}
        >
            {isPopular && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 py-1 px-4 rounded-full text-xs font-bold tracking-widest uppercase ${isDark ? 'bg-accent text-primary' : 'bg-highlight text-primary'}`}>
                    {isDark ? "✦ Most Powerful ✦" : "Most Popular"}
                </div>
            )}
            <div className="mb-8">
                <h3 className={`font-magical text-2xl md:text-3xl mb-2 ${isPopular && !isDark ? 'text-highlight' : (isDark ? 'text-[#FCEABB] drop-shadow-[0_0_10px_rgba(252,234,187,0.3)]' : 'text-primary')}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className={`text-4xl md:text-5xl font-bold font-heading ${isDark ? 'text-[#F0EDE6]' : 'text-primary'}`}>{tier.price}</span>
                    <span className={`text-sm md:text-base opacity-60 ${isPopular && !isDark ? 'text-white/80' : (isDark ? 'text-[#F0EDE6]/60' : '')}`}>{tier.period}</span>
                </div>
                <p className={`mt-4 font-body text-sm md:text-base leading-relaxed ${isPopular && !isDark ? 'text-white/80' : (isDark ? 'text-[#F0EDE6]/70' : 'text-text-secondary')}`}>{tier.description}</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm md:text-base font-body">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isPopular && !isDark ? 'text-highlight' : 'text-[#FCEABB]'}`} />
                        <span className={isPopular && !isDark ? 'text-white/90' : (isDark ? 'text-[#F0EDE6]/80' : 'text-text-secondary')}>{feature}</span>
                    </li>
                ))}
            </ul>
            <NavLink 
                to="/contact"
                className={`w-full py-4 rounded-2xl font-bold font-body tracking-wide transition-all text-center relative z-20 cursor-pointer inline-block ${
                isPopular 
                    ? (isDark ? 'bg-accent text-primary hover:bg-highlight' : 'bg-highlight text-primary hover:scale-105 shadow-lg shadow-highlight/20')
                    : (isDark ? 'bg-secondary/30 text-[#FCEABB] border border-accent/20 hover:bg-accent/10' : 'bg-primary/5 text-primary hover:bg-primary/10')
            }`}>
                {isDark ? "Invoke This Contract" : "Get Started Now"}
            </NavLink>
        </motion.div>
    );
};

const ServicesCTA = ({ isDark, content }) => {
    return (
        <>
            <section className={`py-32 px-6 ${isDark ? 'bg-secondary/10' : 'bg-primary/5'}`}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                          <h2 className={`font-magical text-4xl md:text-5xl lg:text-6xl mb-6 text-center leading-tight ${isDark ? 'text-[#F0EDE6] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'text-text-primary'}`}>Honest Fair Trade</h2>
                         <p className={`font-body text-lg md:text-xl max-w-2xl mx-auto text-center ${isDark ? 'text-[#F0EDE6]/80' : 'text-text-secondary'}`}>No hidden fees, no cursed contracts. Just pure value for your brand's growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pb-20">
                        {content.pricing.map((tier, i) => (
                            <PricingCard key={i} tier={tier} isDark={isDark} />
                        ))}
                    </div>

                    <div className={`max-w-4xl mx-auto p-8 rounded-3xl border text-center ${isDark ? 'bg-primary/20 border-accent/10' : 'bg-white border-primary/5 shadow-md'}`}>
                        <p className={`text-lg ${isDark ? 'text-[#F0EDE6]/90' : 'text-text-primary'}`}>Need something more specific? We also offer <span className="text-[#FCEABB] font-bold italic">Custom Alchemical Consultations</span> tailored to your exact needs.</p>
                    </div>
                </div>
            </section>

            <section className={`py-24 px-6 relative overflow-hidden ${
                isDark ? 'bg-primary text-white' : 'bg-bg-warm text-text-primary border-y border-accent/10'
            }`}>
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                     <h2 className="font-magical text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">Ready to Grow Your Business Digitally?</h2>
                     <p className={`font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-[#F0EDE6]/80' : 'text-text-secondary'}`}>
                         Partner with Hogwartz Digital and transform your ideas into impactful digital experiences.
                     </p>
                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                        <NavLink to="/contact" className={`inline-block px-10 py-5 rounded-full font-bold font-body text-lg transition-all shadow-xl hover:scale-105 ${
                            isDark ? 'bg-highlight text-primary' : 'bg-primary text-white hover:bg-secondary'
                        }`}>
                            Start Your Project
                        </NavLink>
                        <NavLink to="/contact" className={`inline-block px-10 py-5 rounded-full font-bold font-body text-lg transition-all border-2 hover:scale-105 ${
                            isDark ? 'border-highlight text-highlight hover:bg-highlight/10' : 'border-primary/20 text-primary hover:bg-primary/5'
                        }`}>
                            Book a Free Consultation
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesCTA;
