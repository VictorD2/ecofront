import React from "react";
import Aside from "./Aside/Aside";
import { FooterDash } from "./FooterDash";
import NavbarDash from "./NavbarDash";
const DashboardLayout: React.FC = (props) => {
  return (
    <>
      <NavbarDash />
      <Aside />
      {props.children}
      <FooterDash/>
    </>
  );
};

export default DashboardLayout;
