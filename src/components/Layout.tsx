import React, { ReactNode } from "react";
import { theme } from "../config/theme";
import { GlobalStyles } from "./GlobalStyles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles theme={theme} />
      {children}
    </>
  );
};

export default Layout;
