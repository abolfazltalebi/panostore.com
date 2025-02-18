import BestProductHeader from "./BestProductHeader";
import BestProductItems from "./BestProductItems";
import BestProductTab from "./BestProductTab";

export default function BestProduct() {
  return (
    <div className="bg-[#F7F7F7] py-10">
      <div className="container">
        <BestProductHeader />
        <BestProductTab />
        <BestProductItems />
        <p className="text-center mt-6 text-orange-500 cursor-pointer">
          View All
        </p>
      </div>
    </div>
  );
}
