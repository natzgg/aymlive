import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";

const UrlCard = ({ value }: { value: string }) => {
  return (
    <div className="p-6 mt-4 rounded-xl bg-muted">
      <div className="flex items-center gap-x-10">
        <p className="shrink-0 font-semibold">Server URL</p>
        <div className="w-full space-y-2">
          <div className="w-full flex items-center gap-x-2">
            <Input value={value || ""} placeholder="Server URL" disabled />
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
