'use client'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import { useRef } from "react";
import Particles from './components/particles';

export default function Home() {

  const divRef = useRef<any>();

  return (
    <>
      <Navbar />
      <div ref={divRef} className="lg:px-60" style={{
        background: `linear-gradient(to right, #1A1A1A, #2C2C2C, #000000)`,
      }}>
        <div className="fixed z-1 top-0 left-0 w-full h-full pointer-events-none">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>    
        <Introduction />
        <Work />
        <About /> 
        <Contact /> 
      </div>
      <Footer />
    </>
  );
}
