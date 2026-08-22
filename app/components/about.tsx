import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import anime from "animejs";
import { useReveal } from "../hooks/use-reveal";

const ChessModel = dynamic(() => import("./chess-model"), { ssr: false });

export default function About() {
  const h1Ref = useRef(null);
  const divRef = useRef(null);
  const [stopAnimation, setStopAnimation] = useState(true);
  const [showModel, setShowModel] = useState(false);

  function animateAboutSection() {
    anime.timeline({ easing: "easeOutQuad", duration: 800 })
      .add({
        targets: "#Introduction-HELLO",
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 600,
      })
      .add({
        targets: "#Introduction-HELLO", 
        textShadow: '0 0 5px rgba(255,255,255,0.6)',
        easing: 'easeOutQuad',
        duration: 200,
      })
      .add({
        targets: "#Introduction-JERIC",
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 600,
      }, "-=400")
      .add({
        targets: "#Introduction-JERIC", 
        textShadow: '0 0 5px rgba(255,255,255,0.6)',
        easing: 'easeOutQuad',
        duration: 200,
      })
      .add({
        targets: "#Introduction-JERIC-RECTIN",
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 600,
      }, "-=400")
      .add({
        targets: ["#Introduction-JERIC-RECTIN"], 
        textShadow: '0 0 3px rgba(255,255,255,0.4)',
        easing: 'easeOutQuad',
        duration: 600,
      })
      .add({
        targets: ".Introduction-p",
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(300),
        duration: 800,
      }, "-=300")
      .add({
        targets: "#Chess-Model",
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(300),
        duration: 800,
      }, "-=300")
  }

  const sectionRef = useReveal<HTMLDivElement>(() => {
    if (!stopAnimation) return;
    animateAboutSection();
    setStopAnimation(false);
  });

  // Mount the 3D canvas a little earlier than the reveal so it has time to
  // initialise before it is actually looked at.
  const modelRef = useReveal<HTMLDivElement>(
    () => setShowModel(true),
    { rootMargin: '0px 0px 400px 0px' }
  );

  return (
    <div ref={sectionRef} id="about-section" className="flex flex-col p-5 h-auto">
      <div className="flex flex-col pt-20" ref={divRef}>
        <div ref={h1Ref}>
          <h2 id="Introduction-HELLO" className="reveal font-abril text-3xl sm:text-5xl text-primary">HELLO.</h2>
          <h2 id="Introduction-JERIC" className="reveal font-abril text-3xl sm:text-5xl text-gray-100">I AM JERIC</h2>
        </div>
        <h3 id="Introduction-JERIC-RECTIN" className="reveal font-abril text-gray-300 text-2xl">JERIC RECTIN</h3>
        <div>
          <p className="Introduction-p reveal font-lato text-sm sm:text-base my-8 text-primary">
            I USE MY PASSION AND SKILLS TO CREATE AND DEVELOP APPS THAT CAN MAKE DIFFERENCE AND BRING IDEAS TO LIFE.
          </p>
          <p className="Introduction-p reveal text-sm sm:text-base mt-8 text-primary">
            I AM CONSTANTLY LEARNING AND EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLS
            AND STAY AHEAD IN THE EVER-EVOLVING TECH LANDSCAPE.
            WHETHER IT&apos;S DESIGNING A SLEEK WEBSITE OR DEVELOPING FUNCTIONAL WEB APPLICATION SOLUTIONS,
            I AM DEDICATED TO DELIVERING HIGH QUALITY WORK THAT EXCEEDS EXPECTATIONS.
          </p>
        </div>
        <div id="Chess-Model" ref={modelRef} className="reveal h-[300px]">
            {showModel && <ChessModel />}
        </div>
      </div>
    </div>
  );
}
