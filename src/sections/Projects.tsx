import burmeseFoodImage from "@/assets/images/BurmeseFoodEcommerceImage.png";
import gameHubLandingPage from "@/assets/images/GameHubImage.png";
import musicPlayerImage from "@/assets/images/MusicPlayerImage.png";
import Image from "next/image";
import TechStack from "@/assets/icons/tech-stack.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    title: "Burmese Food Ecommerce",
    link: "https://burmese-food.onrender.com/",
    technologies: [
      {
        title:
          "Built an e-commerce platform with React, Node.js, MongoDB and Redis.",
      },
      {
        title:
          "Integrated Stripe payments and responsive UI using Tailwind CSS",
      },
      {
        title:
          "Created an admin dashboard with sales analytics and management.",
      },
    ],
    image: burmeseFoodImage,
  },
  {
    title: "Game Libray Hub",
    link: "https://game-hub-bay-two.vercel.app/",
    technologies: [
      {
        title:
          "Built features like game search, platforms, and popular titles display",
      },
      {
        title:
          "Used HTML, CSS, JavaScript, and React.js for front-end development",
      },
      {
        title:
          "Integrated library APIs and ensured responsive design for all devices",
      },
    ],
    image: gameHubLandingPage,
  },
  {
    title: "Music Player",
    link: "https://aungpyaesone1000.github.io/Music-Player/",
    technologies: [
      {
        title:
          "Built a music player with HTML, CSS, and JavaScript for track navigation",
      },
      {
        title:
          "Added play, pause, and skip features for seamless functionality",
      },
      {
        title:
          "Used JavaScript for dynamic updates and real-time track progress",
      },
    ],
    image: musicPlayerImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Hands on Projects"
          description="See my latest projects and learn how I can help you."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-semibold text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <TechStack className="size-5 md:size-6 lg:size-7" />
                        <span>{tech.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                  inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUp className="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
