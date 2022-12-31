import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { FooterComponent } from "./footer";

export const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};
