import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto p-4 text-center border border-red-800">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
