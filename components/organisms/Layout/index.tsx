import { FC, ReactElement } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactElement;
};

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
