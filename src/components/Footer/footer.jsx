import Heading from "../../utils/heading";
import { facebook, instagram, linkedin, twitter, logo } from "../../assets";
import styles from "../../constants/style";
import { Fragment } from "react";

const Footer = () => {
  const classes = [
    "Fitness Classes",
    "Aerobics Classes",
    "Power Yoga ",
    "Learn Machines ",
    "Full-body Strength",
  ];
  const timings = [
    "Monday - Friday:",
    "7:00am - 21:00pm",
    "Saturday:",
    "7:00am - 19:00pm",
    "Sunday-Recovery",
  ];
  return (
    <footer className={`${styles.marginY} ${styles.paddingX} mt-20`}>
      <section
        className=" w-full h-full flex flex-col my-16 justify-between items-start 
      ss:flex-col sm:flex-row sm:mt-9 sm:justify-between"
      >
        <div className="space-y-10">
          <div className="relative  w-32 h-34 ">
            <img src={logo} alt="logo" className="w-32 h-20" />
            <span className="absolute bottom-0 right-0 text-lg font-bold capitalize text-lime-400">
              Gym
            </span>
          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify `}>
            we aren't average fitness club we offer a feeling that will redefine
            what you've always thought a fitness club should look and feel like
          </p>
          <div className="flex justify-evenly ">
            <img src={facebook} alt="fb" className="w-8h-4" />
            <img src={instagram} alt="insta" className="w-8h-4" />
            <img src={linkedin} alt="linkedin" className="w-8h-4" />
            <img src={twitter} alt="twitter" className="w-8h-4" />
          </div>
        </div>
        <div>
          <Heading title="our classes " />

          <div className="text-center">
            {classes.map((cname) => {
              return (
                <h3
                  key={cname}
                  className="text-white font-bold text-xl capitalize hover:text-lime-300 mt-3"
                >
                  {cname}
                </h3>
              );
            })}
          </div>
        </div>
        <div>
          <Heading title="timings" />
          <div className="text-center">
            {timings.map((tdetails) => {
              return (
                <h3
                  key={tdetails}
                  className="text-white font-bold text-xl hover:text-lime-400 mt-3 even:text-lime-700"
                >
                  {tdetails}
                </h3>
              );
            })}
          </div>
        </div>
      </section>
      <h1 className="text-white text-center m-3">
        {" "}
        Privacy Policy | © 2023 Warriors Gym Design by Mahesh dharapureddy
      </h1>
    </footer>
  );
};

export default Footer;
