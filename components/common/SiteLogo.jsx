import Image from "next/image";
import Link from "next/link";

export default function SiteLogo(params) {
  return (
    <Link href="/" passHref>
      <div className="flex items-center cursor-pointer">
        <Image
          className="h-11 w-auto"
          src="/icons/cat.svg"
          alt="Copykitties"
          height="38px"
          width="38px"
        />
        <div className="font-bold border-r-2 px-2 text-lg">Copykitties</div>
      </div>
    </Link>
  );
}
