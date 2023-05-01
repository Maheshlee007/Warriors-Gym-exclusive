import styles from "../../../constants/style";
import { discount, bgHero } from "../../../assets";
import Button from "../../../utils/Button";
import hero from "../../../assets/Home/hero3.jpeg";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} overflow-x-hidden`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}
      >
        <div className="flex flex-row items-center py-[3px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[48px] h-[48px]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-lime-300 font-extrabold">39.99%</span>{" "}
            Discount For &nbsp;
            <span className="text-lime-400 font-semibold">1 year</span> Training
            plan
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full uppercase">
          <h1
            className="flex-1 font-poppins font-semibold  
          text-[52px] text-white leading-normal "
          >
            Make Yourself
            <br />
            <span className="text-lime-500 sm:text-[64px]">Stronger</span> than
          </h1>
        </div>
        <h1
          className="font-poppins font-semibold  text-[52px]
         text-white ss:leading-[1] leading-normal w-full"
        >
          your <span className="text-lime-500 sm:text-[64px]">Excuses</span>
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 captilise`}>
          Our team of expert Trainers uses a science based methodology to
          identify a training Plan fits you. Moreover Exercise delivers oxygen
          and nutrients toyour tissues and helps your cardiovascular system work
          more efficiently and keeps you healthy.
        </p>
        <div className="cursor-pointer  mt-3">{<Button text="Join Now" />}</div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 mr-3   relative `}
      >
        <img
          src={hero}
          alt="image"
          className="hover:grayscale-0 cursor-pointer
            grayscale w-full object-cover z-[5]"
        />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
        {/* <div className="hover:hidden absolute z-[110] w-[80%] h-[80%] rounded-full white__gradient bottom-40 left-0" /> */}
      </div>
    </section>
  );
};

export default Hero;
