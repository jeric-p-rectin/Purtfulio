'use client';
import anime from 'animejs';
import ChessKing from "./chess-king";
import LinkedInLogo from './linkedin-logo';
import GitHubLogo from './github-logo';
import FacebookLogo from './facebook-logo';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from "react-responsive";

export default function Introduction() {
    const introductionTop = useRef<HTMLDivElement>(null);
    const introductionBottom = useRef<HTMLDivElement>(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        anime({
            targets: "#Creative",
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: "easeOutBounce",
            duration: 1000,
            delay: anime.stagger(100),
        });

        anime({
            targets: ["#Innovator", "#Developer"],
            translateY: [50, 0],
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 900,
        });

        anime({
            targets: ["#Creative", "#Innovator", "#Developer"],
            textShadow: '0 0 5px rgba(255,255,255,0.6)',
            easing: 'easeOutQuad',
            duration: 1200,
        });

        anime({
            targets: "#Introduction-Paragraph",
            translateY: [50, 0],
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 900,
            delay: 1500,
        });

        anime({
            targets: "#Contact-Me",
            opacity: [0, 1],
            scale: [0.5, 1],
            rotate: ["-5deg", "0deg"],
            easing: "easeOutBack",
            duration: 1000,
            delay: 2200,
        });
    }, []);

    if (!hasMounted) return null;

    return (
        <div id="introduction-section" className="flex flex-col h-screen p-5">
            <div ref={introductionTop} className="invisible">tae</div>

            <div className="flex flex-col m-auto w-full max-w-screen-lg">
                {/* Top Section */}
                <div className="flex flex-row items-center gap-2">
                    <div>
                        <h2 id="Creative" className={`font-abril text-gray-300 ${isDesktop ? 'text-2xl' : 'text-xl'} text-left`}>
                            CREATIVE
                        </h2>
                        <h1 id="Innovator" className={`font-abril ${isDesktop ? 'text-5xl' : 'text-3xl'} text-gray-100`}>
                            INNOVATOR
                        </h1>
                        <h1 id="Developer" className={`font-abril ${isDesktop ? 'text-5xl' : 'text-3xl'} text-primary`}>
                            DEVELOPER
                        </h1>
                    </div>
                    <div className={`bg-transparent ${isDesktop ? 'w-[135px] h-[100px]' : 'w-[105px] h-[100px]'}`}>
                        <ChessKing />
                    </div>
                </div>

                {/* Paragraph */}
                <p id="Introduction-Paragraph" className={`font-lato ${isDesktop ? 'text-base' : 'text-sm'} text-primary my-8 ml-1`}>
                    I AM AN INNOVATOR AND DEVELOPER FROM THE PHILIPPINES. I BUILD DIGITAL SOLUTIONS — FROM WEBSITES TO MOBILE APPS — TO EMPOWER COMMUNITIES AND LOCAL BUSINESSES. I’M DRIVEN BY CREATIVITY, PURPOSE, AND A LOVE FOR TURNING IDEAS INTO REALITY.
                </p>

                {/* Social Media & Contact */}
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row space-x-4">
                        <a href="https://www.linkedin.com/in/jeric-p-rectin/" target="_blank" rel="noopener noreferrer"
                           className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-75 transition">
                            <LinkedInLogo />
                        </a>
                        <a href="https://github.com/jeric-p-rectin/" target="_blank" rel="noopener noreferrer"
                           className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-75 transition">
                            <GitHubLogo />
                        </a>
                        <a href="https://www.facebook.com/share/1CUN9Puxnq/" target="_blank" rel="noopener noreferrer"
                           className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-75 transition">
                            <FacebookLogo />
                        </a>
                    </div>

                    <a
                        id="Contact-Me"
                        className="font-lato text-secondary text-center text-base shadow-md border rounded-md w-32 p-2 m-2 bg-fourtuary hover:bg-tertiary hover:text-primary transition border-black"
                        href="#contact-section"
                    >
                        CONTACT ME
                    </a>
                </div>
            </div>

            <div ref={introductionBottom} className="invisible">tae</div>
        </div>
    );
}
