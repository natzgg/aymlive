"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CopyButton from "./copy-button";
import { useState } from "react";

const KeyCard = ({ value }: { value: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl p-6 mt-4 bg-muted">
      <div className="flex items-start gap-x-10">
        <p className="shrink-0 font-semibold">Stream key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              type={show ? "text" : "password"}
              value={value || ""}
              placeholder="Stream key"
              disabled
            />
            <CopyButton value={value || ""} />
          </div>
          <Button onClick={() => setShow(!show)} variant="link" size="sm">
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
