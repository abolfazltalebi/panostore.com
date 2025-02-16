import { ArrowRightCircle } from "lucide-react";
import Button from "../Button";

export default function FooterText() {
  return (
    <div className="hidden sm:flex items-center justify-center flex-wrap sm:flex-nowrap gap-5">
      <p className="font-medium">
        We are available all the time. Contact us today!
      </p>
      <Button variant="footer">
        <ArrowRightCircle className="size-10 -rotate-45" />
      </Button>
    </div>
  );
}
