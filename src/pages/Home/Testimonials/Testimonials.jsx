import React from "react";
import TestimonialsCard from "../../../components/TestimonialsCard";
import { TestimonialsItme } from "../../../constanst/TestimonialsItme";

export default function Testimonials() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 container">
      {TestimonialsItme.map((Titem) => {
        return <TestimonialsCard {...Titem} />;
      })}
    </section>
  );
}
