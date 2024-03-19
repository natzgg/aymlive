"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <div
      className={(cn("flex-1"), collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
