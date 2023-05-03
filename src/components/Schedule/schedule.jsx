import styles from "../../constants/style";
import PageHead from "../../utils/pageheader";
import React, { useState } from "react";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  " Friday",
  " Saturday",
];
const classNames = [
  "Fitness",
  "Body Building",
  "Taekwondo",
  "Calesthenics",
  "Boxing",
  "yoga",
  "Cardio HIT",
  "cross-fit",
];
const Coaches = [
  "Lee",
  "Mahesh",
  "Roy",
  "David",
  "Jonathan",
  "Lucifer",
  "Lancy",
  "sarena",
];
const timings = [
  "6:00am - 8:00am",
  "8:00am - 10:00am",
  "4:00pm - 6:00pm",
  "6:00pm - 8:00pm",
];
const Schedule = () => {
  const realday = new Date().getDay();
  const val = realday === 0 ? 0 : realday - 1;
  const [currentday, setday] = useState(days[val]);
  const btn = " bg-black text-lime-400 border-2 border-lime-400";
  const btn_active = " bg-lime-500 text-black ";
  const navigate = useNavigate("/pricing");
  const getrandom = () => {
    return Math.floor(Math.random() * 8);
  };

  return (
    <div className="bg-primary text-white">
      <PageHead title="Day wise Schedule" />

      <section className={`${styles.marginY} ${styles.paddingX} mt-20`}>
        <div className="flex sm:justify-evenly flex-wrap item-center gap-9 ">
          {days.map((day) => {
            return (
              <button
                className={`text-xl font-bold rounded-2xl p-3 ${
                  day === currentday ? btn_active : btn
                } `}
                onClick={() => setday(day)}
              >
                {day}
              </button>
            );
          })}{" "}
        </div>
      </section>

      <section className={`${styles.marginY} ${styles.paddingX} mt-20`}>
        <div className="flex sm:justify-evenly flex-wrap  w-full gap-9 ">
          {[1, 2, 3, 4].map((day) => {
            return (
              <div
                className={`border-2 border-lime-500 bg-slate-300/30 flex-st ${styles.flexbetween} w-full p-5 rounded-bl-3xl rounded-tr-3xl space-y-3`}
              >
                <div className=" w-[200px]">
                  <p className="text-[--lime] opacity-80  text-sm w-[150px]">
                    className
                  </p>
                  <h3 className="bold text-xl text-white">
                    {classNames[getrandom()]}
                  </h3>
                </div>
                <div className=" w-[200px]">
                  <p className="text-[--lime] opacity-80   text-sm w-[200px]">
                    Timings
                  </p>
                  <h3 className="bold text-xl text-white ">
                    {timings[day - 1]}
                  </h3>
                </div>
                <div className=" w-[200px]">
                  <p className="text-[--lime] opacity-80  text-sm w-[100px]">
                    Trainer
                  </p>
                  <h3 className="bold text-xl text-white">
                    {Coaches[getrandom()]}
                  </h3>
                </div>

                <div>
                  <button
                    className="text-lg font-bold rounded-xl p-2 bg-lime-400 text-black"
                    onClick={() => navigate("/pricing")}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Schedule;
