import anime from "animejs";
import CurvedArrow from "./curved-arrow";
import XSymbol from "./x-symbol";
import { useRef } from "react";

export default function Component() {
    type AnimeTitleType = {
        title: HTMLElement;
        onMouseEnterOrLeave?: string; // Optional property
    };
    
    function animateTitle({title, onMouseEnterOrLeave}: AnimeTitleType) {
        function theAnimation({opacityValue, completeOpacity}: {opacityValue: number[] ,completeOpacity: string}) {
            anime({
                targets: title,
                opacity: [opacityValue[0], opacityValue[1]],
                backgroound: "#FFFFFF",
                easing: 'easeInOutQuad',
                duration: 1000,
                complete: () => {
                    // Ensure the final opacity stays applied
                    title.style.opacity = completeOpacity;
                },
            })
        }

        if (onMouseEnterOrLeave === "mouseEnter") {
            theAnimation({opacityValue: [1, 0], completeOpacity: "0"});
        } else if (onMouseEnterOrLeave === "mouseLeave") {
            theAnimation({opacityValue: [0, 1], completeOpacity: "1"});
        }

        console.log("working");
    }

    const projectTitleRef1 = useRef<any>();
    const projectTitleRef3 = useRef<any>();
    const projectTitleRef2 = useRef<any>();

    const classOfMoreProjects = "flex items-center justify-center bg-slate-300 w-full h-full rounded-xl cursor-pointer shadow-xl bg-no-repeat bg-[length:100%_100%] bg-with-opacity hover:bg-no-opacity";
             // when the "more projects" is clicked, the offset will be blackish and when its clicked the cards will slide out
    return ( // use responsive-react for fixed parent component positions
        <div className="bg-white fixed z-10 top-20 bottom-20 right-72 left-72 rounded-md h-auto w-auto p-5 m-0">
            <div className="flex flex-row items-center justify-between bg-[#3f3f3f] rounded-t-xl"> 
                {/* <div className="size-10 p-2 cursor-pointer"><CurvedArrow /></div> */}
                <div><h1 className="font-abril text-xl text-primary">Embrace the Chaos</h1></div>
                <div className="size-10 p-2 cursor-pointer"><XSymbol /> </div>
            </div>
            <div className="flex flex-col bg-tertiary rounded-b-xl shadow-xl h-full px-8 py-2">
                <div className="flex flex-row justify-evenly h-72 pb-3">
                    <div className={`project-1 ${classOfMoreProjects} mr-2`} 
                    onMouseEnter={() => animateTitle({title: projectTitleRef1.current, onMouseEnterOrLeave: "mouseEnter"})}
                    onMouseLeave={() => animateTitle({title: projectTitleRef1.current, onMouseEnterOrLeave: "mouseLeave"})}
                        >
                        <h2 ref={projectTitleRef1} className="project-title-1 text-primary font-lato">TITLE</h2>
                    </div>
                    <div className={`project-2 ${classOfMoreProjects} ml-2`} 
                    onMouseEnter={() => animateTitle({title: projectTitleRef2.current, onMouseEnterOrLeave: "mouseEnter"})}
                    onMouseLeave={() => animateTitle({title: projectTitleRef2.current, onMouseEnterOrLeave: "mouseLeave"})}
                    >
                        <h2 ref={projectTitleRef2} className="project-title-2 text-primary font-lato">TITLE</h2>
                    </div>
                </div>
                <div className="h-full">
                    <div className={`project-3 ${classOfMoreProjects}`} 
                    onMouseEnter={() => animateTitle({title: projectTitleRef3.current, onMouseEnterOrLeave: "mouseEnter"})}
                    onMouseLeave={() => animateTitle({title: projectTitleRef3.current, onMouseEnterOrLeave: "mouseLeave"})}
                    >
                        <h2 ref={projectTitleRef3} className="project-title-3 text-primary group-hover: font-lato">TITLE</h2>
                    </div>

                </div>
            </div>
            
        </div>
    );
}