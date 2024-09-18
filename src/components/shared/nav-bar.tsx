import { IconPackage } from "@tabler/icons-react";

export function AppNavbar() {
  return (
    <nav className="flex h-[10vh] items-center justify-between bg-yellow-50 px-24">
      <div className="flex gap-x-2 font-bold tracking-tighter">
        <IconPackage />
        Fire-stack
      </div>
    </nav>
  );
}
