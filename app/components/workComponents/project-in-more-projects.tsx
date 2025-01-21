import anime from "animejs";
import Image from "next/image";
import CurvedArrow from "./curved-arrow";
import XSymbol from "./x-symbol";
import { useState } from "react";

export default function Component() {
    const [tags,] = useState(["TAE", "POOP", "IHE", "HALIMAW", "HALAH", "EDIWOW"]); 

    return (
        <div className="bg-transparent fixed z-10 top-24 bottom-20 right-[18.5rem] left-[18.5rem] rounded-md h-auto w-auto p-5 m-0">
            <div className="flex flex-row items-center justify-between bg-[#3f3f3f] rounded-t-xl"> 
                {/* <div className="size-10 p-2 cursor-pointer"><CurvedArrow /></div> */}
                <div><h1 className="font-abril text-xl text-primary">Embrace the Chaos</h1></div>
                <div className="size-10 p-2 cursor-pointer"><XSymbol /></div>
            </div>
            <div className="flex flex-col bg-tertiary rounded-b-xl shadow-xl h-full px-8 py-2">
                <div className="flex flex-row w-[100%] h-56">
                    <Image src="/gojo.jpg" alt="screenshot of the project" width={100} height={100} style={{width: "100%", height: "100%"}}/>
                    <Image src="/me.jpg" alt="screenshot of the project" width={100} height={100} style={{width: "100%", height: "100%"}}/>
                    <Image src="/gojo.jpg" alt="screenshot of the project" width={100} height={100} style={{width: "100%", height: "100%"}}/>
                </div>
                <p className="font-lato text-primary text-sm my-2">
                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 my-2">
                    {tags.map((tag) => {
                        return <span key={Math.random()} className="border-2 font-lato text-center text-sm my-1 shadow-sm mr-1 bg-fourtuary rounded-full px-2 py-1">{tag}</span>
                    })}
                </div>
            </div>
        </div>
    )
}