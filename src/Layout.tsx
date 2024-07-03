import FlowbiteNav1 from "./components/navbar/FlowbiteNav1.tsx";
import Footer1 from "./components/footer/Footer1.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <FlowbiteNav1 />
      <Outlet />
      <Footer1 />
    </>
  );
}

export default Layout;
