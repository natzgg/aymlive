"use client";

import { useUser } from "@clerk/nextjs";
import { KeyRound, MessageSquare, Tv } from "lucide-react";
import NavItem from "./nav-item";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Tv,
    },
    {
      label: "Keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyRound,
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageSquare,
    },
  ];
  return (
    <ul className="space-y-2 pt-4 px-2 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          href={route.href}
          icon={route.icon}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  );
};

export default Navigation;
