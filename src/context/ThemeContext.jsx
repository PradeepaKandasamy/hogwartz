import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // 'dark-arts' is minimal theme, 'enchanted-scroll' is advanced theme
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('hogwartzTheme') || 'dark-arts';
    });

    useEffect(() => {
        localStorage.setItem('hogwartzTheme', theme);
        if (theme === 'enchanted-scroll') {
            document.body.classList.add('theme-enchanted');
            document.body.classList.remove('theme-dark-arts');
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.body.classList.remove('theme-enchanted');
            document.body.classList.add('theme-dark-arts');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark-arts' ? 'enchanted-scroll' : 'dark-arts');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
