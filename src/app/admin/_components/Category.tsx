"use client"
import { useState ,useEffect } from "react";

type Category = {
  _id : number ,
  categoryName : String
}

export default function Category() {
  const categoryName = prompt("hello")
  const [foodcategory , setFoodcategory] = useState<Category[]>([])
  const createCategory = async () => {
    const response = await fetch("http://localhost:5000/food-category/" ,
     {
      method:"POST",
      headers: {
        'Content-Type' : "application/json"
      }  ,
      body: JSON.stringify({categoryName})
    }) ;
    const data = await response.json()
    setFoodcategory([...foodcategory , data.newFood])
  }


  useEffect(() => {
    const fetchData = async () =>{
    const response = await fetch("http://localhost:5000/food-category")
    const data = await response.json()
    setFoodcategory( data)
    }
    fetchData()
  } ,[])
console.log(foodcategory)
  return (
    <div >
      {foodcategory.map((item) => (
        <div key={item._id}>{item.categoryName}</div>))}
        <button onClick={createCategory} className="rounded-full bg-[#EF4444] text-white h-9 w-9">+</button>
    </div>
  );
}

