import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
const Layout = ({ children, title }) => (
  <div className="body-container">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <div className="content-main-container">
      <div className="container">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
