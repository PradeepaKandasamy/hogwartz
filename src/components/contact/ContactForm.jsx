import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Loader2, Sparkles } from 'lucide-react';

const ContactForm = ({ isDark }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (data) => {
        // Simulate API call
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("Form submitted:", data);
                setSubmitStatus("success");
                reset();

                setTimeout(() => setSubmitStatus(null), 5000);
                resolve();
            }, 2000);
        });
    };

    const inputClasses = `
        w-full px-5 py-4 rounded-xl border font-body bg-transparent 
        transition-all duration-300 focus:outline-none focus:ring-1
        ${isDark 
            ? 'border-accent/30 text-text-primary focus:border-accent focus:ring-accent/50 placeholder:text-text-muted/50' 
            : 'border-border text-text-primary focus:border-primary focus:ring-primary/20 placeholder:text-text-muted'
        }
    `;

    const labelClasses = `
        block font-body text-sm font-semibold mb-2 tracking-wide
        ${isDark ? 'text-accent/80' : 'text-text-secondary'}
    `;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className={`p-6 md:p-8 rounded-[2.5rem] border relative overflow-hidden h-full ${
                isDark 
                ? 'bg-secondary/20 border-accent/20 backdrop-blur-sm' 
                : 'bg-white shadow-xl shadow-primary/5 border-border'
            }`}
        >
            {/* Decorative background glow for dark theme */}
            {isDark && (
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            )}

            <div className="relative z-10">
                <div className="mb-10">
                    <h3 className="card-h3 mb-3 flex items-center gap-3">
                        {isDark && <Sparkles className="w-6 h-6 text-accent animate-pulse" />}
                        {isDark ? "Send a Digital Owl" : "Talk to Our Team"}
                    </h3>
                    <p className={`text-body text-base ${isDark ? 'text-text-secondary/70' : 'text-text-secondary'}`}>
                        {isDark 
                            ? "Our head wizards typically respond within one solar day." 
                            : "We'll get back to you within 24 hours to discuss your project."
                        }
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className={labelClasses}>Full Name</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name', { required: "Tell us your name" })}
                                className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
                                placeholder="E.g. Albus Dumbledore"
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-2 block font-medium">{errors.name.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="email" className={labelClasses}>Email Address</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: "We need an email to reply",
                                    pattern: { value: /\S+@\S+\.\S+/, message: "That doesn't look like a valid email" }
                                })}
                                className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                                placeholder="wizard@hogwartz.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-2 block font-medium">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className={labelClasses}>Subject / Interest</label>
                        <input
                            id="subject"
                            type="text"
                            {...register('subject', { required: "What's this about?" })}
                            className={`${inputClasses} ${errors.subject ? 'border-red-500/50' : ''}`}
                            placeholder={isDark ? "E.g. Website Conjuring" : "E.g. Web Development Inquiry"}
                        />
                        {errors.subject && <span className="text-red-500 text-xs mt-2 block font-medium">{errors.subject.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            {...register('message', { required: "What's the magic request?" })}
                            className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                            placeholder="Tell us about your next project or big idea..."
                        />
                        {errors.message && <span className="text-red-500 text-xs mt-2 block font-medium">{errors.message.message}</span>}
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full btn-text py-5 rounded-xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden ${
                                isDark
                                    ? 'bg-accent text-primary hover:shadow-[0_0_25px_rgba(201,168,76,0.3)] disabled:opacity-50'
                                    : 'bg-primary text-white hover:bg-secondary disabled:opacity-50'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>{isDark ? "Casting Spell..." : "Processing..."}</span>
                                </>
                            ) : (
                                <>
                                    <span className="relative z-10">{isDark ? "Dispatch Message" : "Send Message"}</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                                    {isDark && (
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    )}
                                </>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-6 p-4 rounded-xl font-body text-center text-sm font-semibold border ${
                                    isDark 
                                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                                        : 'bg-green-50 border-green-200 text-green-700'
                                }`}
                            >
                                {isDark ? "✨ Owl dispatched successfully! We'll reply soon." : "Thank you! Your message has been sent successfully."}
                            </motion.div>
                        )}
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactForm;
