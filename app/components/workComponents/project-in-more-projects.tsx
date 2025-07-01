// Enhanced ProjectInMoreProjects Component
import CurvedArrow from "./curved-arrow";
import XSymbol from "./x-symbol";
import { useRouter } from "next/navigation";

type ComponentTypes = {
  title: string;
  description: string;
  imagePath: string;
  linkPath: string;
  tags: Array<string>;
  slideOutMoreProjects: ({ MoreProjects, slideOutAll }: { MoreProjects: string[]; slideOutAll: boolean }) => void;
};

export default function Component({ title, description, imagePath, linkPath, tags, slideOutMoreProjects }: ComponentTypes) {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#f2f7f2] rounded-t-xl px-4 py-2 border-b border-gray-300">
        <CurvedArrow
          color="#000000"
          slideOutMoreProjects={() =>
            slideOutMoreProjects({
              MoreProjects: ["#fourth-project", "#fifth-project", "#sixth-project"],
              slideOutAll: false,
            })
          }
        />
        <h1 className="font-abril text-lg sm:text-xl text-center text-gray-800">{title}</h1>
        <XSymbol
          color="#000000"
          slideOutMoreProjects={() =>
            slideOutMoreProjects({
              MoreProjects: ["#more-projects", "#fourth-project", "#fifth-project", "#sixth-project"],
              slideOutAll: true,
            })
          }
        />
      </div>

      {/* Image */}
      <div
        className="w-full h-64 sm:h-80 lg:h-96 bg-no-repeat bg-[length:100%_100%] bg-center border-b border-gray-300"
        style={{ backgroundImage: `url('${imagePath}')` }}
      ></div>

      {/* Description */}
      <div className="px-4 py-2 sm:py-4">
        <p className="font-lato text-sm sm:text-base text-gray-700 leading-relaxed max-h-36 overflow-y-auto custom-scrollbar">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 px-4 py-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs sm:text-sm font-lato px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-300 shadow-sm text-center"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Visit Button */}
      <div className="px-4 py-4 flex justify-center">
        <button
          onClick={() => router.push(linkPath)}
          className="font-lato text-sm sm:text-base text-secondary bg-fourtuary border border-black px-6 py-2 rounded-md shadow-md hover:bg-tertiary hover:text-primary transition-all"
        >
          Visit
        </button>
      </div>
    </div>
  );
}
