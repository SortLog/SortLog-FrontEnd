import { ReactNode } from "react";
import Header from "./Header";
// import { Footer } from './footer';
// import { MainSidebar } from './main-sidebar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <MainSidebar*/}
      {/*    onClose={() => setIsSidebarOpen(false)}*/}
      {/*    open={isSidebarOpen}*/}
      {/* />*/}
      {children}
      {/* <Footer />*/}
    </>
  );
};
export default Layout;
