import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
export default function Navigation() {
  return (
    <div className="h-screen bg-white lg:w-52">
      <div className="flex gap-2 p-5 ">
        <img src="/logo.png" alt="" />
        <div>
          <p className=" font-bold">NomNom </p>
          <p className="text-[#71717A] text-xs">Swift delivery</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-2 lg:w-[165px] lg:h-[40px] rounded-full  opacity-80 p-4 items-center ">
          <RiDashboardHorizontalLine className="text-3xl" />
          <button>Food menu</button>
        </div>
        <div className="flex gap-2 pt-4 lg:w-[165px] lg:h-[40px] rounded-full ml-3 items-center  ">
          <HiOutlineTruck className="text-3xl" />
          <button>Orders</button>
        </div>
        <div className="flex gap-2 pt-4 lg:w-[165px] lg:h-[40px] rounded-full ml-3 items-center  ">
          <LuSettings className="text-3xl" />
          <button>Settings</button>
        </div>
      </div>
    </div>
  );
}
