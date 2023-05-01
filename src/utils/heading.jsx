import styles from "../constants/style";
import bgTitle from "../assets/Home/bg_title.svg";

const Heading = ({ title }) => {
  const text = title.split(" ");
  return (
    <div className="uppercase w-full my-3 relative  ">
      <h3 className={`${styles.heading2} absolute -top-2 left-8 text-[40px]`}>
        <span className="text-black"> {text[0]} </span>
        {text.slice(1).join(" ")}
      </h3>
      <img src={bgTitle} alt="background heading" className="  h-20 " />
    </div>
  );
};

export default Heading;
