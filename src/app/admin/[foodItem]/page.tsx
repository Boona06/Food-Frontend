"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Food from "../_components/Food";

export default function Admin() {
  const [data, setData] = useState<any>();
  const [food, setFood] = useState<any>();
  const params = useParams();
  async function fetchData() {
    const data = await fetch(
      `http://localhost:5000/food-category/${params.foodItem}`
    );
    const resJosn = await data.json();
    setData(resJosn);
  }
  async function fetchFood() {
    const data = await fetch(`http://localhost:5000/food/`);
    const resJosn = await data.json();
    setFood(resJosn);
  }
  useEffect(() => {
    fetchData();
    fetchFood();
  }, [params.id]);
  console.log(data?._id);
  console.log(food?.category);
  console.log(data);
  console.log(food);
  return (
    <div>
      {data?.map((item: any) => (
        <Food paramsId={params.foodItem} key={item._id} />
      ))}
    </div>
  );
}
