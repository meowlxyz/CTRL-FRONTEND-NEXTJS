import Welcome from "@/components/sections/Welcome";
import WhatIsCtrl from "@/components/sections/WhatIsCtrl";

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Welcome />
      <div className="mt-[15rem] h-[1048.44px] w-full p-12 pb-0">
        <WhatIsCtrl />
      </div>
    </div>
  );
}
