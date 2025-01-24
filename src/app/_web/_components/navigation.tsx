import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function Navigation() {
  return (
    <div className="w-full h-16 bg-[#18181B] pl-36 pt-3 pb-3 flex justify-between">
      <div className="flex gap-3">
        <img src="Logo.png" />
        <div>
          <h2 className="text-white font-bold text-lg">
            Nom<span className="text-[#EF4444]">Nom</span>
          </h2>
          <p className="text-white text-xs">Swift delivery</p>
        </div>
      </div>

      <div className=" flex gap-5 p-2">
        <span className="text-[#EF4444] text-2xl">
          <CiLocationOn />
        </span>

        <input
          className="bg-white h-9 w-64 rounded-2xl text-center "
          type="text"
          placeholder="Add location"
        />
        <button className="h-9 w-9 flex justify-center items-center bg-white rounded-full">
          <LuShoppingCart />
        </button>
        <button className="h-9 w-9 flex justify-center items-center bg-[#EF4444] rounded-full">
          <CiUser />
        </button>
      </div>
    </div>
  );
}
