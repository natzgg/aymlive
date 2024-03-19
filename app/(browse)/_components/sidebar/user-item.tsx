"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

import Link from "next/link";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const { collapsed } = useSidebar((state) => state);

  const href = `/${username}`;
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <Link href={href}>{username}</Link>
    </Button>
  );
};

export default UserItem;
