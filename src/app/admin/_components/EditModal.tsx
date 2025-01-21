import { MdCancel } from "react-icons/md";
export default function EditModal() {
  return (
    <div className="bg-[#00000033] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
      <div className=" bg-white rounded-lg lg:w-[460px] lg:h-[596px]">
        <div className="flex justify-between p-6">
          <h2 className="font-bold text-xl">Dishes info</h2>
          <button>
            <MdCancel className="size-8 " />
          </button>
        </div>
        <div className="flex gap-5 ">
          <p className="p-6 text-sm text-[#71717A] ">Dish name</p>
          <input
            className="text-center lg:w-64 lg:h-6 lg:mt-7 border border-solid border-[#E4E4E7] rounded-md text-black"
            type="text"
            placeholder="Item name"
          />
        </div>
        <div className="flex gap-5 ">
          <p className="p-6 text-sm text-[#71717A] ">Dish category</p>
          <select
            className="text-center lg:w-64 lg:h-6 lg:mt-7 border border-solid border-[#E4E4E7] rounded-md text-black"
            name="category"
          >
            <option value="category">category</option>
          </select>
        </div>
        <div className="flex gap-5 ">
          <p className="p-6 text-sm text-[#71717A] ">ingredients</p>
          <input
            className="p-2 lg:w-64 lg:h-20 lg:mt-7 border border-solid border-[#E4E4E7] rounded-md text-black"
            type="text"
            placeholder="Item name"
          />
        </div>
        <div className="flex gap-5 ">
          <p className="p-6 text-sm text-[#71717A] ">price</p>
          <input
            className="text-center lg:w-64 lg:h-6 lg:mt-7 border border-solid border-[#E4E4E7] rounded-md text-black"
            type="number"
            placeholder="Item name"
          />
        </div>
        <div className="flex gap-5 ">
          <p className="p-6 text-sm text-[#71717A] ">image</p>
          <input
            className="text-center lg:w-64 lg:h-6 lg:mt-7 border border-solid border-[#E4E4E7] rounded-md text-black"
            type="number"
            placeholder="Item name"
          />
        </div>
        <div className="flex justify-between">
          <p>svg</p>
          <button className="bg-black text-white p-3 mt-8 m-5 font-normal rounded-lg text-sm">
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
}
