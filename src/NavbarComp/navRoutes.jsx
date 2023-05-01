import {
  Home,
  About,
  Blog,
  Gallery,
  Pricing,
  Programms,
  Schedule,
  Contact,
} from "../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./navLinks";

const NavRoutes = () => {
  return (
    <div className="">
      <BrowserRouter>
        <NavLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="programms" element={<Programms />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>No page Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavRoutes;
