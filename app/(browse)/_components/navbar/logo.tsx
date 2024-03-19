import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 shrink-0 mr-14 lg:shrink lg:mr-0">
          <Image
            src="stargazer.svg"
            alt="Aymlive logo"
            height="32"
            width="32"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">AymLive</p>
          <p className="text-sm text-muted-foreground">Let's Play and Live!</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
