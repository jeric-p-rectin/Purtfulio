import { useEffect, useRef, useState} from 'react';
import Project from './workComponents/project';
import anime from 'animejs';
import ClickMoreToVisit from './workComponents/click-to-visit';

interface SectionProp {
  svgsColor: string;
  changeBackground: () => void; // Reference callback for the section
  animateAllTextsColor: () => void;
}

export default function Work({svgsColor, changeBackground, animateAllTextsColor} : SectionProp) {
    const h1AndClickToVisitRef = useRef(null);
    const buttonRef = useRef(null);
    const divRef = useRef(null);
    const workTop = useRef<any>(null);
    const workBottom = useRef<any>(null);

    // let [state, setState] = useState(false);

    useEffect(() => {
        anime({
            targets: [h1AndClickToVisitRef.current, divRef.current, buttonRef.current],
            translateX: ['-2000px'],
            easing: 'easeOutQuad',
            duration: 0,
        });

        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                console.log("intersecting")
                if (entry.isIntersecting) {
                  anime({
                    targets: [h1AndClickToVisitRef.current, divRef.current, buttonRef.current],
                    translateX: ["0px"],
                    easing: 'easeOutQuad',
                    duration: 2000,
                    // delay: anime.stagger(1000),
                  });
                  changeBackground();
                  animateAllTextsColor();
                  // observer.unobserve(entry.target); // Stop observing after the animation
                }
                // console.log("isIntersecting")
              });
            },
            { threshold: 0.3 } // Triggers when any part of the target is visible in the viewport
          );

          observer.observe(workTop.current);
          observer.observe(workBottom.current);
          // setState(state = true)
    }, [])

    return (
        <div id="work-section" className="flex flex-col p-5 pt-24 h-auto">
            <div ref={workTop} className='self-center invisible'>tae</div>
            <div ref={h1AndClickToVisitRef} className='flex flex-row'>
              <h1 id='work-section-PROJECTS' className='font-abril text-3xl'>PROJECTS</h1>
              <div className='size-40'>
                <div>
                  <ClickMoreToVisit svgColor={svgsColor} />
                </div>  
              </div> 
            </div>
            
            <div className="flex flex-col" ref={divRef}>
                <Project 
                    projectName='BULALOI APP' 
                    projectImagePath='/gojo.jpg'
                    projectDescription='LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.' 
                    projectTags={['JAVASCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'BOOTSTRAP', 'VERCEL']}
                    svgColor={svgsColor}
                />
                <Project 
                    projectName='BULALOI MANAGER' 
                    projectImagePath='/gojo.jpg'
                    projectDescription='LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.' 
                    projectTags={['PYTHON', 'PYQT6', 'CSS', 'GIT', 'LIBRARIES']}
                />
                <Project 
                    projectName='PROJECT 3' 
                    projectImagePath='/gojo.jpg'
                    projectDescription='LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.' 
                    projectTags={['PYTHON', 'PYQT6', 'CSS', 'GIT', 'LIBRARIES']}
                />
                <button ref={buttonRef} className='font-lato text-primary shadow-md border self-center rounded-md w-36 p-2 m-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black'>SEE MORE</button>
            </div>

            <div ref={workBottom} className='self-center invisible'>tae</div>
        </div>
    )
}