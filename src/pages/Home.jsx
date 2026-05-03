import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ScrollingServices from '../components/home/ScrollingServices';
import AboutOverview from '../components/home/AboutOverview';
import WhatWeOffer from '../components/home/WhatWeOffer';
import ProjectsPreview from '../components/home/ProjectsPreview';
import TeamHighlight from '../components/home/TeamHighlight';
import ContactBanner from '../components/home/ContactBanner';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Hogwartz Digital | Strategic Digital Agency</title>
                <meta name="description" content="A premium digital agency that strategizes every move. Transform your brand with Hogwartz Digital." />
            </Helmet>

            <div className="flex flex-col w-full">
                <HeroSection />
                <ScrollingServices />
                <AboutOverview />
                <WhatWeOffer />
                <ProjectsPreview />
                <TeamHighlight />
                <ContactBanner />
            </div>
        </>
    );
};

export default Home;
