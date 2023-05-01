import styles from "../../constants/style";
import Heading from "../../utils/heading";
import PageHead from "../../utils/pageheader";
import bg from "../../assets/about/imgbg.svg";
import run from "../../assets/about/run.png";
import Footer from "../Footer/footer";

const About = () => {
  return (
    <div className="bg-primary text-white">
      <PageHead title="About" />

      <section className={`${styles.marginY} ${styles.paddingX} mt-20`}>
        <Heading title="Let's know Who We Are" />
        <section
          className=" w-full h-full flex flex-col my-16 justify-between items-start 
        ss:flex-col sm:flex-row sm:mt-9"
        >
          <aside className="font-poppins  w-full ss:w-[80%] sm:w-[50%] space-y-10 relative">
            <h1 className={styles.heading2}>
              Science Based Training programme
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              At our Fitness Training Center, we are dedicated to helping you
              achieve the body of your dreams. Our expert trainers and
              nutritionists will work with you to create a personalized fitness
              and nutrition plan that helps you reach your specific goals.
            </p>
            <button className="bg-lime-gradient rounded-md text-white p-3 font-poppins font-normal mt-10">
              Get Started
            </button>
            <div className="absolute  w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute  w-[50%] h-[50%] -right-20 -bottom-20 blue__gradient" />{" "}
          </aside>
          <aside className="w-full sm:w-[40%] sm:m-0 overflow-hidden text-white ss:w-[80%] ss:self-end ss:mt-10 relative ">
            <img src={bg} alt="billing" className="w-[90%]  h-[500px] ml-10" />
            <img
              src={run}
              alt="billing"
              className=" absolute top-1 -left-4   h-[500px]"
            />
          </aside>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default About;
