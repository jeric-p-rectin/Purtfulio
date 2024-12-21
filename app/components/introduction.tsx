import anime from 'animejs';
import { useEffect } from 'react';

export default function Introduction() {
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
    }, [])

    return (
        <div id="introduction-section" className="flex flex-col h-screen bg-primary">
            <div className='flex flex-col m-auto'>
                <h2 id="Creative" className="font-abril text-quinary text-2xl text-left">CREATIVE</h2>
                <h1 id="Full-Stack" className="font-abril text-5xl">FULL-STACK</h1>
                <h1 id="Developer"className="font-abril text-5xl">DEVELOPER</h1>
                <p id='Introduction-Paragraph' className="font-lato text-base my-8 ml-1 indent-6">
                    I AM A DEVELOPER FROM PHILIPPINES. I HAVE 2+ YEARS OF EXPERIENCE IN DEVELOPING VARIOUS TYPES OF WEB APPLICATIONS. I LOVE NATURE, PIZZA AND ART.
                </p>
                <a id="Contact-Me" className="font-lato text-primary shadow-md border self-end text-center rounded-md w-36 p-2 m-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black" href={"#contact-section"}>CONTACT ME</a>
            </div>
        </div>
    )
}