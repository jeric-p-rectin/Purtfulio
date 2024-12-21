'use client'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import { useEffect } from "react";
import anime from "animejs";

export default function Home() {

  useEffect(() => {
    anime({
      targets: "#Navbar",
      translateY: ["-100%", 0],
      duration: 2000,
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="bg-primary lg:mx-72">
        <Introduction />
        <Work /> 
        <About /> 
        <Contact /> 
      </div>
      <Footer />
    </>
  );
}
