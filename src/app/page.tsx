import { useState } from "react";
import Category from "./admin/_components/Category";
import Food from "./admin/_components/Food";
import Navigation from "./admin/_components/Navigation";

export default function Home() {
  return (
    <div className="flex gap-6">
      <Navigation />
      <div>
        <Category />
        <Food />
      </div>
    </div>
  );
}
