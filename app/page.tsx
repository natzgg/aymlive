import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-red-500 font-bold">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
