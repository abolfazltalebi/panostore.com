import material from "@/assets/images/materials.webp"

export default function MaterialsImage() {
  return (
    <div className="order-first md:order-last">
      <img src={material} className="w-full h-auto bg-auto" alt="material section" />
    </div>
  );
}
