import { useRef, useState } from "react";
import anime from "animejs";
import { useRouter } from 'next/navigation';
import { useReveal } from "../hooks/use-reveal";

export default function Contact() {
  const buttonCSS =
    "font-lato shadow-md border rounded-md my-1 p-2 bg-fourtuary hover:bg-tertiary text-secondary hover:text-primary hover:transition border-black";
  const router = useRouter();

  const h1AndH2Ref = useRef(null);
  const buttonsRef = useRef(null);
  const divRef = useRef(null);

  const [stopAnimation, setStopAnimation] = useState(true);

  function animateContactSection() {
    anime.timeline({ easing: "easeOutQuad", duration: 700 })
      .add({
        targets: "#Contact-LET",
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 500,
      })
      .add({
        targets: "#Contact-LET", 
        textShadow: '0 0 5px rgba(255,255,255,0.6)',
        easing: 'easeOutQuad',
        duration: 200,
      })
      .add({
        targets: "#Contact-CONNECT",
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 500,
      }, "-=300")
      .add({
        targets: "#Contact-CONNECT", 
        textShadow: '0 0 5px rgba(255,255,255,0.6)',
        easing: 'easeOutQuad',
        duration: 200,
      })
      .add({
        targets: "#Contact-INTERESTED",
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 500,
      }, "-=300")
      .add({
        targets: "#Contact-INTERESTED",
        textShadow: '0 0 5px rgba(255,255,255,0.6)',
        easing: 'easeOutQuad',
        duration: 200,
      }, "-=400")
      .add({
        targets: ".contact-button",
        translateX: ["-50px", "0px"],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 600,
      }, "-=200");
  }

  const sectionRef = useReveal<HTMLDivElement>(() => {
    if (!stopAnimation) return;
    animateContactSection();
    setStopAnimation(false);
  });

  return (
    <div ref={sectionRef} id="contact-section" className="flex flex-col p-5 h-screen">
      <div ref={divRef} className="flex flex-col justify-start mt-auto mb-auto">
        <div ref={h1AndH2Ref}>
          <h2 id="Contact-LET" className="reveal font-abril text-3xl sm:text-5xl text-primary">LET&apos;S</h2>
          <h2 id="Contact-CONNECT" className="reveal font-abril text-3xl sm:text-5xl text-primary">CONNECT</h2>
          <h3 id="Contact-INTERESTED" className="reveal font-abril text-2xl sm:text-3xl mb-4 text-gray-300">I AM ALWAYS INTERESTED ABOUT</h3>
        </div>
        <div ref={buttonsRef} className="flex flex-col">
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button reveal`}>FRONT END DEVELOPMENT</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button reveal`}>BACK END DEVELOPMENT</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button reveal`}>SEO MARKETING</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button reveal`}>WEB CONSULTANT</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button reveal`}>BUSSINESSES AND PIZZAS</button>
        </div>
      </div>
    </div>
  );
}
