import { whyItems } from "../../../constanst/WhyItems";
import WhySectionICard from "./WhySectionICard";

export default function WhySection() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-12 container">
      <div className="p-5">
        <h2 className="font-bold text-3xl">Why Choosing Us</h2>
      </div>
      {whyItems.map(({ id, name, caption }) => (
        <WhySectionICard key={id} id={id} name={name} caption={caption} />
      ))}
    </section>
  );
}