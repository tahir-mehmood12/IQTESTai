import { Outlet } from "react-router-dom";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
