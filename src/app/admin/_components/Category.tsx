"use client";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import SaveCategory from "./CategoryModal";
import Link from "next/link";

type Category = {
  _id: number;
  categoryName: String;
};

export default function Category() {
  const [foodcategory, setFoodcategory] = useState<Category[]>([]);
  const [categoryModal, setCategoryModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/food-category");
      const data = await response.json();
      setFoodcategory(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-lg lg:w-[1170px] font-bold mr-auto ml-auto ">
      <h1 className="p-4">Dishes Category</h1>
      {foodcategory.map((item) => (
        <Link key={item?._id} href={`/admin/${item?._id}`}>
          <Badge className="bg-white text-black border-solid border-[1px] border-[#E4E4E7] rounded-xl my-4 mx-2">
            <div>{item?.categoryName}</div>
          </Badge>
        </Link>
      ))}
      <button
        onClick={() => setCategoryModal(true)}
        className="rounded-full bg-[#EF4444] text-white h-9 w-9"
      >
        +
      </button>
      {categoryModal && <SaveCategory onClose={setCategoryModal} />}
    </div>
  );
}
