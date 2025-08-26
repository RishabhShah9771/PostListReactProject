import { Outlet } from "react-router-dom";
import MainHeader from "../components/HeaderComponent/MainHeader";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};
export default RootLayout;
