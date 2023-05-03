import {
  Home,
  About,
  Blog,
  Gallery,
  Pricing,
  Programms,
  Schedule,
  Contact,
  Exercise,
  Login,
} from "../components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavLinks from "./navLinks";
import { useState, useEffect, createContext } from "react";
import Stripe from "../components/payments/paymentStripe";

export const currentUserContext = createContext(null);

const NavRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (user) {
      setIsLoggedIn(true);
      setuserName(user.split(" ")[0]);
    }
  });

  return (
    <div className="">
      <BrowserRouter>
        <currentUserContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, userName, setuserName }}
        >
          <NavLinks />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="pricing" element={<Pricing />} />
            <Route
              path="programms"
              element={isLoggedIn ? <Programms /> : <Back />}
            >
              {/* <Route path=":id" element={<Exercise />} /> */}
            </Route>
            <Route path="programms/:id" element={<Exercise />} />

            <Route path="Schedule" element={<Schedule />} />
            <Route path="contact" element={<Contact />} />
            <Route path="payment" element={<Stripe />} />
            <Route path="*" element={<h1>No page Found</h1>} />
          </Routes>
        </currentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default NavRoutes;

const Back = () => {
  return (
    <div className="text-lime-400 h-[100vh] text-center flex justify-center items-center">
      <h1> Plz Login to continue ....</h1>
      <button className="border-lime-400 border-2 p-3 rounded-lg text-lime-500">
        <Link to="/Login">Let's Login</Link>
      </button>
    </div>
  );
};
