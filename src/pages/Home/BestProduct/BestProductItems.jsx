import React from "react";
import { Products } from "../../../constanst/Products";
import BestProductCard from "../../../components/BestProductCard";

export default function BestProductItems() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Products.map((product) => (
        <div key={product.id}>
          <BestProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
