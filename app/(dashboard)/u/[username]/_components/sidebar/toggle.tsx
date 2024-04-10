"use client";

import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useCreatorSidebar(
    (state) => state
  );

  const onClick = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };
  return (
    <div className="flex justify-between items-center mb-4">
      {!collapsed && <h1 className="font-semibold text-lg">Dashboard</h1>}
      {!collapsed ? (
        <Button onClick={onClick} size="sm" variant="ghost">
          <ArrowLeftFromLine className="h-4 w-4" />
        </Button>
      ) : (
        <Button onClick={onClick} size="sm" variant="ghost">
          <ArrowRightFromLine className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Toggle;
