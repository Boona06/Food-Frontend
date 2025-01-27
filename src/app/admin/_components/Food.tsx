"use client";
import { useEffect, useState } from "react";
import SaveFood from "./FoodModal";
import { Divide } from "lucide-react";

type Food = {
  foodName: String;
  price: number;
  image: String;
  ingredients: String;
  _id: any;
};
export default function Food({ paramsId }: any) {
  const [foodModal, setFoodModal] = useState(false);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/food");
      const data = await response.json();
      setFoods(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white lg:w-[1170px] lg:h-[582px]  mt-6 rounded-xl">
      <p className="p-5 font-bold text-xl"></p>
      <div className="p-5">
        <div className="lg:w-[271px] lg:h-[241px] rounded-lg border-dashed border-[#EF4444] border-2 text-center pt-16 ">
          <button
            onClick={() => setFoodModal(true)}
            className="rounded-full bg-[#EF4444] text-white h-9 w-9"
          >
            +
          </button>
          <p className="p-5">
            Add new Dish to <br /> Salads
          </p>
        </div>
      </div>
      {foods
        .filter((item: any) => item.category == paramsId)
        .map((food) => (
          <div
            className="lg:w-[271px] lg:h-[241px] rounded-lg border-solid border-[#E4E4E7] border-2  "
            key={food._id}
          >
            {food.image}
            <div className="flex justify-around">
              <span className="text-[#EF4444]">{food.foodName}</span>
              <span>{food.price}</span>
            </div>
            <p>{food.ingredients}</p>
          </div>
        ))}
      {foodModal && <SaveFood onClose={setFoodModal} />}
    </div>
  );
}
