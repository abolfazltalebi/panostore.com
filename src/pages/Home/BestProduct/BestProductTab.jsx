export default function BestProductTab() {
  const item = ["Chair", "Table", "Sofa"];
  return (
    <div className="flex justify-center gap-3 mb-6">
      {item.map((category) => (
        <button
          key={category}
          className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
