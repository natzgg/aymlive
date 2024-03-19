"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  console.log(collapsed);

  return (
    <aside
      className={cn(
        "fixed left-0 h-full w-60 bg-background border-r border-[#2D2E35] z-50 flex flex-col",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
