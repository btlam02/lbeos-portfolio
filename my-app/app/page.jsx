import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section classname="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Rookie Software & AI Engineering</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent"> Thanh - Lam Bui</span></h1>
            <p className="max-w-[550px] mb-9 text-white/80">Hey there! 👋 I’m Thanh-Lam, a proud rookie in the world of web application development and AI engineering. Just started, 
            but I’ve already mastered the art of debugging by googling. I also have experience in teaching STEM!.</p>

            {/* CV and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" >
                <span className="">Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full 
                flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary
                hover:transition-all duration:600"/>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none">
            <Photo/>
          </div>


        </div>


      </div>


      <Stats/>

    </section>
  );
}
