import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import {Footer} from '../Footer'
import { ToastContainer } from "react-toastify";
export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer/>
    </>
  );
}
