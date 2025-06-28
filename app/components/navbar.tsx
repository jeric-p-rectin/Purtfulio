"use client";

import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from "react-responsive";
import anime from 'animejs';

export default function Navbar() {
    const [hasMounted, setHasMounted] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const navbarRef = useRef(null);

    const bottomLineGrowIfGlobalColorIsWhite = `text-primary text-sm w-fit after:block after:content-[''] after:h-[1px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 hover:after:bg-white after:transition after:duration-300 after:origin-center`;
    const desktopBottomLineGrowIfGlobalColorIsWhite = `text-primary w-fit after:block after:content-[''] after:h-[1px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 hover:after:bg-white after:transition after:duration-300 after:origin-center`;

    const [activeSection, setActiveSection] = useState('');
    const sections = ['work-section', 'about-section', 'contact-section'];

    useEffect(() => {
        setHasMounted(true);

        const handleScroll = () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    setActiveSection(section);
                }
            });
        };

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

    if (!hasMounted) return null; // Prevent mismatched SSR vs CSR

    return (
        <div
            ref={navbarRef}
            id="Navbar"
            className={`fixed top-0 right-0 left-0 z-10 flex flex-row justify-between items-center border-b-2 border-[#FFFFFF] mx-3 h-16 px-5 backdrop-blur-sm`}
        >
            <div className="flex flex-row">
                <h1 id="navbar-Jeric" className="font-abril text-lg sm:text-2xl text-primary">JERIC</h1>
            </div>
            <ul className="flex flex-row items-center gap-1 sm:gap-2">
                {sections.map((section) => (
                    <li id="navbar-sections" key={section}>
                        <a
                            href={`#${section}`}
                            className={isDesktop ? desktopBottomLineGrowIfGlobalColorIsWhite : bottomLineGrowIfGlobalColorIsWhite}
                        >
                            {section == "work-section"
                                ? section.toUpperCase().slice(0, 4) + ","
                                : section == "about-section"
                                    ? section.toUpperCase().slice(0, 5) + ","
                                    : section == "contact-section"
                                        ? section.toUpperCase().slice(0, 7)
                                        : section.toUpperCase()}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
