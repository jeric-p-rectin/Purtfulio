import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import ChessModel from "./chess-model"

interface SectionProp {
    changeBackground: () => void; // Reference callback for the section
    animateAllTextsColor: () => void;
}

export default function About({changeBackground, animateAllTextsColor} : SectionProp) {
    const h1Ref = useRef(null);
    const divRef = useRef(null);
    const aboutTop = useRef<any>(null);
    const aboutMiddle = useRef<any>(null);
    const aboutBottom = useRef<any>(null);

    let [stopAnimation, setStopAnimation] = useState(true);

    useEffect(() => {
        if (stopAnimation) {
            anime({
                targets: [divRef.current],
                translateX: ['-1000px'],
                easing: 'easeOutQuad',
                duration: 0,
            });
        }

        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (stopAnimation) {
                        anime({
                            targets: [entry.target, divRef.current],
                            translateX: "0px",
                            easing: 'easeOutQuad',
                            duration: 2000,
                        });
                        setStopAnimation(stopAnimation = false)
                    }
                    changeBackground();
                    animateAllTextsColor();                }
              });
            },
            { threshold: 0.3 } // Triggers when any part of the target is visible in the viewport
          );

        observer.observe(aboutTop.current);
        observer.observe(aboutMiddle.current);
        observer.observe(aboutBottom.current);
    });

    return (
        <div id="about-section" className="flex flex-col p-5 h-auto">
            <div ref={aboutTop} className="self-center size-0 invisible">tae1</div>
            <div className="flex flex-col pt-20" ref={divRef}>
                <div ref={h1Ref}>
                    <h1 id="Introduction-HELLO" className="font-abril text-5xl">HELLO.</h1>
                    <h1 id="Introduction-JERIC" className="font-abril text-5xl">I AM JERIC</h1>
                </div>
                <h2 id="Introduction-JERIC-RECTIN" className="font-abril text-quinary text-2xl">JERIC RECTIN</h2>
                <div>
                    <p className="Introduction-p font-lato text-base my-8 indent-6">
                        I USE MY PASSION AND SKILLS TO CREATE AND DEVELOP APPS THAT CAN MAKE DIFFERENCE AND BRING IDEAS TO LIFE.
                    </p>
                    <div ref={aboutMiddle} className="self-center size-0 invisible">
                        tae
                    </div>
                    <p className="Introduction-p text-base mt-8 indent-6">
                        I AM CONSTANTLY LEARNING AND EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLS 
                        AND STAY AHEAD IN THE EVER-EVOLVING TECH LANDSCAPE.
                        WHETHER IT&apos;S DESIGNING A SLEEK WEBSITE OR DEVELOPING FUNCTIONAL WEB APPLICATION SOLUTIONS,
                        I AM DEDICATED TO DELIVERING HIGH QUALITY WORK THAT EXCEEDS EXPECTATIONS.
                    </p>
                </div>
                <div ref={aboutBottom} className="self-center size-0 invisible">tae2</div>
                <ChessModel />
            </div>
        </div>
    )
}