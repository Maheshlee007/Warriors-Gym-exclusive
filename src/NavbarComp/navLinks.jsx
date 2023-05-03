import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../utils/Button";
import { useContext, useEffect, useState } from "react";
import { currentUserContext } from "./navRoutes";
const NavLinks = () => {
  const highlight = "hover:text-lime-400 hover:font-2xl";
  const active =
    "decoration-2 underline underline-offset-8 decoration-lime-400";

  const { isLoggedIn, setIsLoggedIn, userName, setuserName } =
    useContext(currentUserContext);
  const [menu, setMenu] = useState(false);

  const handlelogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setuserName(" ");
  };

  return (
    <div className=" bg-primary  text-zinc-50 font-poppins  z-[100]">
      <ul className="flex gap-10 justify-between  sticky top-1">
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
              Workouts
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
        <div
          className={`${highlight} w-[40%] sm:w-[20%] flex items-center  space-x-4`}
        >
          <section className="peer  ">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/login"
            >
              {isLoggedIn ? (
                <button className="relative " onClick={handlelogout}>
                  {/* <img src="https://img.icons8.com/fluency/48//1A6DFF/C822FF/50FF86/exit.png" /> */}
                  <span className="absolute  -left-[50px] top-1/4 text-lime-500 font-bold ">
                    {userName}
                  </span>
                  <img src="https://img.icons8.com/nolan/48/84cc16/0072FF/logout-rounded.png" />
                </button>
              ) : (
                "Login"
              )}
            </NavLink>
          </section>
          <Button text="join now" />
          {/* ln */}
        </div>
      </ul>
      <div
        className="  gap-3 justify-between items-center mx-8 ss:hidden list-none
      bg-primary border-x-4 border-lime-500 text-black text-5xl w-full -left-8  p-4 rounded-full z-50 flex fixed bottom-0"
      >
        <li className={highlight}>
          <NavLink
            className={({ isActive }) => (isActive ? `${active}` : "")}
            to="/schedule"
          >
            <img src="https://img.icons8.com/nolan/96/84cc16/0072FF/overtime.png" />
          </NavLink>
        </li>
        <li className={highlight}>
          <NavLink
            className={({ isActive }) => (isActive ? `${active}` : "")}
            to="/contact"
          >
            <img src="https://img.icons8.com/nolan/96/84cc16/0072FF/business-contact.png" />
          </NavLink>
        </li>
        <li className={highlight}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${active}` : "")}
          >
            <img src="https://img.icons8.com/nolan/96/84cc16/0072FF/google-home.png" />
          </NavLink>
        </li>

        {/* <li className={highlight}>
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : "")}
              to="/gallery"
            >/
              Gallery
            </NavLink>
          </li> */}

        <li className={highlight}>
          <NavLink
            className={({ isActive }) => (isActive ? `${active}` : "")}
            to="/programms"
          >
            <img src="https://img.icons8.com/3d-fluency/94/dumbbell.png" />
          </NavLink>
        </li>
        <section className="relative ">
          <button className="rotate-180" onClick={() => setMenu(!menu)}>
            <img src="https://img.icons8.com/nolan/96/84cc16/0072FF/drag-list-down.png" />
          </button>

          {menu && (
            <div
              className=" absolute -top-[200px]  
           p-6 rounded-xl bg-black/70 right-4 text-2xl space-y-4 tracking-widest  
           font-bold slide-top transform-all text-lime-500  "
              onMouseOut={() => setMenu(!menu)}
            >
              <li className={highlight}>
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? `${active}` : "") + "text-gradient"
                  }
                  to="/pricing"
                >
                  {/* <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-payment-smart-city-xnimrodx-lineal-gradient-xnimrodx.png" /> */}
                  pricing
                </NavLink>
              </li>
              <li className={highlight}>
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? `${active}` : "") + "text-gradient "
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className={highlight}>
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? `${active}` : "") + "text-gradient"
                  }
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default NavLinks;
