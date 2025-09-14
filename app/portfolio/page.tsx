'use client'
import MainComponent from "../components/main-component";
import { NextSeo } from "next-seo";

export default function Portfolio() {
  return (
    <>
      <NextSeo
        title="Jeric's Portfolio — Full-stack Developer"
        description="Jeric is a full-stack developer who brings ideas to life with powerful digital solutions. From sleek portfolios to business platforms, he builds websites that are fast, scalable, and designed to drive growth."
        canonical="https://jericrectin.com"
        openGraph={{
          url: "https://jericrectin.com",
          title: "Jeric's Portfolio",
          description:
            "Jeric is a full-stack developer who brings ideas to life with powerful digital solutions. From sleek portfolios to business platforms, he builds websites that are fast, scalable, and designed to drive growth.",
          site_name: "Jeric's Portfolio",
          images: [
            {
              url: "/portfolio.jpg",
              width: 1200,
              height: 630,
              alt: "Jeric's Portfolio logo",
              type: "image/png",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Jeric, portfolio, web developer, Next.js, React, Tailwind CSS, Three.js, full-stack, Filipino developer",
          },
          {
            name: "author",
            content: "Jeric",
          },
        ]}
      />
      <MainComponent />
    </>
  );
}
