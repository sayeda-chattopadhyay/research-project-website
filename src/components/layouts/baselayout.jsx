import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
