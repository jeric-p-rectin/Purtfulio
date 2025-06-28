import Image from "next/image";
import CurvedArrow from "./curved-arrow";
import XSymbol from "./x-symbol";
import { useRouter } from "next/navigation";

type ComponentTypes = {
    title: string;
    description: string;
    imagePath: string;
    linkPath: string;
    tags: Array<string>;
    slideOutMoreProjects: ({MoreProjects, slideOutAll}: {MoreProjects: string[], slideOutAll: boolean}) => void;
}

export default function Component({title, description, imagePath, linkPath, tags, slideOutMoreProjects }: ComponentTypes) { 
    const router = useRouter();
    const backgroundImage = `url('${imagePath}')`;

    return (
        <>
            <div className="flex flex-row items-center justify-between bg-[#f2f7f2] rounded-t-xl"> 
                <CurvedArrow color="#000000" slideOutMoreProjects={() => slideOutMoreProjects({MoreProjects: ["#fourth-project", "#fifth-project", "#sixth-project"], slideOutAll: false})}/>
                <div><h1 className="font-abril text-xl">{title}</h1></div>
                <XSymbol color="#000000" slideOutMoreProjects={() => slideOutMoreProjects({MoreProjects: ["#more-projects" ,"#fourth-project", "#fifth-project", "#sixth-project"], slideOutAll: true})}/>
            </div>
            <div className="flex flex-col bg-[#cacaca] rounded-b-xl shadow-xl h-full px-8 py-2">
                <div 
                    className="w-full h-96 shadow-md border-secondary rounded-md bg-no-repeat bg-[length:100%_100%]"
                    style={{ backgroundImage: backgroundImage }}
                ></div>
                <div className="h-20 white-scrollbar overflow-auto my-3 lg:my-6 lg:h-fit custom:overflow-visible">
                    <p className="font-lato text-[#000000] text-[10px] lg:text-sm">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 mb-5">
                    {tags.map((tag) => {
                        return <span key={Math.random()} className="border-2 font-lato text-center text-xs my-1 shadow-sm mr-1 bg-[#f2eeee] rounded-full px-2 py-1">{tag}</span>
                    })}
                </div>
                <a id="Project-In-More-Project-Visit" onClick={() => router.push(`${linkPath}`)} className="font-lato text-secondary self-center text-center cursor-pointer shadow-md border rounded-md my-0 w-36 p-2 bg-fourtuary hover:bg-tertiary hover:text-primary hover:transition border-black">Visit</a>
            </div>
        </>
    )
}