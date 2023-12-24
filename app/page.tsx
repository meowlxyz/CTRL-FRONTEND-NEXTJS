import GetStarted from "@/components/sections/GetStarted";
import Revenue from "@/components/sections/Revenue";
import Staking from "@/components/sections/Staking";
import Supply from "@/components/sections/Supply";
import Video from "@/components/sections/Video";
import Welcome from "@/components/sections/Welcome";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <Welcome />
      <div className="h-full w-full p-12 pt-0 max-md:p-6">
        <div className="h-full w-full p-0 2xl:p-20">
          <Staking />
        </div>
      </div>
      <div className="h-full w-full p-12 pt-0 max-md:p-6">
        <div className="h-full w-full p-0 2xl:p-20">
          <Revenue />
        </div>
      </div>
      <Video />
      <div className="h-full w-full p-12 pt-0 max-md:p-6">
        <div className="h-full w-full p-0 2xl:p-20">
          <Supply />
        </div>
      </div>
      <div className="h-full w-full p-12 pb-20 pt-0 max-md:p-6">
        <div className="h-full w-full p-0 2xl:p-20">
          <GetStarted />
        </div>
      </div>
      <div className="h-full w-full p-0 max-md:mt-16 2xl:pt-20">
        <Footer />
      </div>
    </div>
  );
}
