"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/store/useSidebar";
import { User } from "@prisma/client";
import UserItem from "./user-item";

interface RecommendedProps {
  data: User[];
}

const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
          {data.map((user) => (
            <UserItem
              key={user.username}
              username={user.username}
              imageUrl={user.imageUrl}
              isLive={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommended;
