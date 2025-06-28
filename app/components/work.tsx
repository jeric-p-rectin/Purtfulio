import { useEffect, useRef, useState } from 'react';
import MoreProjects from './workComponents/more-projects';
import ProjectInMoreProjects from './workComponents/project-in-more-projects';
import Project from './workComponents/project';
import anime from 'animejs';
import ClickToVisit from './workComponents/click-to-visit';
import { useMediaQuery } from 'react-responsive';

export default function Work() {
  const h1AndClickToVisitRef = useRef(null);
  const buttonRef = useRef(null);
  const divRef = useRef(null);
  const workTop = useRef<any>(null);
  const workMiddle = useRef<any>(null);
  const workMiddle2 = useRef<any>(null);
  const workBottom = useRef<any>(null);

  const [stopAnimation, setStopAnimation] = useState(true);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const moreProjects = useRef<any>();

  const [showFourthProject, setShowFourthProject] = useState(false);
  const [showFifthProject, setShowFifthProject] = useState(false);
  const [showSixthProject, setShowSixthProject] = useState(false);
  const fourthProject = useRef<any>();
  const fifthProject = useRef<any>();
  const sixthProject = useRef<any>();

  const isPhoneOrTablet = useMediaQuery({ query: '(max-width: 1023px)' });

  const classForPhoneAndTablet =
    'bg-transparent fixed z-10 top-16 bottom-16 right-0 left-0 rounded-md h-auto w-auto p-5 m-0';
  const classForDesktop =
    'bg-transparent fixed z-10 top-16 bottom-16 right-72 left-72 rounded-md h-auto w-auto p-5 m-0';

  function showProject({ projectOrdinalNumber }: { projectOrdinalNumber: string }) {
    switch (projectOrdinalNumber) {
      case '1':
        setShowFourthProject(true);
        break;
      case '2':
        setShowFifthProject(true);
        break;
      case '3':
        setShowSixthProject(true);
        break;
      default:
        break;
    }
  }

  function animateWorkSection() {
    anime.timeline({ easing: 'easeOutQuad', duration: 800 })
      .add({
        targets: h1AndClickToVisitRef.current,
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
      })
      .add({
        targets: divRef.current,
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
      }, '-=400')
      .add({
        targets: buttonRef.current,
        scale: [0.8, 1],
        opacity: [0, 1],
        rotate: ['-5deg', '0deg'],
        easing: 'easeOutBack',
      }, '-=500');
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && stopAnimation) {
            animateWorkSection();
            setStopAnimation(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (workTop.current) observer.observe(workTop.current);
    if (workMiddle.current) observer.observe(workMiddle.current);
    if (workMiddle2.current) observer.observe(workMiddle2.current);
    if (workBottom.current) observer.observe(workBottom.current);

    return () => observer.disconnect();
  }, [stopAnimation]);

  useEffect(() => {
    if (showMoreProjects) {
      anime({
        targets: '#more-projects',
        translateX: ['100%', '0%'],
        easing: 'easeOutExpo',
        duration: 800,
      });
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
      if (moreProjects.current) moreProjects.current.style.pointerEvents = 'auto';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
    }
  }, [showMoreProjects]);

  useEffect(() => {
    anime({
      targets: ['#fourth-project', '#fifth-project', '#sixth-project'],
      translateX: ['20%', '0%'],
      opacity: [0, 1],
      easing: 'easeOutQuad',
      duration: 800,
    });

    [fourthProject, fifthProject, sixthProject].forEach((ref) => {
      if (ref.current) ref.current.style.pointerEvents = 'auto';
    });
  }, [showFourthProject, showFifthProject, showSixthProject]);

  function slideInMoreProjects() {
    setShowMoreProjects(true);
  }

  function slideOutMoreProjects({ MoreProjects, slideOutAll }: { MoreProjects: string[]; slideOutAll: boolean }) {
    anime({
      targets: MoreProjects,
      translateX: ['0%', '-20%'],
      opacity: [1, 0],
      easing: 'easeOutQuad',
      duration: 800,
      complete: () => {
        if (slideOutAll) {
          setShowMoreProjects(false);
          setShowFourthProject(false);
          setShowFifthProject(false);
          setShowSixthProject(false);
        } else {
          setShowFourthProject(false);
          setShowFifthProject(false);
          setShowSixthProject(false);
        }
      },
    });
  }

  return (
    <div id="work-section" className="flex flex-col p-5 pt-24 h-auto">
      <div ref={workTop} className="self-center size-0 invisible">tae</div>

      <div ref={h1AndClickToVisitRef} className="flex flex-row">
        <h1 id="work-section-PROJECTS" className="font-abril text-3xl text-primary">PROJECTS</h1>
        <div className="size-40"><ClickToVisit /></div>
      </div>

      <div className="flex flex-col" ref={divRef}>
        <Project
          title="THRIVEPH"
          imagePaths={["/thriveph1.jpg", "/thriveph2.jpg", "/thriveph3.jpg"]}
          description="THRIVEPH is a digital platform that empowers Filipino artisans and small businesses by providing a beautiful, accessible space to showcase their products and grow online."
          tags={['JAVASCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'BOOTSTRAP', 'VERCEL', 'GIT', 'GITHUB', 'LIBRARIES']}
          linkPath="https://thriveph.vercel.app/"
        />

        <div ref={workMiddle} className='self-center size-0 invisible'>tae</div>

        <Project
          title="MARIKENYO"
          imagePaths={["/marikenyo1.jpg", "/marikenyo2.jpg"]}
          description="MARIKENYO is a digital gateway to the Marikina Shoe Festival. Celebrating the city’s legacy of world-class shoemaking. Discover local craftsmen, explore unique designs, and experience the rich heritage that makes Marikina the Shoe Capital of the Philippines."
          tags={['JAVASCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'BOOTSTRAP', 'VERCEL', 'GIT', 'GITHUB', 'LIBRARIES']}
          linkPath="https://marikenyo.vercel.app/"
        />

        <div ref={workMiddle2} className='self-center size-0 invisible'>tae</div>

        <Project
          title="BULALOI"
          imagePaths={["/bulaloi-app.jpg"]}
          description="BULALOI is a web application that allows users to download modded and non-modded paid/free games and apps for free. It serves as an alternative app marketplace similar to the Play Store."
          tags={['JAVASCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'BOOTSTRAP', 'VERCEL', 'GIT', 'GITHUB', 'LIBRARIES']}
          linkPath="https://github.com/Boboe16/Bulaloi-App-Production/"
        />

        <button
          onClick={slideInMoreProjects}
          ref={buttonRef}
          className="font-lato text-secondary text-center text-base shadow-md border self-center rounded-md w-32 p-2 m-2 bg-fourtuary hover:bg-tertiary hover:text-primary hover:transition border-black"
        >
          SEE MORE
        </button>
      </div>

      {showMoreProjects && (
        <div
          ref={moreProjects}
          id="more-projects"
          className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}
        >
          <MoreProjects slideOutMoreProjects={slideOutMoreProjects} showProject={showProject} />
        </div>
      )}

      {showFourthProject && (
        <div ref={fourthProject} id="fourth-project" className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}>
          <ProjectInMoreProjects
            title="NOTEPUD"
            description="Notepud is a simple and efficient web application for taking notes and managing tasks. It helps users stay organized with an intuitive interface and essential features for productivity."
            imagePath="/notepud.jpg"
            linkPath="https://github.com/jeric-p-rectin/React_App-Notes-with-To-dos"
            tags={['JAVASCRIPT', 'HTML', 'CSS', 'REACT', 'VERCEL', 'GIT', 'GITHUB']}
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
            linkPath="https://github.com/Boboe16/Dictionary-Browser-Extension"
            tags={['JAVASCRIPT', 'HTML', 'CSS', 'GIT', 'GITHUB']}
            slideOutMoreProjects={slideOutMoreProjects}
          />
        </div>
      )}

      {showSixthProject && (
        <div ref={sixthProject} id="sixth-project" className={isPhoneOrTablet ? classForPhoneAndTablet : classForDesktop}>
          <ProjectInMoreProjects
            title="BULALOI MANAGER"
            description="BULALOI MANAGER is a desktop application designed to manage the apps and games available in the BULALOI web app. It allows administrators to add, update, and delete applications with ease through a user-friendly interface."
            imagePath="/bulaloi-manager.jpg"
            linkPath="https://github.com/jeric-p-rectin/Bulaloi-Manager-Production"
            tags={["PYTHON", "PYQT6", "CSS", "GIT", "GITHUB", "LIBRARIES"]}
            slideOutMoreProjects={slideOutMoreProjects}
          />
        </div>
      )}

      <div ref={workBottom} className="self-center size-0 invisible">tae</div>
    </div>
  );
}
