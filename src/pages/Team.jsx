import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';
import TeamHero from '../components/team/TeamHero';
import MembersGrid from '../components/team/MembersGrid';
import TeamValues from '../components/team/TeamValues';
import SkillsExpertise from '../components/team/SkillsExpertise';
import CultureGallery from '../components/team/CultureGallery';
import TeamQuotes from '../components/team/TeamQuotes';
import ContactBanner from '../components/home/ContactBanner';

const Team = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    return (
        <div className={`overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background transition-colors duration-700`}>
            <Helmet>
                <title>Meet Our Team | Hogwartz Digital</title>
                <meta name="description" content={isDark ? "Meet the wizards behind Hogwartz Digital: Developers, Designers, and Marketers bringing magic to the web." : "Meet the team behind Hogwartz Digital: Strategists, Designers, and Developers building professional digital solutions."} />
            </Helmet>

            <TeamHero isDark={isDark} />
            
            <MembersGrid isDark={isDark} />

            <TeamValues isDark={isDark} />

            <SkillsExpertise isDark={isDark} />

            <CultureGallery isDark={isDark} />

            <TeamQuotes isDark={isDark} />

            <ContactBanner />
        </div>
    );
};

export default Team;
