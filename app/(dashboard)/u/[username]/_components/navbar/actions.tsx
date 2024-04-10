"use client";

import { Button } from "@/components/ui/button";
import { currentUser, SignInButton, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Actions = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-x-4">
      <div className="flex items-center">
        <Button variant="ghost" asChild>
          <Link href="/">
            <LogOut className="h-5 w-5 mr-2" />
            <span>Exit</span>
          </Link>
        </Button>
      </div>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Actions;
