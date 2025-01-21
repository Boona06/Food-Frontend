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
  console.log(foods);
  return (
    <div className="bg-white lg:w-[1170px] lg:h-[582px] ml-auto mr-auto mt-6 rounded-xl grid grid-cols-4 grid-rows-2">
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
            className="lg:w-[271px] lg:h-[241px] rounded-lg border-solid border-[#E4E4E7] border-2 text-center mt-6 "
            key={food._id}
          >
            {food.foodName}
          </div>
        ))}
      {foodModal && <SaveFood onClose={setFoodModal} />}
    </div>
  );
}
