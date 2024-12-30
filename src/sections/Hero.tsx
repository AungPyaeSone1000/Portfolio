import memojiImage from "@/assets/images/memoji-laptop.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import HeroObit from "@/components/HeroObit";
import Sparkle from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroObit size={800} rotation={-72}>
          <StarIcon className="size-28 text-yellow-300" />
        </HeroObit>
        <HeroObit size={550} rotation={13}>
          <StarIcon className="size-12 text-yellow-300" />
        </HeroObit>
        <HeroObit size={590} rotation={98}>
          <StarIcon className="size-8 text-yellow-300" />
        </HeroObit>
        <HeroObit size={430} rotation={-14}>
          <Sparkle className="size-8 text-yellow-300/20" />
        </HeroObit>
        <HeroObit size={440} rotation={79}>
          <Sparkle className="size-5 text-yellow-300/20" />
        </HeroObit>
        <HeroObit size={530} rotation={178}>
          <Sparkle className="size-10 text-yellow-300/20" />
        </HeroObit>
        <HeroObit size={710} rotation={144}>
          <Sparkle className="size-14 text-yellow-300/20" />
        </HeroObit>
        <HeroObit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-yellow-300/20" />
        </HeroObit>
        <HeroObit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-yellow-300/20" />
        </HeroObit>
        <HeroObit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-yellow-300/20" />
        </HeroObit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Looking for a Junior Web Developer position
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building web applications using modern technologies
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in building web applications using modern technologies
            such as React, Next.js, and Node.js.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/20 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work here</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
