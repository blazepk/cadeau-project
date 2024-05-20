import FlowbiteNav from "./components/navbar/FlowbiteNav.tsx";
import Footer from "./components/footer/Footer.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <FlowbiteNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
