import Container from "./_components/container";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const BrowserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowserLayout;
