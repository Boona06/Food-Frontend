import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="h-screen bg-white lg:w-52">
      <Link href={"/"}>
        <div className="flex gap-2 p-5 ">
          <img src="/logo.png" alt="" />
          <div>
            <p className=" font-bold">NomNom </p>
            <p className="text-[#71717A] text-xs">Swift delivery</p>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={"/admin"}>
          <div className="flex gap-2 lg:w-[165px] lg:h-[40px] rounded-full  opacity-80 p-3 items-center ">
            <RiDashboardHorizontalLine className="text-3xl" />
            <button>Food menu</button>
          </div>
        </Link>
        <Link href={"/admin/order"}>
          <div className="flex gap-2 pt-12 lg:w-[165px] lg:h-[40px] rounded-full ml-3 items-center  ">
            <HiOutlineTruck className="text-3xl" />
            <button>Orders</button>
          </div>
        </Link>

        <div className="flex gap-2 pt-16 lg:w-[165px] lg:h-[40px] rounded-full ml-3 items-center  ">
          <LuSettings className="text-3xl" />
          <button>Settings</button>
        </div>
      </div>
    </div>
  );
}
