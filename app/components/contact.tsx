import { useEffect, useRef } from "react";
import anime from "animejs";
import { useRouter } from 'next/navigation'

interface SectionProp {
    changeBackground: () => void; // Reference callback for the section
    animateAllTextsColor: () => void;
}

export default function Contact({changeBackground, animateAllTextsColor} : SectionProp) {
    const buttonCSS = "font-lato shadow-md border rounded-md my-1 p-2 bg-fourtuary hover:bg-tertiary text-secondary hover:text-primary hover:transition border-black"
    const router = useRouter()

    const h1AndH2Ref = useRef(null);
    const buttonsRef = useRef(null);
    const contactTop = useRef<any>(null);
    const contactMiddle = useRef<any>(null);
    const contactBottom = useRef<any>(null);
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
                    changeBackground();
                    animateAllTextsColor();
                }
                });
            },
            { threshold: 0.3 } // Triggers when any part of the target is visible in the viewport
            );

        observer.observe(contactTop.current);
        observer.observe(contactMiddle.current);
        observer.observe(contactBottom.current);
    }, []);

    return (
        <div id="contact-section" className="flex flex-col p-5 h-screen">
            <div ref={contactTop} className='self-center size-0 invisible'>tae</div>
            <div ref={divRef} className="flex flex-col justify-start mt-auto mb-auto">
                <div ref={h1AndH2Ref}>
                    <h1 id="Contact-LET" className="font-abril text-5xl">LET&apos;S</h1>
                    <h1 id="Contact-CONNECT" className="font-abril text-5xl">CONNECT</h1>
                    <h2 id="Contact-INTERESTED" className="font-abril text-xl mb-4">I AM ALWAYS INTERESTED ABOUT</h2>
                </div>
                <div ref={contactMiddle} className='self-center size-1 invisible'>tae</div>
                <div ref={buttonsRef} className="flex flex-col">
                    <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS}`}>FRONT END DEVELOPMENT</button>
                    <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS}`}>BACK END DEVELOPMENT</button>
                    <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS}`}>SEO MARKETING</button>
                    <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS}`}>WEB CONSULTANT</button>
                    <button onClick={() => router.push("mailto:jerixmodz@gmail.com")} className={`${buttonCSS}`}>BUSSINESSES AND PIZZAS</button>
                </div>
            </div>
            <div ref={contactBottom} className='self-center size-0 invisible'>tae</div>
        </div>
    )
}
