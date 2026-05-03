import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';

const FAQItem = ({ question, answer, isDark }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border-b last:border-none transition-all duration-300 ${
            isDark ? 'border-accent/10' : 'border-border'
        }`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors group"
            >
                <span className={`font-heading text-xl md:text-2xl font-bold transition-colors ${
                    isDark ? (isOpen ? 'text-accent' : 'text-text-primary') : (isOpen ? 'text-primary' : 'text-text-primary')
                }`}>
                    {question}
                </span>
                <div className={`p-2 rounded-lg transition-all duration-300 ${
                    isDark ? 'bg-accent/5' : 'bg-primary/5'
                } ${isOpen ? 'rotate-180 bg-accent/20' : ''}`}>
                    <ChevronDown className={`w-6 h-6 transition-colors ${
                        isDark ? 'text-accent' : 'text-primary'
                    }`} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className={`pb-8 text-body text-lg leading-relaxed max-w-4xl ${
                            isDark ? 'text-text-secondary/80' : 'text-text-secondary'
                        }`}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ContactFAQ = ({ isDark, faqs }) => {
    return (
        <section className="py-16 px-6 bg-background relative overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                            isDark ? 'bg-accent/10 text-accent' : 'bg-primary/5 text-primary'
                        }`}>
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h2 className="section-h2">{isDark ? "Ancient Knowledge" : "Common Queries"}</h2>
                    </div>
                    
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
