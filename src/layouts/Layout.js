import MainHeader from "./Header/MainHeader";
import MainSideBar from "./SideBar/MainSideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainHeader />
      <MainSideBar />
      <Outlet/>
    </>
  );
};

export default Layout;
