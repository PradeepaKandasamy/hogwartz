import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, MessageSquare, MessageCircle, PhoneCall, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactInfo = ({ isDark }) => {
    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: isDark ? "Email Spell" : "Email Address",
            value: "hello@hogwartzdigital.com",
            sub: isDark ? "Sent via Owl Post" : "Direct Inbox",
            link: "mailto:hello@hogwartzdigital.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: isDark ? "Floo Network" : "Phone Call",
            value: "+1 (555) 123-4567",
            sub: "Mon - Fri, 9am - 6pm EST",
            link: "tel:+15551234567"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: isDark ? "Sanctuary" : "Location",
            value: "Diagon Alley, Cloud Servers",
            sub: "Working Globally",
            link: "#"
        }
    ];

    const quickActions = [
        { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", link: "https://wa.me/15551234567", color: "hover:text-green-500" },
        { icon: <PhoneCall className="w-5 h-5" />, label: "Call Us", link: "tel:+15551234567", color: "hover:text-blue-500" },
        { icon: <Instagram className="w-5 h-5" />, label: "Insta", link: "#", color: "hover:text-pink-500" },
        { icon: <Twitter className="w-5 h-5" />, label: "Twitter", link: "#", color: "hover:text-sky-500" },
        { icon: <Linkedin className="w-5 h-5" />, label: "Linkdn", link: "#", color: "hover:text-blue-700" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full space-y-12"
        >
            <div>
                <h2 className="section-h2 mb-8">
                    {isDark ? (
                        <>Reach the <span className='text-accent italic'>Inner Circle</span></>
                    ) : (
                        "Get in Touch"
                    )}
                </h2>
                
                <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                        <motion.a 
                            key={index} 
                            href={method.link}
                            whileHover={{ scale: 1.05, x: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className={`flex gap-5 items-center p-5 rounded-xl border transition-all duration-300 group ${
                                isDark 
                                    ? 'bg-secondary/20 border-accent/20 backdrop-blur-sm shadow-[0_0_20px_rgba(201,168,76,0.1)] hover:bg-secondary/30 hover:border-accent/40 hover:shadow-[0_0_25px_rgba(201,168,76,0.2)]' 
                                    : 'bg-white border-border shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:border-primary/20'
                            }`}
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                                isDark 
                                    ? 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary group-hover:rotate-[5deg] group-hover:scale-110 shadow-[inner_0_0_10px_rgba(201,168,76,0.2)]' 
                                    : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-[5deg] group-hover:scale-110'
                            }`}>
                                <div className="p-3">
                                    {method.icon}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className={`font-heading text-lg font-bold transition-colors ${
                                    isDark ? 'text-accent group-hover:text-highlight' : 'text-primary'
                                }`}>
                                    {method.title}
                                </h4>
                                <p className={`font-body text-base font-medium transition-opacity ${
                                    isDark ? 'text-text-primary/80 group-hover:text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                                }`}>
                                    {method.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Follow Us */}
            <div>
                <p className={`text-eyebrow mb-6 ${isDark ? 'text-accent/60' : 'text-text-muted'}`}>Follow the Magic</p>
                <div className="flex gap-4">
                    {[
                        { icon: <Instagram className="w-5 h-5" />, link: "#", color: "hover:bg-pink-500" },
                        { icon: <Twitter className="w-5 h-5" />, link: "#", color: "hover:bg-sky-500" },
                        { icon: <Linkedin className="w-5 h-5" />, link: "#", color: "hover:bg-blue-700" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                isDark 
                                    ? 'bg-secondary/30 text-accent border border-accent/20 hover:border-accent hover:text-primary' 
                                    : 'bg-primary/5 text-primary border border-transparent hover:bg-primary hover:text-white'
                            } ${social.color}`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;
