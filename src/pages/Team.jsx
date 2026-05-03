import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';
import TeamHero from '../components/team/TeamHero';
import MembersGrid from '../components/team/MembersGrid';
import TeamValues from '../components/team/TeamValues';
import SkillsExpertise from '../components/team/SkillsExpertise';
import CultureGallery from '../components/team/CultureGallery';
import TeamQuotes from '../components/team/TeamQuotes';
import TeamCTA from '../components/team/TeamCTA';

const Team = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    return (
        <div className={`overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background transition-colors duration-700`}>
            <Helmet>
                <title>Meet Our Team | Hogwartz Digital</title>
                <meta name="description" content="Meet the wizards behind Hogwartz Digital: Developers, Designers, and Marketers bringing magic to the web." />
            </Helmet>

            <TeamHero isDark={isDark} />
            
            <MembersGrid isDark={isDark} />

            <TeamValues isDark={isDark} />

            <SkillsExpertise isDark={isDark} />

            <CultureGallery isDark={isDark} />

            <TeamQuotes isDark={isDark} />

            <TeamCTA isDark={isDark} />
        </div>
    );
};

export default Team;
