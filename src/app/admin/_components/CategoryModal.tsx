import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast } from "sonner";

type Props = {
  onClose: (newValue: boolean) => void;
};

export default function SaveCategory({ onClose }: Props) {
  const [newCategory, setNewCategory] = useState("");
  const saveButton = async () => {
    const response = await fetch("http://localhost:5000/food-category/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: newCategory }),
    });
    const data = await response.json();

    onClose(false);
    toast.success("New Category is being added to the menu");
  };
  return (
    <div className="bg-[#00000066] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
      <div className=" bg-white rounded-lg lg:w-[460px] lg:h-[272px]">
        <div className="flex justify-between p-8">
          <h2>Add new category</h2>
          <button onClick={() => onClose(false)}>
            <MdCancel className="size-8" />
          </button>
        </div>
        <div className="pl-8 pr-8 text-end">
          <div className="text-start font-normal ">
            <h3>Category name</h3>
            <Input
              className="opacity-85 mt-2"
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value);
              }}
              placeholder="Type category name..."
            />
          </div>
          <button
            className="bg-black text-white p-2 mt-8 font-normal rounded-lg text-sm"
            onClick={saveButton}
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  );
}
