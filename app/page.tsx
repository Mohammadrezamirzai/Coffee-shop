import Image from "next/image";
import Products from "./components/Products";
import CoffeeShopInfo from "./components/CoffeeShopInfo";

import Prizes from "./components/Prizes";

export default function Home() {
  return (
    <div className="bg-gray-300 py-2">
      <CoffeeShopInfo />
      <Prizes />


    </div>
  );
}
