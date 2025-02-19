import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-yellow-300 to bg-emerald-300 text-gray-900 
        py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Get in touch</h2>
              <p className="text-sm md:text-base mt-2">
                I’d love to hear from you! Whether you have a question, an
                exciting opportunity, or just want to say hello, feel free to
                reach out. Fill out the contact form below or connect with me
                through the links provided. Let’s create something amazing
                together!
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center 
              w-max px-6 h-12 rounded-xl gap-2 hover:bg-gray-800
              border border-gray-900">
                <span className="font-semibold">Contact me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
