import { useEffect, useRef } from "react";

const Component1 = () => <div className="p-4 bg-blue-200">Component 1</div>;
const Component2 = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("you're clicking on the wrong screen");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="p-4 bg-red-200">
      {children}
    </div>
  );
};

const Component3 = () => <div className="p-4 bg-green-200">Component 3</div>;

export default function App() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Component1 />
      <Component2>
        Click inside me, nothing happens!
      </Component2>
      <Component3 />
    </div>
  );
}
