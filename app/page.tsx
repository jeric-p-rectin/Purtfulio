'use client'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function Home() {

 // Original dynamic color states
 // let [bottomLineGrowColor, setBottomLineGrowColor] = useState("#FFFFFF");
 // let [sgvsColor, setSvgsColor] = useState("#FFFFFF");

 // Fixed colors
 const bottomLineGrowColor = "#FFFFFF";
 const sgvsColor = "#FFFFFF";

  interface Type {
    color: string;
    setColor: (el: string) => void;
  }
  
  const divRef = useRef<any>();

  const background = useRef<Type>({
    // Original dynamic color
    // color: "#f5f5f5",
    color: "#2C2C2C",
    setColor(el: string) {
      this.color = el; // Update the color property
    },
  });

  useEffect(() => {
    anime({
      targets: "#Navbar",
      translateY: ["-100%", 0],
      duration: 2000,
    })
  }, [])

  // Original animation function
  // const animateBackgroundColor = (backgroundColor: string) => {
  //   anime({
  //     targets: divRef.current,
  //     backgroundColor: backgroundColor,
  //     duration: 1000,
  //     easing: 'easeInOutQuad',
  //     update: (anim) => background.current.setColor(anim.animations[0].currentValue as string),
  //   });
  // };

  // Fixed color function
  // const animateBackgroundColor = () => {
  //   background.current.setColor("#2C2C2C");
  // };

  // Original animation function
  // const animateAllTextsColor = (toColor: string) => {
  //   anime({
  //     targets: ['#Developer', "#Full-Stack", "#Introduction-Paragraph", 
  //       "#navbar-Jeric", "#navbar-sections", 
  //       "#work-section-PROJECTS", "#Project-Name", ".Project-Description",
  //       "#Introduction-HELLO", "#Introduction-JERIC", ".Introduction-p",
  //       "#Contact-LET", "#Contact-CONNECT", "#Contact-INTERESTED",
  //     ],
  //     color: toColor,
  //     duration: 1000,
  //     easing: 'easeInOutQuad',
  //   });
  //   setBottomLineGrowColor(bottomLineGrowColor = toColor);
  //   setSvgsColor(sgvsColor = toColor);
  // }

  // Fixed color function
  // const animateAllTextsColor = () => {
  //   const elements = document.querySelectorAll('#Developer, #Full-Stack, #Introduction-Paragraph, #navbar-Jeric, #navbar-sections, #work-section-PROJECTS, #Project-Name, .Project-Description, #Introduction-HELLO, #Introduction-JERIC, .Introduction-p, #Contact-LET, #Contact-CONNECT, #Contact-INTERESTED');
  //   elements.forEach(element => {
  //     if (element instanceof HTMLElement) {
  //       element.style.color = "#FFFFFF";
  //     }
  //   });
  // }

  return (
    <>
      {/* Removed bottomLineGrowColor prop as color is now fixed */}
      <Navbar />
      <div ref={divRef} className="lg:px-60" style={{
        background: `linear-gradient(to right, #1A1A1A, #2C2C2C, #000000)`,
        // Original transition style
        // backgroundColor: background.current.color,
        // transition: 'background-color 1s ease',
      }}>
        {/* Removed color-related props as they are now fixed */}
        <Introduction />
        {/* Removed svgsColor and color-related props */}
        <Work />
        <About /> 
        <Contact /> 
      </div>
      <Footer />
    </>
  );
}
