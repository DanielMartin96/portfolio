import { FC, ReactElement } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactElement;
};

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
