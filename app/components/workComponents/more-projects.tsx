// Enhanced MoreProjects Component
import anime from "animejs";
import CurvedArrow from "./curved-arrow";
import XSymbol from "./x-symbol";
import { useRef } from "react";

type ComponentTypes = {
  showProject: ({ projectOrdinalNumber }: { projectOrdinalNumber: string }) => void;
  slideOutMoreProjects: ({ MoreProjects, slideOutAll }: { MoreProjects: string[]; slideOutAll: boolean }) => void;
};

export default function Component({ showProject, slideOutMoreProjects }: ComponentTypes) {
  const projectTitleRef1 = useRef<any>();
  const projectTitleRef2 = useRef<any>();
  const projectTitleRef3 = useRef<any>();

  function animateTitle({ title, onMouseEnterOrLeave }: { title: HTMLElement; onMouseEnterOrLeave?: string }) {
    function theAnimation({ opacityValue, completeOpacity }: { opacityValue: number[]; completeOpacity: string }) {
      anime({
        targets: title,
        opacity: [opacityValue[0], opacityValue[1]],
        easing: "easeInOutQuad",
        duration: 1000,
        complete: () => {
          title.style.opacity = completeOpacity;
        },
      });
    }

    if (onMouseEnterOrLeave === "mouseEnter") {
      theAnimation({ opacityValue: [1, 0], completeOpacity: "0" });
    } else if (onMouseEnterOrLeave === "mouseLeave") {
      theAnimation({ opacityValue: [0, 1], completeOpacity: "1" });
    }
  }

  const cardBaseClass = `
    flex items-center justify-center
    w-full h-full rounded-xl cursor-pointer shadow-lg
    bg-no-repeat bg-[length:100%_100%] bg-center
    transition-all duration-300 border border-white/20
    backdrop-blur-md bg-white/30
    hover:scale-105 hover:shadow-2xl hover:border-white/40
  `;

  return (
    <>
      <div className="flex flex-row items-center justify-between bg-[#3f3f3f] rounded-t-xl px-4 py-2">
        <CurvedArrow color="#F5F5F5" slideOutMoreProjects={() => slideOutMoreProjects({ MoreProjects: ["#more-projects"], slideOutAll: true })} />
        <h1 className="font-abril text-xl text-primary">Embrace the Chaos</h1>
        <XSymbol color="#F5F5F5" slideOutMoreProjects={() => slideOutMoreProjects({ MoreProjects: ["#more-projects"], slideOutAll: true })} />
      </div>

      <div className="flex flex-col bg-tertiary rounded-b-xl shadow-xl h-full px-4 sm:px-8 py-4">
        <div className="flex flex-row justify-evenly h-[18rem] sm:h-72 gap-4 pb-3">
          <div
            className={`bg-notepud-with-opacity hover:bg-notepud-no-opacity ${cardBaseClass}`}
            onClick={() => showProject({ projectOrdinalNumber: "1" })}
            onMouseEnter={() => animateTitle({ title: projectTitleRef1.current, onMouseEnterOrLeave: "mouseEnter" })}
            onMouseLeave={() => animateTitle({ title: projectTitleRef1.current, onMouseEnterOrLeave: "mouseLeave" })}
          >
            <h2 ref={projectTitleRef1} className="text-primary font-lato text-xl font-semibold transition-opacity duration-500">NOTEPUD</h2>
          </div>

          <div
            className={`bg-dictionary-with-opacity hover:bg-dictionary-no-opacity ${cardBaseClass}`}
            onClick={() => showProject({ projectOrdinalNumber: "2" })}
            onMouseEnter={() => animateTitle({ title: projectTitleRef2.current, onMouseEnterOrLeave: "mouseEnter" })}
            onMouseLeave={() => animateTitle({ title: projectTitleRef2.current, onMouseEnterOrLeave: "mouseLeave" })}
          >
            <h2 ref={projectTitleRef2} className="text-primary font-lato text-xl font-semibold transition-opacity duration-500">DICTIONARY</h2>
          </div>
        </div>

        <div className="h-full">
          <div
            className={`bg-bulaloi-manager-with-opacity hover:bg-bulaloi-manager-no-opacity ${cardBaseClass}`}
            onClick={() => showProject({ projectOrdinalNumber: "3" })}
            onMouseEnter={() => animateTitle({ title: projectTitleRef3.current, onMouseEnterOrLeave: "mouseEnter" })}
            onMouseLeave={() => animateTitle({ title: projectTitleRef3.current, onMouseEnterOrLeave: "mouseLeave" })}
          >
            <h2 ref={projectTitleRef3} className="text-primary font-lato text-xl font-semibold transition-opacity duration-500">BULALOI MANAGER</h2>
          </div>
        </div>
      </div>
    </>
  );
}
