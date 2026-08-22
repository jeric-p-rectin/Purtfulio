'use client'
import Navbar from "./navbar";
import Footer from "./footer";
import Introduction from "./introduction";
import Work from "./work";
import About from "./about";
import Contact from "./contact";
import dynamic from "next/dynamic";

// The starfield is decorative and WebGL-backed — keep it out of the
// critical path so it never delays first paint.
const Particles = dynamic(() => import('./particles'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:px-60" style={{
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
          <Introduction />
          <Work />
          <About />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
