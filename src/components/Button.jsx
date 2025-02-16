import { Link } from "react-router-dom";

export default function Button({ children, variant, className, ...props }) {
  const variantClass = variant ? checkVariant(variant) : "";
  return (
      <button
        className={`${variantClass} ${className} cursor-pointer`}
        {...props}
      >
        {children}
      </button>
  );
}

function checkVariant(variant) {
  if (variant === "header") {
    return "px-6 py-3 rounded-full text-black text-sm border border transition-all duration-300 hover:px-10 ";
  }
  if (variant === "heroSection") {
    return "bg-black text-white px-8 py-3 rounded-full m-auto md:m-0  text-sm flex items-center gap-2 transition-all hover:px-12 hover:scale-105 duration-500";
  }
  if (variant === "TruestButton") {
    return "border text-black px-8 py-3 rounded-full m-auto md:m-0 text-sm flex items-center gap-2 transition-all hover:px-12 hover:scale-105 duration-500";
  }
  if (variant === "SimplifyButton") {
    return "border text-black px-8 py-3 rounded-full m-auto md:m-0 text-sm flex items-center gap-2 transition-all hover:px-12 hover:scale-105 duration-500";
  }
  if (variant === "EventButton") {
    return "capitalize border text-black px-8 py-3 rounded-full m-auto md:m-0 text-sm flex items-center gap-2 transition-all hover:px-12 hover:scale-105 duration-500";
  }
  if (variant === "notFountButton") {
    return "capitalize border text-black px-8 py-3 rounded-full m-auto md:m-0 text-sm flex items-center gap-2 transition-all hover:px-12 hover:scale-105 duration-500";
  }
  if (variant === "moreSection") {
    return "bg-white  text-[#0179B4]  flex items-center justify-center px-6 py-3 rounded-xl text-sm gap-2";
  }
  if (variant === "footer") {
    return "size-12";
  }
  return "";
}
