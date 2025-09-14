'use client'
import Navbar from "./navbar";
import Footer from "./footer";
import Introduction from "./introduction";
import Work from "./work";
import About from "./about";
import Contact from "./contact";
import { useRef, useState } from "react";
import Particles from './particles';

export default function Home() {
  const divRef = useRef<any>();
  const [showSections, setShowSections] = useState(false);

  return (
    <>
      <Navbar />
      <div ref={divRef} className="lg:px-60" style={{
        background: `linear-gradient(to right, #1A1A1A, #2C2C2C, #000000)`,
      }}>
        <div className="fixed z-0 top-0 left-0 w-full h-full pointer-events-none">
          <Particles
            particleColors={['#D3D3D3']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>    
        <div className="relative z-10">
          <Introduction onReady={() => setShowSections(true)} />
          {showSections && (
            <>
              <Work />
              <About />
              <Contact />
            </>
          )}
        </div>
      </div>
      {showSections && <Footer />}
    </>
  );
}
