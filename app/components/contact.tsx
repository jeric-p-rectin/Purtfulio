import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const buttonCSS =
    "font-lato shadow-md border rounded-md my-1 p-2 bg-fourtuary hover:bg-tertiary text-secondary hover:text-primary hover:transition border-black";
  const router = useRouter();

  const h1AndH2Ref = useRef(null);
  const buttonsRef = useRef(null);
  const contactTop = useRef<any>(null);
  const contactMiddle = useRef<any>(null);
  const contactBottom = useRef<any>(null);
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
        targets: ".contact-button",
        translateX: ["-50px", "0px"],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 600,
      }, "-=200");
  }

  useEffect(() => {
    if (stopAnimation) {
      anime.set([
        "#Contact-LET",
        "#Contact-CONNECT",
        "#Contact-INTERESTED",
        ".contact-button"
      ], { opacity: 0 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && stopAnimation) {
            animateContactSection();
            setStopAnimation(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactTop.current) observer.observe(contactTop.current);
    if (contactMiddle.current) observer.observe(contactMiddle.current);
    if (contactBottom.current) observer.observe(contactBottom.current);

    return () => observer.disconnect();
  }, [stopAnimation]);

  return (
    <div id="contact-section" className="flex flex-col p-5 h-screen">
      <div ref={contactTop} className='self-center size-0 invisible'>tae</div>
      <div ref={divRef} className="flex flex-col justify-start mt-auto mb-auto">
        <div ref={h1AndH2Ref}>
          <h1 id="Contact-LET" className="font-abril text-3xl sm:text-5xl text-primary">LET&apos;S</h1>
          <h1 id="Contact-CONNECT" className="font-abril text-3xl sm:text-5xl text-primary">CONNECT</h1>
          <h2 id="Contact-INTERESTED" className="font-abril text-2xl sm:text-3xl mb-4 text-quinary">I AM ALWAYS INTERESTED ABOUT</h2>
        </div>
        <div ref={contactMiddle} className='self-center size-1 invisible'>tae</div>
        <div ref={buttonsRef} className="flex flex-col">
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button`}>FRONT END DEVELOPMENT</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button`}>BACK END DEVELOPMENT</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button`}>SEO MARKETING</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button`}>WEB CONSULTANT</button>
          <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS} contact-button`}>BUSSINESSES AND PIZZAS</button>
        </div>
      </div>
      <div ref={contactBottom} className='self-center size-0 invisible'>tae</div>
    </div>
  );
}
