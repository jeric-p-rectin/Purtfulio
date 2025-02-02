import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BlackArrow from "./black-arrow";
import anime from "animejs";

interface propsValue {
    title: string,
    description: string,
    imagePath: string,
    tags: Array<string>,
    linkPath: string,
    svgColor?: string,
}

export default function Component({title, imagePath, description, tags, linkPath, svgColor}: propsValue) {
    const router = useRouter();
    const [state,] = useState(tags);
    // const [arrowStroke, setArrowStroke] = useState<string>(svgColor as string);

    const ArrowId = title.replace(/ /g, "-");
    const backgroundImage = `url('${imagePath}')`;

    function animateArrow({translateY}: {translateY: number}) {
        anime({
            targets: `#${ArrowId}`,
            translateY: translateY,
            duration: 300,
            easing: "easeInOutQuad"
        })
        // setArrowStroke("gray");
    }

    return (
        <div className="my-4">
            <div className="group flex flex-row w-fit cursor-pointer" onClick={() => router.push(`${linkPath}`)} onMouseEnter={() => animateArrow({ translateY: -10 })} onMouseLeave={() => {animateArrow({ translateY: 0 })}}>
                <h2 id="-Name" className="group-hover:text-quinary transition font-lato font-medium text-xl my-2">{title}</h2>
                <div id={ArrowId} className="relative top-3 h-fit w-fit"><BlackArrow arrowStroke={svgColor as string} /></div>
            </div>
            <div 
                className="w-full h-96 shadow-md border-secondary rounded-md bg-no-repeat bg-[length:100%_100%]"
                style={{ backgroundImage: backgroundImage }}
            >
            </div>
            <p className="-Description font-lato text-sm my-2">{description}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 my-2">
                {state.map((tag) => {
                    return <span key={Math.random()} className="border-2 text-center text-sm my-1 shadow-sm mr-1 bg-fourtuary rounded-full px-2 py-1">{tag}</span>
                })}
            </div>

        </div>
    )
}