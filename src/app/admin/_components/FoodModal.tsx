import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast } from "sonner";
import { BookImage } from "lucide-react";

type Props = {
  onClose: (newValue: boolean) => void;
};

export default function SaveFood() {
  // //   const [newCategory, setNewCategory] = useState("");
  // //   const saveButton = async () => {
  // //     const response = await fetch("http://localhost:5000/food/", {
  // //       method: "POST",
  // //       headers: {
  // //         "Content-Type": "application/json",
  // //       },
  // //       body: JSON.stringify({ categoryName: newCategory }),
  // //     });
  // //     const data = await response.json();

  //     // onClose(false);
  //   toast.success("New dish is being added to the menu");
  //   };
  return (
    <div className="fixed bg-[#00000066] left-0 right-0 top-0 bottom-0 flex justify-center items-center ">
      <div className="bg-[#ffffff] lg:w-460px lg:h-592px rounded-lg">
        <div className="flex justify-between p-8">
          <h1 className="font-bold">Add new Dish to Appetizers</h1>
          <button>
            <MdCancel className="size-8" />
          </button>
        </div>
        <div className="flex justify-around gap-6 text-[14px] ">
          <div>
            <h2 className="pb-2">Food name</h2>
            <input
              className="border-solid border-[1px] rounded-lg p-3"
              placeholder="Type food name"
              type="text"
            />
          </div>
          <div>
            <h2 className="pb-2">Food price</h2>
            <input
              className="border-solid border-[1px] rounded-lg p-3 text-[14px]"
              placeholder="Enter price..."
              type="text"
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="pb-2">Ingredients</h2>
          <input
            className="border-solid border-[1px] p-4 rounded-lg w-full lg:h-24 "
            type="text"
            placeholder="List ingredients..."
          />
        </div>
        <h2 className="pl-4">Food image</h2>
        <div className="text-end">
          <div className="lg:w-[412px] lg:h-32 bg-[#2563EB33] opacity-80 m-4 rounded-md border-dashed border-[1px] border-[#2563eb] ">
            <label className="size-full items-center flex justify-center">
              <input type="file" className=" hidden" />
              <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center ">
                <BookImage />
              </div>
            </label>
          </div>
          <button className="bg-black text-white p-3 mt-8 m-5 font-normal rounded-lg text-sm">
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
}
