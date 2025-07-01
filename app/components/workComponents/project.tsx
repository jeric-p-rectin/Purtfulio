import { useState } from "react";
import { useRouter } from "next/navigation";
import BlackArrow from "./black-arrow";
import anime from "animejs";

interface propsValue {
  title: string;
  description: string;
  imagePaths: string[];
  tags: Array<string>;
  linkPath: string;
}

export default function Component({
  title,
  imagePaths,
  description,
  tags,
  linkPath,
}: propsValue) {
  const router = useRouter();
  const [state] = useState(tags);
  const [arrowStroke, setArrowStroke] = useState<string>("#FFFFFF");

  const ArrowId = title.replace(/ /g, "-");
  const backgroundImages = imagePaths.map((imagePath) => `url('${imagePath}')`);

  function animateArrow({ translateY }: { translateY: number }) {
    anime({
      targets: `#${ArrowId}`,
      translateY,
      duration: 300,
      easing: "easeInOutQuad",
    });
    if (arrowStroke === "#FFFFFF") setArrowStroke("#8B8B8B");
    else setArrowStroke("#FFFFFF")
  }

  return (
    <div className="my-8 transition-all duration-300">
      {/* Title & Arrow */}
      <div
        className="group flex items-center w-fit cursor-pointer gap-2"
        onClick={() => router.push(`${linkPath}`)}
        onMouseEnter={() => animateArrow({ translateY: -8 })}
        onMouseLeave={() => {
          animateArrow({ translateY: 0 })
        }}
      >
        <h2 className="group-hover:text-quinary transition-all font-lato font-semibold text-xl text-primary">
          {title}
        </h2>
        <div id={ArrowId} className="relative bottom-[4px]">
          <BlackArrow arrowStroke={arrowStroke as string} />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex w-full h-52 sm:h-96 rounded-2xl overflow-hidden mt-4 border border-gray-200 shadow-lg">
        {backgroundImages.map((backgroundImage, index) => {
          const style = { backgroundImage };
          const baseClasses =
            "bg-no-repeat bg-[length:100%_100%] transition-transform duration-300 hover:scale-105";

          if (backgroundImages.length === 2) {
            return (
              <div
                key={index}
                className={`${baseClasses} ${
                  index === 0 ? "w-[30%]" : "w-[70%]"
                }`}
                style={style}
              />
            );
          }

          return (
            <div
              key={index}
              className={`${baseClasses} w-full`}
              style={style}
            />
          );
        })}
      </div>

      {/* Description */}
      <p className="mt-4 text-primary text-sm sm:text-base leading-relaxed font-lato">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {state.map((tag, i) => (
          <span
            key={i}
            className="bg-fourtuary text-secondary text-xs sm:text-sm font-medium px-3 py-1 rounded-2xl border border-secondary shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
