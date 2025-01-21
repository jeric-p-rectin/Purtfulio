import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';

interface SectionProp {
    changeBackground: () => void; // Reference callback for the section
    animateAllTextsColor: () => void;
    // globalTextColors: string;
}

export default function Introduction({changeBackground, animateAllTextsColor}: SectionProp) {
    const introductionBottom = useRef<any>(null);
    let [state, setState] = useState(false);

    useEffect(() => {
        anime({
            targets: ["#Creative", '#Developer'],
            translateX: ["-100%", "0%"],
            opacity: [0, 50],
            easing: 'easeInOutQuad',
            duration: 2000,
        })
        anime({
            targets: ["#Full-Stack", '#Introduction-Paragraph'],
            translateX: ["-100%", 0],
            opacity: [0, 50],
            easing: 'easeInOutQuad',
            duration: 2000,
        })
        anime({
            targets: "#Contact-Me",
            translateX: ["-1000%", 0],
            opacity: [0, 50],
            easing: 'easeInOutQuad',
            duration: 2000,
        })
    }, [state])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                console.log("intersecting")
                if (entry.isIntersecting) {
                    anime({
                        targets: ['#Developer', "#Full-Stack", '#Introduction-Paragraph'],
                        // color: globalTextColors,
                        duration: 1000, // Duration of the animation
                        easing: 'easeInOutQuad', // Smooth easing
                    });
                    changeBackground();
                    animateAllTextsColor();
                    // observer.unobserve(entry.target); // Stop observing after the animation
                }
                // console.log("isIntersecting")
                });
            },
            { threshold: 0.5 } // Triggers when any part of the target is visible in the viewport
        );

        observer.observe(introductionBottom.current);
    }, [])

    return (
        <div id="introduction-section" className="flex flex-col h-screen p-5">
            <div className='flex flex-col m-auto'>
                <h2 id="Creative" className="font-abril text-quinary text-2xl text-left">CREATIVE</h2>
                <h1 id="Full-Stack" className="font-abril text-5xl">FULL-STACK</h1>
                <h1 id="Developer"className="font-abril text-5xl">DEVELOPER</h1>
                <p id='Introduction-Paragraph' className="font-lato text-base my-8 ml-1 indent-6">
                    I AM A DEVELOPER FROM PHILIPPINES. I HAVE 2+ YEARS OF EXPERIENCE IN DEVELOPING VARIOUS TYPES OF WEB APPLICATIONS. I LOVE NATURE, PIZZA AND ART.
                </p>
                <a id="Contact-Me" className="font-lato text-secondary shadow-md border self-end text-center rounded-md w-36 p-2 m-2 bg-fourtuary hover:bg-tertiary hover:text-primary hover:transition border-black" href={"#contact-section"}>CONTACT ME</a>
            </div>
            <div ref={introductionBottom} className='invisible'>tae</div>
        </div>
    )
}