import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';

const TeamCard = ({ member, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`group flex flex-col p-6 lg:p-5 xl:p-6 rounded-[2.5rem] border transition-all duration-500 relative
        ${isDark
                    ? 'bg-secondary/10 border-accent/10 hover:border-accent hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] shadow-2xl'
                    : 'bg-white shadow-xl border-primary/5 hover:shadow-2xl'
                }`}
        >
            {/* Hover Magic Ornament (Dark) */}
            {isDark && (
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                </div>
            )}

            <div className={`w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative mb-8
                 ${isDark ? 'grayscale group-hover:grayscale-0 transition-all duration-[1s]' : 'grayscale-0'} 
            `}>
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                />
                
                {/* Image Overlay Gradient */}
                {isDark ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-40" />
                )}
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-px bg-accent/40" />
                    <p className={`font-body text-xs md:text-sm font-bold tracking-widest uppercase italic 
                        ${isDark ? 'text-accent' : 'text-accent text-sm'}
                    `}>
                        {member.role}
                    </p>
                </div>
                
                <h3 className={`font-heading text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-4 tracking-tight
                    ${isDark ? 'text-white' : 'text-primary'}
                `}>
                    {member.name}
                </h3>
                
                <p className={`font-body text-sm md:text-base leading-relaxed mb-6 
                    ${isDark ? 'text-text-secondary' : 'text-text-secondary font-medium'}
                `}>
                    {member.bio}
                </p>
            </div>

            <div className={`flex gap-4 pt-6 border-t mt-auto ${isDark ? 'border-accent/10' : 'border-primary/5'}`}>
                {[
                    { icon: <Linkedin className="w-4 h-4" />, link: "#" },
                    { icon: <Twitter className="w-4 h-4" />, link: "#" },
                    { icon: <Instagram className="w-4 h-4" />, link: "#" }
                ].map((social, i) => (
                    <a 
                        key={i}
                        href={social.link} 
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all transform hover:scale-110
                            ${isDark 
                                ? 'bg-accent/5 text-accent border border-accent/20 hover:bg-accent hover:text-primary shadow-[0_0_15px_rgba(201,168,76,0.1)]' 
                                : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'
                            }
                        `}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

const MembersGrid = ({ isDark }) => {
    const teamMembers = [
        {
            name: "Ramasubramaniyan",
            role: "Founder & CEO",
            image: "https://picsum.photos/seed/member1/300/400",
            bio: "Visionary entrepreneur leading Hogwartz Digital with a passion for technology, creativity, and business growth."
        },
        {
            name: "Vidarshna",
            role: "Video Editor & Designer",
            image: "https://picsum.photos/seed/member2/300/400",
            bio: "Crafting compelling visuals and videos that capture attention and tell powerful brand stories."
        },
        {
            name: "Thayumanavar Naveen Kumar",
            role: "Graphic Designer & Content Creator",
            image: "https://picsum.photos/seed/member3/300/400",
            bio: "Transforming ideas into engaging visuals and content that resonate with audiences."
        },
        {
            name: "Pradeepa",
            role: "Developer & Editor",
            image: "https://picsum.photos/seed/member4/300/400",
            bio: "Building seamless digital experiences while ensuring every detail meets creative excellence."
        }
    ];

    return (
        <section className="py-24 px-6 md:pb-40">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-10">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembersGrid;
