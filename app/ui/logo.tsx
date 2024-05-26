import { josefin } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${josefin.className} flex flex-col leading-none text-white`}
    >
      <Image
        src="/pay_logo.png"
        width={80}
        height={80}
        className="hidden md:block"
        alt="appLogo"
      />
      <p className="text-[30px]">PayProff</p>
    </div>
  );
}
