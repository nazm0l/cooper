import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-6.5">
        <nav className="flex justify-between items-center">
          <div>
            <Image src="/logo.svg" alt="logo" width={135} height={30} />
          </div>
          <div>
            <ul className="flex space-x-10">
              <li className="text-text-primary font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
                Home
              </li>
              <li className="text-text-primary font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
                About
              </li>
              <li className="text-text-primary font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
                Service
              </li>
              <li className="text-text-primary font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
                Team
              </li>
              <li className="text-text-primary font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
                Pricing
              </li>
              <li className="text-text-primary font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex space-x-5">
            <button className="text-text-secondary px-8 py-3.5 border-[1.5px] border-primary rounded-[5px] font-medium text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer">
              Sign Up
            </button>
            <button className="font-medium text-[15px] hover:text-primary transition-all cursor-pointer">
              Log In <ArrowRight className="inline-block ml-0.5 text-primary" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
