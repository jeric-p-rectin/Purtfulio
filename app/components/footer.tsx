import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    function handleClick({urlPath}: {urlPath: string}) {
        return router.push(`${urlPath}`);
    };

    return (
        <div className="flex flex-col justify-center p-5 bg-[#1A1A1A] z-10">
            <h1 className="text-primary text-center">&copy; 2024 Jeric&apos;s Portfolio</h1>
            <div className="flex flex-row m-2 justify-center">
                <Image onClick={() => handleClick({urlPath: "https://www.facebook.com/share/1CUN9Puxnq/"})} src="/facebook.png" alt="instagram logo" width={60} height={60} className="px-3 py-2 cursor-pointer" />
                <Image onClick={() => handleClick({urlPath: "https://github.com/jeric-p-rectin/"})} src="/github.png" alt="linkedin logo" width={60} height={60} className="px-3 py-2 cursor-pointer" />
                <Image onClick={() => handleClick({urlPath: "https://www.linkedin.com/in/jeric-p-rectin/"})} src="/linkedin.png" alt="github logo" width={60} height={60} className="px-3 py-2 cursor-pointer" />
            </div>
        </div>
    )
}