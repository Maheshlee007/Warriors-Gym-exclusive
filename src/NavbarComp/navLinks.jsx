import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../utils/Button";
const NavLinks = () => {
  const highlight = "hover:text-lime-400 hover:font-2xl";
  const active =
    "decoration-2 underline underline-offset-8 decoration-lime-400";
  return (
    <div className=" bg-primary -z-10 text-zinc-50 font-poppins">
      <ul className="flex gap-10 justify-between">
        <div className="relative w-34 h-34 mr-10">
          <img src={logo} alt="logo" className="w-32 h-20" />
          <h1 className="absolute right-0 bottom-4 text-lg font-bold text-lime-400">
            Gym
          </h1>
        </div>
        <div className="  gap-6 justify-between items-center mx-8 sm:flex hidden">
          <li className={highlight}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `${active}` : "")}
            >
              Home
            </NavLink>
          </li>
          <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/programms"
            >
              Programms
            </NavLink>
          </li>
          <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/schedule"
            >
              Schedule
            </NavLink>
          </li>
          <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </div>
        <div className=" sm:w-[20%] flex items-center  space-x-4">
          <Button text="join now" />
          <p>Profile</p>
        </div>
      </ul>
    </div>
  );
};

export default NavLinks;
