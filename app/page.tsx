'use client'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import Practice from "./components/workComponents/more-projects";
import Practice2 from "./components/workComponents/project-in-more-projects";
import Practice3 from "./components/workComponents/practice";

export default function Home() {

 let [bottomLineGrowColor, setBottomLineGrowColor] = useState("#FFFFFF");
 let [sgvsColor, setSvgsColor] = useState("#FFFFFF");

  interface Type {
    color: string;
    setColor: (el: string) => void;
  }
  
  const divRef = useRef<any>();

  const background = useRef<Type>({
    color: "#f5f5f5",
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

  // Function to animate the background color transition
  const animateBackgroundColor = (backgroundColor: string) => {
    anime({
      targets: divRef.current,
      backgroundColor: backgroundColor,
      duration: 1000, // Duration of the animation
      easing: 'easeInOutQuad', // Smooth easing
      update: (anim) => background.current.setColor(anim.animations[0].currentValue as string),
    });
  };

  const animateAllTextsColor = (toColor: string) => {
    anime({
      targets: ['#Developer', "#Full-Stack", "#Introduction-Paragraph", 
        "#navbar-Jeric", "#navbar-sections", 
        "#work-section-PROJECTS", "#Project-Name", "#Project-Description", // The svgs color in the work section change by state called "svgsColor" in the first lines of code
        "#Introduction-HELLO", "#Introduction-JERIC", ".Introduction-p",
        "#Contact-LET", "#Contact-CONNECT", "#Contact-INTERESTED"
      ],
      color: toColor,
      duration: 1000, // Duration of the animation
      easing: 'easeInOutQuad', // Smooth easing
    });
    setBottomLineGrowColor(bottomLineGrowColor = toColor);
    setSvgsColor(sgvsColor = toColor);
  }

  return (
    <>
      <Navbar bottomLineGrowColor={bottomLineGrowColor} />
      {/* <Practice /> */}
      {/* <Practice2 /> */}
      <div ref={divRef} className="lg:px-72" style={{
        backgroundColor: background.current.color, // Dynamic background color
        transition: 'background-color 1s ease', // Fallback transition
      }}>
        <Introduction changeBackground={() => animateBackgroundColor("#2C2C2C")} animateAllTextsColor={() => animateAllTextsColor("#FFFFFF")}/>
        <Work svgsColor={sgvsColor} changeBackground={() => animateBackgroundColor("#f5f5f5")} animateAllTextsColor={() => animateAllTextsColor("#2C2C2C")}/>
        <About changeBackground={() => animateBackgroundColor("#2C2C2C")} animateAllTextsColor={() => animateAllTextsColor("#FFFFFF")}/> 
        <Contact changeBackground={() => animateBackgroundColor("#f5f5f5")} animateAllTextsColor={() => animateAllTextsColor("#2C2C2C")}/> 
      </div>
      <Footer />
      {/* <Practice3 /> */}
    </>
  );
}
