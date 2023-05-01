import React, { useState, useEffect } from "react";
import exerciseoptions from "../../services/exerciseApi";
import styles from "../../constants/style";

const Programms = () => {
  const [Exercises, setExercises] = useState("");
  useEffect(() => {
    setExercises(exerciseoptions());
  }, []);
  console.log(Exercises);
  return <div className={`${styles.flexbetween}`}></div>;
};

export default Programms;
