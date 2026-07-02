import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const ServicesCTA = ({ isDark, content }) => {
    return (
        <>
            <section className={`py-24 px-6 relative overflow-hidden ${
                isDark ? 'bg-primary text-white' : 'bg-bg-warm text-text-primary border-y border-accent/10'
            }`}>
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                     <h2 className="font-magical text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                         {isDark ? 'Ready to Grow Your Business Digitally?' : 'Ready to Elevate Your Business Online?'}
                     </h2>
                     <p className={`font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-[#F0EDE6]/80' : 'text-text-secondary'}`}>
                         {isDark 
                             ? 'Partner with Hogwartz Digital and transform your ideas into impactful digital experiences.'
                             : 'Partner with Hogwartz Digital to create impactful digital experiences that drive growth, strengthen your brand, and deliver measurable results.'
                         }
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
