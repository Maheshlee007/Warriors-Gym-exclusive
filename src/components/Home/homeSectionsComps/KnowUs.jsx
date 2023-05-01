import styles, { layout } from "../../../constants/style";
import Heading from "../../../utils/heading";
import know_us from "../../../assets/Home/gymPic.png";

const About = () => {
  return (
    <section className={`${styles.marginY} ${styles.paddingX} mt-20`}>
      <Heading title="Let's know Who We Are" />
      <section
        className=" w-full h-full flex flex-col my-16 justify-between items-start 
        ss:flex-col sm:flex-row sm:mt-9"
      >
        <aside className="font-poppins  w-full ss:w-[80%] sm:w-[50%] space-y-10">
          <h1 className={styles.heading2}>Science Based Training programme</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            In a nutshell we are professionals who trains you based on
            scientifically qualified exercises so you can reach your goals
            quickly...Take your health and body to the next level with our
            comprehensive program designed to help you reach your fitness goals.
          </p>
          <button className="bg-lime-gradient rounded-md text-white p-3 font-poppins font-normal mt-10">
            Get Started
          </button>
        </aside>
        <aside className="w-full sm:w-[40%] sm:m-0 overflow-hidden text-white ss:w-[80%] ss:self-end ss:mt-10 relative">
          <img src={know_us} alt="billing" className="w-[90%] h-[500px]" />
          <div className="absolute  w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute  w-[50%] h-[50%] -right-20 -bottom-20 blue__gradient" />{" "}
        </aside>
      </section>
    </section>
  );
};

export default About;
