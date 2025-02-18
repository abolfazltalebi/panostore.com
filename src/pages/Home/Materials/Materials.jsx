import MaterialsCaption from "./MaterialsCaption";
import MaterialsImage from "./MaterialsImage";

export default function Materials() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-12 items-center container">
      <MaterialsCaption />
      <MaterialsImage />
    </section>
  );
}
