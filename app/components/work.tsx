import { useEffect, useRef, useState } from 'react';
import MoreProjects from './workComponents/more-projects';
import ProjectInMoreProjects from './workComponents/project-in-more-projects';
import Project from './workComponents/project';
import anime from 'animejs';
import ClickToVisit from './workComponents/click-to-visit';
import { useMediaQuery } from 'react-responsive';

// Interface defining the props for the Work component
interface SectionProp {
  svgsColor: string;
  changeBackground: () => void;
  animateAllTextsColor: () => void;
}

export default function Work({ svgsColor, changeBackground, animateAllTextsColor }: SectionProp) {
  // References for various DOM elements
  const h1AndClickToVisitRef = useRef(null);
  const buttonRef = useRef(null);
  const divRef = useRef(null);
  const workTop = useRef<any>(null);
  const workMiddle = useRef<any>(null);
  const workMiddle2 = useRef<any>(null);
  const workBottom = useRef<any>(null);

  // State variables for managing animation and UI
  let [stopAnimation, setStopAnimation] = useState(true);

  // State for showing the more-projects section
  let [showMoreProjects, setShowMoreProjects] = useState(false);
  const moreProjects = useRef<any>();

  // States for showing specific projects
  let [showFourthProject, setShowFourthProject] = useState<boolean>(false);
  let [showFifthProject, setShowFifthProject] = useState<boolean>(false);
  let [showSixthProject, setShowSixthProject] = useState<boolean>(false);
  const fourthProject = useRef<any>();
  const fifthProject = useRef<any>();
  const sixthProject = useRef<any>();

  // Function to control which additional project to show
  function showProject({ projectOrdinalNumber }: { projectOrdinalNumber: string }): void {
    console.log(projectOrdinalNumber);
    switch (projectOrdinalNumber) {
      case '1':
        setShowFourthProject((showFourthProject = true));
        break;
      case '2':
        setShowFifthProject((showFifthProject = true));
        break;
      case '3':
        setShowSixthProject((showSixthProject = true));
        break;
      default:
        break;
    }
  }

  // Media query to determine if the device is a phone or tablet
  const isPhoneOrTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  // Different styles for phone/tablet vs desktop
  const classForPhoneAndTablet =
    'bg-transparent fixed z-10 top-16 bottom-16 right-0 left-0 rounded-md h-auto w-auto p-5 m-0';
  const classForDesktop =
    'bg-transparent fixed z-10 top-16 bottom-16 right-72 left-72 rounded-md h-auto w-auto p-5 m-0';

  // Initial animation for section and observing visibility
  useEffect(() => {
    if (stopAnimation) {
      // Initial state of elements set to translate off-screen
      anime({
        targets: [h1AndClickToVisitRef.current, divRef.current, buttonRef.current],
        translateX: ['-2000px'],
        easing: 'easeOutQuad',
        duration: 0,
      });
    }

    // Intersection observer to trigger animations when section becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('intersecting');
          if (entry.isIntersecting) {
            if (stopAnimation) {
              anime({
                targets: [h1AndClickToVisitRef.current, divRef.current, buttonRef.current],
                translateX: ['-2000px', '0px'],
                easing: 'easeOutQuad',
                duration: 2000,
              });
              setStopAnimation((stopAnimation = false));
            }
            // Trigger background and text color animations
            changeBackground();
            animateAllTextsColor();
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the element is visible
    );

    observer.observe(workTop.current);
    observer.observe(workMiddle.current);
    observer.observe(workMiddle2.current);
    observer.observe(workBottom.current);
  });

  // Anime.js animation for the "More Projects" section
  useEffect(() => {
    if (showMoreProjects) {
      if (showMoreProjects) {
        anime({
          targets: '#more-projects',
          translateX: ['-100%', 0],
          easing: 'easeOutQuad',
          duration: 1000,
        });
        document.body.style.overflow = "hidden";
        document.body.style.pointerEvents = "none";
        try {
          if (moreProjects.current instanceof HTMLDivElement) {
            moreProjects.current.style.pointerEvents = "auto";
          }
        } catch {console.log("Your shit isn't working")}
      }
    } else { 
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    }
  }, [showMoreProjects]);

  // Anime.js animation for project slide-in
  useEffect(() => {
    anime({
      targets: ['#fourth-project', '#fifth-project', '#sixth-project'],
      translateX: ['-100%', 0],
      easing: 'easeOutQuad',
      duration: 1000,
    });
    fourthProject.current instanceof HTMLDivElement ? fourthProject.current.style.pointerEvents = "auto" : console.log("you fool")
    fifthProject.current instanceof HTMLDivElement? fifthProject.current.style.pointerEvents = "auto" : console.log("you fool")
    sixthProject.current instanceof HTMLDivElement? sixthProject.current.style.pointerEvents = "auto" : console.log("you fool")

  }, [showFourthProject, showFifthProject, showSixthProject]);

  // Function to slide in the "More Projects" section
  function slideInMoreProjects() {
    setShowMoreProjects((showMoreProjects = true));
  }

  // Function to slide out the "More Projects" section and optionally hide all projects
  function slideOutMoreProjects({
    MoreProjects,
    slideOutAll,
  }: {
    MoreProjects: string[];
    slideOutAll: boolean;
  }) {
    anime({
      targets: MoreProjects,
      translateX: ['-0%', '-100%'],
      easing: 'easeOutQuad',
      duration: 1000,
      complete: () => {
        if (slideOutAll) {
          setShowMoreProjects((showMoreProjects = false));
          setShowFourthProject((showFourthProject = false));
          setShowFifthProject((showFifthProject = false));
          setShowSixthProject((showSixthProject = false));
        } else {
          setShowFourthProject((showFourthProject = false));
          setShowFifthProject((showFifthProject = false));
          setShowSixthProject((showSixthProject = false));
        }
      },
    });
  }

  // Main JSX return block
  return (
    <div id="work-section" className="flex flex-col p-5 pt-24 h-auto">
      {/* Invisible element for intersection observation */}
      <div ref={workTop} className="self-center invisible">
        tae
      </div>

      {/* Header and "Click to Visit" component */}
      <div ref={h1AndClickToVisitRef} className="flex flex-row">
        <h1 id="work-section-PROJECTS" className="font-abril text-3xl">
          PROJECTS
        </h1>
        <div className="size-40">
          <ClickToVisit svgColor={svgsColor} />
        </div>
      </div>

      {/* Project list */}
      <div className="flex flex-col" ref={divRef}>
        <Project
          title="BULALOI APP"
          imagePath="/bulaloi-app.jpg"
          description="BULALOI is a web application that allows users to download modded and non-modded paid/free games and apps for free. It serves as an alternative app marketplace similar to the Play Store."
          tags={['JAVASCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'BOOTSTRAP', 'VERCEL', 'GIT', 'GITHUB', 'LIBRARIES']}
          linkPath="https://github.com/Boboe16/Bulaloi-App-Production/"
          svgColor={svgsColor}
        />

        <div ref={workMiddle} className='self-center invisible'>tae</div>

        <Project
          title="BULALOI MANAGER"
          imagePath="/bulaloi-manager.jpg"
          description="BULALOI MANAGER is a desktop application designed to manage the apps and games available in the BULALOI web app. It allows administrators to add, update, and delete applications with ease through a user-friendly interface."
          tags={['PYTHON', 'PYQT6', 'CSS', 'GIT', 'GITHUB', 'LIBRARIES']}
          linkPath="https://github.com/Boboe16/Bulaloi-Manager-Production/"
          svgColor={svgsColor}
        />

        <div ref={workMiddle2} className='self-center invisible'>tae</div>

        <Project
          title="PORTFOLIO"
          imagePath="/portfolio.jpg"
          description="Welcome to my portfolio web app! This project showcases my skills, projects, and experience in web development, with a sleek and interactive design."
          tags={['JAVASCRIPT', 'TYPESCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'TAILWIND', 'ANIMEJS', 'THREEJS', 'VERCEL', 'GIT', 'GITHUB', 'LIBRARIES']}
          linkPath="http://jeric-portfolio.vercel.app/"
          svgColor={svgsColor}
        />
        {/* Button to show more projects */}
        <button
          onClick={() => slideInMoreProjects()}
          ref={buttonRef}
          className="font-lato cursor-pointer text-primary shadow-md border self-center rounded-md w-36 p-2 m-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black"
        >
          SEE MORE
        </button>
      </div>

      {/* Conditional rendering for "More Projects" */}
      {showMoreProjects && (
        <div
        ref={moreProjects}
          id="more-projects"
          className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}
        >
          <MoreProjects slideOutMoreProjects={slideOutMoreProjects} showProject={showProject} />
        </div>
      )}

      {/* Conditional rendering for individual projects */}
      {showFourthProject && (
        <div ref={fourthProject} id="fourth-project" className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}>
          <ProjectInMoreProjects
            title="CALCULATOR"
            description="A simple and efficient calculator web app built with React, designed for basic arithmetic operations with a clean and responsive UI."
            imagePath="/calculator.jpg"
            linkPath="https://github.com/Boboe16/Calculator"
            tags={['JAVASCRIPT', 'HTML', 'CSS', 'REACT', 'BOOTSTRAP', 'NETLIFY', 'GIT', 'GITHUB']}
            slideOutMoreProjects={slideOutMoreProjects}
          />
        </div>
      )}
      {showFifthProject && (
        <div ref={fifthProject} id="fifth-project" className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}>
          <ProjectInMoreProjects
            title="DICTIONARY"
            description="A lightweight and efficient browser extension that provides instant word definitions and translations. Perfect for students, researchers, and language learners."
            imagePath="/bulaloi-dictionary.jpg"
            linkPath="https://www.facebook.com/"
            tags={['JAVASCRIPT', 'HTML', 'CSS', 'GIT', 'GITHUB']}
            slideOutMoreProjects={slideOutMoreProjects}
          />
        </div>
      )}
      {showSixthProject && (
        <div ref={sixthProject} id="sixth-project" className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}>
          <ProjectInMoreProjects
            title="NOTEPUD"
            description="Notepud is a simple and efficient web application for taking notes and managing tasks. It helps users stay organized with an intuitive interface and essential features for productivity."
            imagePath="/notepud.jpg"
            linkPath="https://www.instagram.com/"
            tags={['JAVASCRIPT', 'HTML', 'CSS', 'REACT', 'VERCEL', 'GIT', 'GITHUB']}
            slideOutMoreProjects={slideOutMoreProjects}
          />
        </div>
      )}

      {/* Invisible element for intersection observation */}
      <div ref={workBottom} className="self-center invisible">
        tae
      </div>
    </div>
  );
}