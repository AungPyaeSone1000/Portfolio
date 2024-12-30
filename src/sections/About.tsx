import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import LeoImage from "@/assets/images/LeoImage.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/Map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Next.js",
    icon: NextjsIcon,
  },
  {
    title: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    title: "Node.js",
    icon: NodejsIcon,
  },
  {
    title: "MongoDB",
    icon: MongoDbIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "3%",
  },
  {
    title: "Soccer",
    emoji: "⚽️",
    left: "9%",
    top: "35%",
  },
  {
    title: "Swimming",
    emoji: "🏊",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A glimpse of who I am."
          description="Learn more about who I am, what I do, and why I do it."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My son, Leo"
              description="My furry son, who is there for me through sticks and stones"
            />
            <div className="w-40 mx-auto mt-2 md:mt-0 ">
              <Image src={LeoImage} alt="Leo" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My tools of choice"
              description="Explore the tools and technologies I use to develop."
              className=""
            />
            <ToolboxItems toolboxItems={toolboxItems} className="" />
            <ToolboxItems
              toolboxItems={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyound coding"
              description="My hobbies and interests outside of coding"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r
                   from-yellow-300 to-emerald-300 rounded-full py-1.5 absolute"
                  style={{ left: item.left, top: item.top }}
                >
                  <span className="font-medium text-gray-900">
                    {item.title}
                  </span>
                  <span>{item.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
             bg-gradient-to-r from-yellow-300 to-emerald-300 
             after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileMemoji} alt="Smiling memoji" className="size-20"/>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
