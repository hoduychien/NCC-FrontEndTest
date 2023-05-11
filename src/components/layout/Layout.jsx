import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

import "./style.scss";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
