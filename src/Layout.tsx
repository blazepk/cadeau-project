import FlowbiteNav1 from "./components/navbar/FlowbiteNav1.tsx";
import Footer1 from "./components/footer/Footer1.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-brown-300">
      <FlowbiteNav1 />
      <div className=" max-w-screen-2xl mx-auto ">
        <Outlet />
      </div>
      <Footer1 />
    </div>
  );
}

export default Layout;
