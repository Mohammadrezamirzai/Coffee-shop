
import CoffeeShopInfo from "./components/CoffeeShopInfo";

import Prizes from "./components/Prizes";

export default function Home() {
  return (
    <div className="bg-gray-400 mt-16">
      <div className="">
        <CoffeeShopInfo />
      </div>

      <Prizes />
    </div>
  );
}
