import { Button } from "@/components/ui/button";
import { IconFlame } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="container flex h-[500px] flex-col items-center justify-center gap-10 font-[family-name:var(--font-geist-sans)] sm:p-20 md:h-full">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col items-center gap-y-5 text-4xl font-bold tracking-tighter md:flex-row md:gap-x-2 md:text-5xl">
          <IconFlame size={56} fill="#fdde00" color="#ee892f" />
          Fire-stack: A light-weight Next.js starter
        </div>
        <p className="text-balance font-[family-name:var(--font-geist-mono)] text-xs md:text-sm">
          A lightweight and scalable Next.js starter pack with all the necessary
          rules and formatting? Bro, that's straight-up fire! Perfect for
          keeping it sleek and lit, with all the essentials to make it pop. 🔥💻
        </p>
      </div>
      <Button className="w-fit" size={"lg"}>
        Get Started
      </Button>
      <div className="absolute inset-0 -z-[9] bg-[url(/grains.svg)] bg-cover bg-center mix-blend-soft-light"></div>
      <div className="absolute inset-0 -z-10 bg-[url(/gradient-light.svg)] bg-cover bg-center [mask-image:linear-gradient(360deg,white,rgba(255,255,255,0))]"></div>
    </div>
  );
}
