import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import QuickContact from '../components/contact/QuickContact';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';

const Contact = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    const faqs = [
        {
            question: "How long does a website take to build?",
            answer: "A standard spell (website) takes about 4-6 weeks to conjure, while complex custom platforms might take 2-3 months from initial scrying to final deployment."
        },
        {
            question: "Do you offer ongoing marketing support?",
            answer: "Absolutely. We offer retainer packages for continuous spell-casting, including SEO, Ads management, and content creation to keep your brand's magic strong."
        },
        {
            question: "What is your pricing structure?",
            answer: "Every project is a unique artifact. Depending on the complexity of the spells required, we provide custom quotes after our initial consultation. No hidden gold required."
        },
        {
            question: "Can we meet in person as well?",
            answer: "While we operate primarily through the digital Floo Network, we're happy to schedule physical Raven meetings if you're in our sanctuary's territory."
        }
    ];

    return (
        <div className={`overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background transition-colors duration-500`}>
            <Helmet>
                <title>Contact Us | Hogwartz Digital</title>
                <meta name="description" content="Send us an owl. Contact Hogwartz Digital to discuss your next big web development or marketing project." />
            </Helmet>

            {/* 1. Hero Section */}
            <ContactHero isDark={isDark} />

            {/* 2. Unified Contact Details & Form (Two Columns) */}
            <section className="py-16 px-6 relative overflow-hidden">
                {isDark && (
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                )}
                
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Side: Contact Details */}
                        <div className="order-1 h-full">
                            <ContactInfo isDark={isDark} />
                        </div>
                        
                        {/* Right Side: Contact Form */}
                        <div className="order-2 h-full lg:sticky lg:top-32">
                            <ContactForm isDark={isDark} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Instant Contact Section */}
            <QuickContact isDark={isDark} />

            {/* 4. FAQ Section (Below) */}
            <ContactFAQ isDark={isDark} faqs={faqs} />

            {/* 4. CTA Section */}
            <ContactCTA isDark={isDark} />
        </div>
    );
};

export default Contact;
