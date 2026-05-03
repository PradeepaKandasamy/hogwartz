import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MagicCursor from '../ui/MagicCursor';
import MagicalParticles from '../ui/MagicalParticles';
import { useTheme } from '../../context/ThemeContext';

const MainLayout = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    return (
        <div className="relative flex min-h-screen flex-col">
            {isDark && (
                <>
                    <MagicCursor />
                    <MagicalParticles />
                </>
            )}
            <Header />
            <main className="flex-1 overflow-x-hidden pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
