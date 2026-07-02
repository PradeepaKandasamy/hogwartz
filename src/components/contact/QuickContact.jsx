import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, Mail, Sparkles } from 'lucide-react';

const QuickContact = ({ isDark }) => {
    const contactCards = [
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: isDark ? "WhatsApp Spell" : "WhatsApp Chat",
            desc: isDark ? "Chat with us instantly for quick magical support." : "Chat with us instantly for quick support.",
            link: "https://wa.me/15551234567",
            color: "text-green-500",
            glow: "shadow-green-500/20"
        },
        {
            icon: <PhoneCall className="w-8 h-8" />,
            title: isDark ? "Floo Call" : "Direct Call",
            desc: isDark ? "Speak directly with our team of digital wizards." : "Speak directly with our team of digital experts.",
            link: "tel:+15551234567",
            color: "text-blue-500",
            glow: "shadow-blue-500/20"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: isDark ? "Owl Mail" : "Quick Email",
            desc: isDark ? "Send us your queries anytime via electronic owl." : "Send us your queries anytime via email.",
            link: "mailto:hello@hogwartzdigital.com",
            color: "text-red-500",
            glow: "shadow-red-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-16 px-6 relative overflow-hidden bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                        <span className="text-eyebrow text-accent">{isDark ? "Instant Portals" : "Quick Channels"}</span>
                    </motion.div>
                    <h2 className="section-h2 mb-4">
                        {isDark ? (
                            <>Connect via the <span className="text-accent italic">Direct Stream</span></>
                        ) : (
                            "Instant Contact"
                        )}
                    </h2>
                    <p className={`text-body max-w-2xl mx-auto ${isDark ? 'text-text-secondary/70' : 'text-text-secondary'}`}>
                        Choose your preferred medium and our warlocks will be with you in an instant.
                    </p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {contactCards.map((card, index) => (
                        <motion.a
                            key={index}
                            href={card.link}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative p-8 rounded-[2.5rem] border text-center transition-all duration-500 overflow-hidden flex flex-col items-center ${
                                isDark 
                                    ? 'bg-secondary/10 border-accent/10 hover:border-accent/40 hover:bg-secondary/20 hover:shadow-[0_20px_50px_rgba(201,168,76,0.1)]' 
                                    : 'bg-white border-border hover:shadow-2xl hover:shadow-primary/10'
                            }`}
                        >
                            {/* Hover highlight effect for dark theme */}
                            {isDark && (
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}

                            {/* Icon Container */}
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 transition-all duration-500 relative ${
                                isDark 
                                    ? 'bg-secondary/30 text-accent group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_0_25px_rgba(201,168,76,0.4)]' 
                                    : `bg-primary/5 ${card.color} group-hover:scale-110`
                            }`}>
                                <div className="relative z-10">
                                    {card.icon}
                                </div>
                                {isDark && (
                                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-0 group-hover:opacity-10 transition-opacity" />
                                )}
                            </div>

                            <h3 className="card-h3 mb-4 transition-colors group-hover:text-accent">
                                {card.title}
                            </h3>
                            
                            <p className={`font-body text-base leading-relaxed transition-colors ${
                                isDark ? 'text-text-secondary/70 group-hover:text-text-secondary' : 'text-text-secondary'
                            }`}>
                                {card.desc}
                            </p>

                            {/* Corner dash for aesthetic */}
                            <div className={`absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 opacity-0 group-hover:opacity-20 transition-all duration-500 scale-50 group-hover:scale-100 ${
                                isDark ? 'border-accent' : 'border-primary'
                            }`} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default QuickContact;
