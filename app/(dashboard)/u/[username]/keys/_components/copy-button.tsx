"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, CopyIcon } from "lucide-react";
import { useState } from "react";

const CopyButton = ({ value }: { value: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);
    setTimeout(() => {
      navigator.clipboard.writeText(value);
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : CopyIcon;
  return (
    <Button onClick={onCopy} disabled={isCopied} variant="ghost" size="sm">
      <Icon className="w-4 h-4" />
    </Button>
  );
};

export default CopyButton;
