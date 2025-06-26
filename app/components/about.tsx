import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import ChessModel from "./chess-model";

export default function About() {
  const h1Ref = useRef(null);
  const divRef = useRef(null);
  const aboutTop = useRef<any>(null);
  const aboutMiddle = useRef<any>(null);
  const aboutBottom = useRef<any>(null);

  const [stopAnimation, setStopAnimation] = useState(true);

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

  useEffect(() => {
    if (stopAnimation) {
      anime.set([
        "#Introduction-HELLO",
        "#Introduction-JERIC",
        "#Introduction-JERIC-RECTIN",
        ".Introduction-p"
      ], {
        opacity: 0
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && stopAnimation) {
            animateAboutSection();
            setStopAnimation(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutTop.current) observer.observe(aboutTop.current);
    if (aboutMiddle.current) observer.observe(aboutMiddle.current);
    if (aboutBottom.current) observer.observe(aboutBottom.current);

    return () => observer.disconnect();
  }, [stopAnimation]);

  return (
    <div id="about-section" className="flex flex-col p-5 h-auto">
      <div ref={aboutTop} className="self-center size-0 invisible">tae1</div>
      <div className="flex flex-col pt-20" ref={divRef}>
        <div ref={h1Ref}>
          <h1 id="Introduction-HELLO" className="font-abril text-3xl sm:text-5xl text-primary">HELLO.</h1>
          <h1 id="Introduction-JERIC" className="font-abril text-3xl sm:text-5xl text-gray-300">I AM JERIC</h1>
        </div>
        <h2 id="Introduction-JERIC-RECTIN" className="font-abril text-quinary text-2xl">JERIC RECTIN</h2>
        <div>
          <p className="Introduction-p font-lato text-sm sm:text-base my-8 text-primary">
            I USE MY PASSION AND SKILLS TO CREATE AND DEVELOP APPS THAT CAN MAKE DIFFERENCE AND BRING IDEAS TO LIFE.
          </p>
          <div ref={aboutMiddle} className="self-center size-0 invisible">tae</div>
          <p className="Introduction-p text-sm sm:text-base mt-8 text-primary">
            I AM CONSTANTLY LEARNING AND EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLS
            AND STAY AHEAD IN THE EVER-EVOLVING TECH LANDSCAPE.
            WHETHER IT&apos;S DESIGNING A SLEEK WEBSITE OR DEVELOPING FUNCTIONAL WEB APPLICATION SOLUTIONS,
            I AM DEDICATED TO DELIVERING HIGH QUALITY WORK THAT EXCEEDS EXPECTATIONS.
          </p>
        </div>
        <div ref={aboutBottom} className="self-center size-0 invisible">tae2</div>
        <div id="Chess-Model">
            <ChessModel />
        </div>
      </div>
    </div>
  );
}
