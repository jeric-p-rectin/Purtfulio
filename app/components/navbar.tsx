import {useState, useEffect, useRef} from 'react';
import anime from 'animejs';

type navbarProps = {
    bottomLineGrowColor: string;
};

export default function Navbar({bottomLineGrowColor} : navbarProps) {
    const bottomLineGrowIfGlobalColorIsWhite = `w-fit after:block after:content-[''] after:h-[1px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 hover:after:bg-white after:transition after:duration-300 after:origin-center`
    const bottomLineGrowIfGlobalColorIsBlack = `w-fit after:block after:content-[''] after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`

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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="Navbar" className={`fixed top-0 right-0 left-0 z-10 flex justify-between border-b-2 ${bottomLineGrowColor == "#FFFFFF" ? "border-[#FFFFFF]" : "border-secondary"} mx-3 h-16 p-5 backdrop-blur-sm`}>
            <h1 id="navbar-Jeric" className={`font-abril text-xl`}>JERIC</h1>
            <ul className="flex flex-row">
                {sections.map((section) => (
                    <li id="navbar-sections" key={section}>
                        <a
                        href={`#${section}`}
                        className={bottomLineGrowColor == "#FFFFFF" ? bottomLineGrowIfGlobalColorIsWhite : bottomLineGrowIfGlobalColorIsBlack}
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
    )
}