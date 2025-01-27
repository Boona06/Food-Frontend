import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast } from "sonner";
import { BookImage } from "lucide-react";

type Props = {
  onClose: (newValue: boolean) => void;
};

const CLOUDINARY_NAME = "dntzvnl1v";
const CLOUDYNARY_PRESET = "Food-img";

export default function SaveFood({ onClose }: Props) {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const imageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDYNARY_PRESET);

      fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.secure_url);
          toast.success("Зураг амжилттай орууллаа");
        })
        .catch(() => {
          toast.error(" Зураг оруулахад алдаа гарлаа!");
        });
    }
  };

  const saveButton = async () => {
    if (!foodName || !price || !image || !ingredients) {
      toast.error("Бүх талбарыг бөглөнө үү!");
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch("http://localhost:5000/food/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName,
          price,
          image,
          ingredients,
        }),
      });

      if (response) {
        toast.success("Хоол амжилттай нэмэгдлээ!");
        onClose(false);
      } else {
        toast.error("Хоол нэмэхэд алдаа гарлаа!");
      }
    } catch {
      toast.error("Сервертэй холбогдоход алдаа гарлаа!");
    }
    setIsSaving(false);
  };
  console.log(image);
  return (
    <div className="fixed bg-[#00000033] left-0 right-0 top-0 bottom-0 flex justify-center items-center">
      <div className="bg-white lg:w-460px lg:h-592px rounded-lg">
        <div className="flex justify-between p-8">
          <h1 className="font-bold">Add new Dish to Appetizers</h1>
          <button onClick={() => onClose(false)}>
            <MdCancel className="size-8" />
          </button>
        </div>
        <div className="flex justify-around gap-6 text-[14px]">
          <div>
            <h2 className="pb-2">Food name</h2>
            <input
              className="border-solid border-[1px] rounded-lg p-3"
              placeholder="Type food name"
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div>
            <h2 className="pb-2">Food price</h2>
            <input
              className="border-solid border-[1px] rounded-lg p-3 text-[14px]"
              placeholder="Enter price..."
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="pb-2">Ingredients</h2>
          <input
            className="border-solid border-[1px] p-4 rounded-lg w-full lg:h-24"
            type="text"
            placeholder="List ingredients..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <h2 className="pl-4">Food image</h2>
        <div className="text-end">
          <div className="lg:w-[412px] lg:h-32 bg-[#2563EB33] opacity-80 m-4 rounded-md border-dashed border-[1px] border-[#2563eb]">
            <label className="size-full items-center flex justify-center">
              <input type="file" className="hidden" onChange={imageUpload} />
              <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                <BookImage />
              </div>
            </label>
          </div>
          <button
            onClick={saveButton}
            className={`bg-black text-white p-3 mt-8 m-5 font-normal rounded-lg text-sm ${
              isSaving ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Add Dish"}
          </button>
        </div>
      </div>
    </div>
  );
}
