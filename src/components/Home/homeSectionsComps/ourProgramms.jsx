import { Fragment } from "react";
import { prgms } from "../../../constants";
import styles from "../../../constants/style";
import Heading from "../../../utils/heading";

const OurProgramms = () => {
  const PROGRESSION_img = (
    <img src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/combo-chart.png" />
  );
  return (
    <>
      <Heading title="Our Programms" />

      <div className="sm:flex  flex-col sm:m-5 sm:flex-row mx-auto w-[60%] sm:w-full  sm:justify-evenly mb-11 ">
        {prgms.map((prgm) => (
          <div
            key={`${prgm.id}2`}
            className="relative w-[300px]  h-[280px] mt-8 cursor-pointer shadow-xl  shadow-[#84cc16]"
          >
            <div className="flex flex-col gap-6 card p-6  w-full h-full left-0 ">
              <h2 className="font-semibold text-xl ">{prgm.title}</h2>
              <p className={`text-justiify ${styles.paragraph} text-sm`}>
                {prgm.text}
              </p>
            </div>
            <div
              className="bg-[#84cc16] w-[100px]
              h-[100px] -top-5 right-4  rounded-full blur-1 absolute "
            >
              <img src={prgm.img} alt={prgm.title} className="ml-4 mt-3" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurProgramms;
