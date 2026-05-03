import { motion } from 'framer-motion';

const MissionVision = ({ isDark, content }) => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-background">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className={`space-y-12 p-10 md:p-16 rounded-[4rem] group border ${isDark ? 'bg-secondary/5 border-accent/20 hover:border-accent/40' : 'bg-primary/5 border-primary/10'} transition-all hover:translate-y-[-10px]`}
                >
                    <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 rounded-[2rem] bg-accent/20 flex items-center justify-center text-accent scale-150 rotate-[-12deg] group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                            {content.mission.icon}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-magical font-bold text-text-primary underline decoration-accent/20 underline-offset-8 decoration-4 leading-[1.2]">
                            {content.mission.title}
                        </h3>
                        <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed first-letter:text-4xl first-letter:font-magical first-letter:text-highlight">
                            {content.mission.p}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className={`space-y-12 p-10 md:p-16 rounded-[4rem] group border ${isDark ? 'bg-secondary/5 border-highlight/20 hover:border-highlight/40' : 'bg-primary/5 border-primary/10'} transition-all hover:translate-y-[-10px]`}
                >
                    <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 rounded-[2rem] bg-highlight/20 flex items-center justify-center text-highlight scale-150 rotate-[12deg] group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(232,201,109,0.3)]">
                            {content.vision.icon}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-magical font-bold text-text-primary underline decoration-highlight/20 underline-offset-8 decoration-4 leading-[1.2]">
                            {content.vision.title}
                        </h3>
                        <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed first-letter:text-4xl first-letter:font-magical first-letter:text-accent">
                            {content.vision.p}
                        </p>
                    </div>
                </motion.div>
            </div>
            {/* Background elements */}
            <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[120px] ${isDark ? 'bg-accent/10' : 'bg-primary/10 opacity-40'}`}></div>
            <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] ${isDark ? 'bg-highlight/10' : 'bg-secondary/10 opacity-40'}`}></div>
        </section>
    );
};

export default MissionVision;
