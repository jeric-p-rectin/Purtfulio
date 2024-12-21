import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";
import ChessModel from "./chess-model"

export default function About() {
    const h1Ref = useRef(null);
    const divRef = useRef(null);
    const taeRef1 = useRef<any>(null)
    const taeRef2 = useRef<any>(null)

    useEffect(() => {
        anime({
            targets: [divRef.current],
            translateX: ['-1000px'],
            easing: 'easeOutQuad',
            duration: 0,
        });

        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  anime({
                    targets: [entry.target, divRef.current],
                    translateX: "0px",
                    easing: 'easeOutQuad',
                    duration: 2000,
                  });
                  observer.unobserve(entry.target); // Stop observing after the animation
                }
              });
            },
            { threshold: 0.3 } // Triggers when any part of the target is visible in the viewport
          );

        observer.observe(taeRef1.current);
        observer.observe(taeRef2.current);
    });

    return (
        <div id="about-section" className="flex flex-col p-5 h-auto">
            <div ref={taeRef1} className="invisible">tae1</div>
            <div className="flex flex-col pt-20" ref={divRef}>
                <div ref={h1Ref}>
                    <h1 className="font-abril text-5xl">HELLO.</h1>
                    <h1 className="font-abril text-5xl">I AM JERIC</h1>
                </div>
                <h2 className="font-abril text-quinary text-2xl">JERIC RECTIN</h2>
                <div>
                    <p className=" font-lato text-base my-8 indent-6">
                        I USE MY PASSION AND SKILLS TO CREATE AND DEVELOP APPS THAT CAN MAKE DIFFERENCE AND BRING IDEAS TO LIFE.
                    </p>
                    <p className="text-base mt-8 indent-6">
                        I AM CONSTANTLY LEARNING AND EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLS 
                        AND STAY AHEAD IN THE EVER-EVOLVING TECH LANDSCAPE.
                        WHETHER IT&apos;S DESIGNING A SLEEK WEBSITE OR DEVELOPING FUNCTIONAL WEB APPLICATION SOLUTIONS,
                        I AM DEDICATED TO DELIVERING HIGH QUALITY WORK THAT EXCEEDS EXPECTATIONS.
                    </p>
                </div>
                {/* <div className="w-full h-100">
                    <Image
                        className="shadow-md border-secondary rounded-md"
                        src={'/me.jpg'}
                        alt="Placeholder Project Image"
                        width={300}
                        height={300}
                        style={{width: '100%', height: '100%'}}
                    />
                </div> */}
                <ChessModel />
            </div>
            <div ref={taeRef2} className="invisible">tae2</div>
        </div>
    )
}