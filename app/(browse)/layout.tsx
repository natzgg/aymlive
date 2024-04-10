import { Suspense } from "react";
import Container from "./_components/container";
import Navbar from "./_components/navbar";
import Sidebar, { SidebarSkeleton } from "./_components/sidebar";

const BrowserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          {/* @ts-ignore */}
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowserLayout;
