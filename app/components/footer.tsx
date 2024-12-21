import Image from "next/image"

export default function Footer() {
    return (
        <div className="flex flex-col justify-center p-5 bg-secondary">
            <h1 className="text-primary text-center">&copy; 2024 Jeric&apos;s Portfolio</h1>
            <div className="flex flex-row m-2 justify-center">
                <Image src="/facebook.png" alt="instagram logo" width={60} height={60} className="px-3 py-2 cursor-pointer" />
                <Image src="/github.png" alt="linkedin logo" width={60} height={60} className="px-3 py-2 cursor-pointer" />
                <Image src="/linkedin.png" alt="github logo" width={60} height={60} className="px-3 py-2 cursor-pointer" />
            </div>
        </div>
    )
}