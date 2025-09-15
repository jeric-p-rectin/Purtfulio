import MainComponent from "./components/main-component";

export const metadata = {
  title: "Jeric's Portfolio — Full-stack Developer",
  description: "Jeric is a full-stack developer who brings ideas to life with powerful digital solutions. From sleek portfolios to business platforms, he builds websites that are fast, scalable, and designed to drive growth.",
  openGraph: {
    url: "https://jericrectin.com",
    title: "Jeric's Portfolio",
    description: "Jeric is a full-stack developer who brings ideas to life with powerful digital solutions.",
    siteName: "Jeric's Portfolio",
    images: [
      {
        url: "https://jericrectin.com/logo.png",
        width: 300,
        height: 300,
        alt: "Jeric's Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  keywords: ["Jeric","portfolio","web developer","Next.js","React","Tailwind CSS","Three.js","full-stack","Filipino developer"],
  authors: [{ name: "Jeric" }],
  alternates: { canonical: "https://jericrectin.com" },
};

export default function Portfolio() {
  return (
    <MainComponent />
  );
}
