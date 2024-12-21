import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Contact() {
    const buttonCSS = "font-lato text-primary shadow-md border rounded-md my-1 p-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black"

    const h1AndH2Ref = useRef(null);
    const buttonsRef = useRef(null);
    const taeRef1 = useRef<any>(null);
    const divRef = useRef(null);

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
    }, []);

    return (
        <div id="contact-section" className="flex flex-col p-5 h-screen">
            <div ref={taeRef1} className='invisible'>tae</div>
            <div ref={divRef} className="flex flex-col justify-start mt-auto mb-auto">
                <div ref={h1AndH2Ref}>
                    <h1 className="font-abril text-5xl">LET&apos;S</h1>
                    <h1 className="font-abril text-5xl">CONNECT</h1>
                    <h2 className="font-abril text-xl mb-4">I AM ALWAYS INTERESTED ABOUT</h2>
                </div>
                <div ref={buttonsRef} className="flex flex-col">
                    <button className={`${buttonCSS}`}>FRONT END DEVELOPMENT</button>
                    <button className={`${buttonCSS}`}>BACK END DEVELOPMENT</button>
                    <button className={`${buttonCSS}`}>SEO MARKETING</button>
                    <button className={`${buttonCSS}`}>WEB CONSULTANT</button>
                    <button className={`${buttonCSS}`}>BUSSINESSES AND PIZZAS</button>
                </div>
            </div>
        </div>
    )
}