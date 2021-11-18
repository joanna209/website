import React, {useEffect} from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({children}) => {
  
  return <div>
    <NavBar />
    {children}
    <Footer />
  </div>;
}

export default Layout;
