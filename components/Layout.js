import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return ( <div className="content">
    <Navbar />
    { children }
    <Footer />
  </div> );
}
 
export default Layout;
// commit 1
// commit 2
// commit 3
// commit 400
// commit 5
// commit 6