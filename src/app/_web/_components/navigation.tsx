import Link from "next/link";

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

      <div>
        <input
          className="bg-white rounded-lg "
          type="text"
          placeholder="Add location"
        />
      </div>
    </div>
  );
}
