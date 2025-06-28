import { useState, useEffect, useRef } from 'react'; // ayusin mo ang format pero wag ka mag iba
// import ThemeToggle from './theme-toggle';
import { useMediaQuery } from "react-responsive";
import anime from 'animejs';

export default function Navbar() {
    const [hasMounted, setHasMounted] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const navbarRef = useRef(null);

    const bottomLineGrowIfGlobalColorIsWhite = `text-primary text-sm w-fit after:block after:content-[''] after:h-[1px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 hover:after:bg-white after:transition after:duration-300 after:origin-center`;

    const desktopBottomLineGrowIfGlobalColorIsWhite = `text-primary w-fit after:block after:content-[''] after:h-[1px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 hover:after:bg-white after:transition after:duration-300 after:origin-center`;

    const [activeSection, setActiveSection] = useState('');
    const sections = ['work-section', 'about-section', 'contact-section']; // IDs of your sections

    const handleScroll = () => {
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                setActiveSection(section);
            }
        });
    };

    useEffect(() => {
        setHasMounted(true);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (hasMounted && navbarRef.current) {
            anime({
                targets: navbarRef.current,
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeOutQuad',
                duration: 800,
                delay: 100
            });
        }
    }, [hasMounted]);
  
    return (
        <>
            {isDesktop ? (
                <div
                    ref={navbarRef}
                    id="Navbar"
                    className={`
                        fixed top-0 right-0 left-0 z-10
                        flex flex-row justify-between items-center text-
                        border-b-2 border-[#FFFFFF]
                        mx-3 h-16 px-5 backdrop-blur-sm
                    `}
                >
                    <h1 id="navbar-Jeric" className={`font-abril text-2xl text-primary`}>JERIC</h1>
                    <ul className="flex flex-row items-center gap-1 sm:gap-2">
                        {/* <li><ThemeToggle /></li> */}
                        {sections.map((section) => (
                            <li id="navbar-sections" key={section}>
                                <a
                                    href={`#${section}`}
                                    className={desktopBottomLineGrowIfGlobalColorIsWhite}
                                >
                                    {section == "work-section"
                                        ? section.toUpperCase().slice(0, 4) + ","
                                        : section == "about-section"
                                            ? section.toUpperCase().slice(0, 5) + ","
                                            : section == "contact-section"
                                                ? section.toUpperCase().slice(0, 7)
                                                : section.toUpperCase()
                                    }
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div
                    ref={navbarRef}
                    id="Navbar"
                    className={`
                        fixed top-0 right-0 left-0 z-10
                        flex flex-row justify-between items-center
                        border-b-2 border-[#FFFFFF]
                        mx-3 h-16 px-5 backdrop-blur-sm
                    `}
                >
                    <h1 id="navbar-Jeric" className={`font-abril text-lg text-primary`}>JERIC</h1>
                    <ul className="flex flex-row items-center gap-1 sm:gap-2">
                        {/* <li><ThemeToggle /></li> */}
                        {sections.map((section) => (
                            <li id="navbar-sections" key={section}>
                                <a
                                    href={`#${section}`}
                                    className={bottomLineGrowIfGlobalColorIsWhite}
                                >
                                    {section == "work-section"
                                        ? section.toUpperCase().slice(0, 4) + ","
                                        : section == "about-section"
                                            ? section.toUpperCase().slice(0, 5) + ","
                                            : section == "contact-section"
                                                ? section.toUpperCase().slice(0, 7)
                                                : section.toUpperCase()
                                    }
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
