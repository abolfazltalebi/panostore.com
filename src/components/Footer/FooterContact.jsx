import { Link } from "react-router-dom";

export default function FooterContact() {
  return (
    <div className="space-y-4">
      <h2 className="font-medium capitalize text-lg">contact</h2>
      <div className="flex flex-col gap-4">
        <Link to="" className="text-sm">hello@trailbliss.com</Link>
        <Link to="" className="text-sm">(319) 555-0115</Link>
        <Link to="" className="text-sm">(225) 555-0118</Link>
      </div>
    </div>
  );
}
