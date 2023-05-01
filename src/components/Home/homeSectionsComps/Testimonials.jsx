import { quotes } from "../../../assets/index";

import styles, { layout } from "../../../constants/style";
import Heading from "../../../utils/heading";
import testimonial1 from "../../../assets/Home/testimonials1.png";

const Testimonials = () => {
  return (
    <section className={`${styles.marginY} ${styles.paddingX} mt-20 relative`}>
      <Heading title="testimonials" />
      <section
        className=" w-full h-full flex flex-col my-16 justify-between items-start 
        ss:flex-col sm:flex-row sm:mt-9 relative"
      >
        <aside className="font-poppins  w-full ss:w-[90%] sm:w-[50%] space-y-10 relative mr-8">
          <img src={quotes} alt="Quote start" />
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify `}>
            I've been a member of Warriors fitness Club for the past 1 Year and
            it has been an amazing experience. The trainers are knowledgeable
            and supportive, the equipment is top-notch, and the community of
            members is friendly and encouraging.The focus of smart lifiting is
            great and the individulized training proram meant that the every
            person is challenging themselves while still being able to cheer on
            everyone else! ilove it here and i finally got my unassited chin-up!
            with in 2week i have to give a special shout too Lee, who is the
            best. Let's meet in the gym soon.......
          </p>

          <img
            src={quotes}
            alt="Quote end "
            className="absolute sm:bottom-10 -bottom-10 right-0 opacity-70"
          />
          <h3 className="capitalize hidden sm:block font-semibold text-center text-2xl text-lime-400 shadow-sm shadow-white ">
            jake warren
          </h3>
        </aside>
        <aside
          className="w-full  sm:m-0 overflow-hidden  text-white ss:w-[70%] 
        ss:self-end ss:mt-10 relative rounded-lg"
        >
          <img
            src={testimonial1}
            alt="jake image"
            className="w-full h-[500px] grayscale hover:grayscale-[20%] hover:contrast-120"
          />
          <div className="absolute  w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute  w-[50%] h-[50%] -right-20 -bottom-20 blue__gradient" />{" "}
        </aside>
        <h3
          className="ss:absolute md:hidden mt-4 bottom-[7rem] tracking-[1rem] left-10 ss:[writing-mode:vertical-rl]   
        capitalize font-semibold text-center text-2xl text-lime-400  "
        >
          jake warren
        </h3>
      </section>
    </section>
  );
};

export default Testimonials;
