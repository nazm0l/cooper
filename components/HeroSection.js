import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      style={{ background: "url(/hero-bg.svg)" }}
      className="w-full h-212.5 flex items-center"
    >
      <div className="container mx-auto flex gap-19 items-center">
        <div className="max-w-117.5 w-full">
          <h2 className="text-[46px] leading-14 capitalize mb-5">
            Give Your customers humen{" "}
            <span className="font-bold">feeling touch Like Never Before</span>
          </h2>
          <p className="text-sm leading-6 capitalize text-text-secondary mb-7.5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{" "}
          </p>
          <div className="flex gap-3.5 items-center">
            <input
              type="email"
              name="email"
              id=""
              placeholder="name@example.com"
              className="max-w-76.25 w-full px-5 py-4 border border-[#CECECE] rounded-[5px] font-medium text-[15px] text-[#ADADAD] placeholder:text-[#ADADAD] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-5.5 py-4 rounded-md font-medium text-[15px] hover:bg-primary/90 transition-all cursor-pointer">
              Request Demo
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2 my-6">
            <hr className="grow border-gray-300" />
            <span className="text-sm text-gray-500">Otherwise</span>
            <hr className="grow border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 text-text-primary py-3.5 rounded-md font-medium text-[15px] border border-[#CECECE] hover:ring-1 hover:ring-primary transition-all cursor-pointer">
            <Image
              src="/google-icon.svg"
              alt="google"
              width={15}
              height={15}
              className="w-4 h-4"
            />
            Sign Up With Google
          </button>
        </div>
        <div>
          <Image
            src="/hero-image.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
