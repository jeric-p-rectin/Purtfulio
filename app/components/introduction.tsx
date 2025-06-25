import anime from 'animejs';
import ChessKing from "./chess-king";
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from "react-responsive";

export default function Introduction() {
    const introductionBottom = useRef<any>(null);
    const introductionTop = useRef<any>(null)
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        // Animate each letter of "CREATIVE"
        anime({
            targets: "#Creative",
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: "easeOutBounce",
            duration: 1000,
            delay: anime.stagger(100),
        });

        // Animate "FULL-STACK" and "DEVELOPER"
        anime({
            targets: ["#Full-Stack", "#Developer"],
            translateY: [50, 0],
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 900,
        });

        // Animate paragraph
        anime({
            targets: "#Introduction-Paragraph",
            translateY: [50, 0],
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 900,
            delay: 1500,
        });

        // Animate contact button
        anime({
            targets: "#Contact-Me",
            opacity: [0, 1],
            scale: [0.5, 1],
            rotate: ["-5deg", "0deg"],
            easing: "easeOutBack",
            duration: 1000,
            delay: 2200,
        });
    }, [hasMounted]);

    if (hasMounted) {
        return (
    <>
        {isDesktop ? (
            <div id="introduction-section" className="flex flex-col h-screen p-5">
                <div ref={introductionTop} className="invisible">tae</div>
                <div className="flex flex-col m-auto">
                    <div className="flex flex-row gap-0">
                        <div>
                            <h2 id="Creative" className="font-abril text-quinary text-2xl text-left">CREATIVE</h2>
                            <h1 id="Full-Stack" className="font-abril text-5xl text-primary">FULL-STACK</h1>
                            <h1 id="Developer" className="font-abril text-5xl text-primary">DEVELOPER</h1>
                        </div>
                        <div className="bg-transparent w-[135px] h-[100px]">
                            <ChessKing />
                        </div>
                    </div>
                    <p id="Introduction-Paragraph" className="font-lato text-base text-primary my-8 ml-1">
                        I AM A DEVELOPER FROM PHILIPPINES. I HAVE MORE THAN TWO YEARS OF EXPERIENCE IN DEVELOPING VARIOUS TYPES OF WEB APPLICATIONS. I LOVE NATURE, PIZZA AND ART.
                    </p>
                    <a
                        id="Contact-Me"
                        className="font-lato text-secondary shadow-md border self-end text-center rounded-md w-36 p-2 m-2 bg-fourtuary hover:bg-tertiary hover:text-primary hover:transition border-black"
                        href="#contact-section"
                    >
                        CONTACT ME
                    </a>
                </div>
                <div ref={introductionBottom} className="invisible">tae</div>
            </div>
        ) : (
            <div id="introduction-section" className="flex flex-col h-screen p-5">
                <div ref={introductionTop} className="invisible">tae</div>
                <div className="flex flex-col m-auto">
                    <div className="flex flex-row items-center gap-0">
                        <div>
                            <h2 id="Creative" className="font-abril text-quinary text-2xl text-left">CREATIVE</h2>
                            <h1 id="Full-Stack" className="font-abril text-3xl text-primary">FULL-STACK</h1>
                            <h1 id="Developer" className="font-abril text-3xl text-primary">DEVELOPER</h1>
                        </div>
                    <div className="bg-transparent w-[105px] h-[100px] sm:w-[135px] sm:h-[100px]" style={{ width: window.innerWidth <= 305 ? '80px' : undefined }}>
                        <ChessKing />
                    </div>
                    </div>
                    <p id="Introduction-Paragraph" className="font-lato text-sm text-primary my-8 ml-1">
                        I AM A DEVELOPER FROM PHILIPPINES. I HAVE MORE THAN TWO YEARS OF EXPERIENCE IN DEVELOPING VARIOUS TYPES OF WEB APPLICATIONS. I LOVE NATURE, PIZZA AND ART.
                    </p>
                    <a
                        id="Contact-Me"
                        className="font-lato text-secondary text-center text-base shadow-md border self-end rounded-md w-32 p-2 m-2 bg-fourtuary hover:bg-tertiary hover:text-primary hover:transition border-black"
                        href="#contact-section"
                    >
                        CONTACT ME
                    </a>
                </div>
                <div ref={introductionBottom} className="invisible">tae</div>
            </div>
        )}
    </>
);
    }

}