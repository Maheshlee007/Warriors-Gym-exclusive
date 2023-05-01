import { useState } from "react";
import NavRoutes from "./NavbarComp/navRoutes";
import "./App.css";
import styles from "../src/constants/style";
function App() {
  return (
    <div className="bg-primary w-100% overflow-hidden ">
      <NavRoutes />
    </div>
  );
}

export default App;
// className="w-[75%] bg-lime-400 h-10
// hover:w-full hover:transition-[width] duration-1000 delay-100 ease-in"
