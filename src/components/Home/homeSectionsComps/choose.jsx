import styles, { layout } from "../../../constants/style";
import Heading from "../../../utils/heading";
import why from "../../../assets/Home/why.png";
const Choose = () => {
  return (
    <section>
      <Heading title="Only Choose Us, why?" />
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={why}
            alt="bill-image "
            className="h-[500px] w-[70%] object-fill"
          />
        </div>
        <aside className={layout.sectionInfo}>
          <h1 className={`capitalize ${styles.heading2} mt-10 sm:mt-1`}>
            we Provide you muscle memory connective training
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            we aren't a average fitness club, we are result oriented and
            confident on who we are and what we Train at our fitness center, we
            are dedicated to helping you achieve the body of your dreams. Our
            expert trainers and nutritionists will work with you to create a
            personalized fitness and nutrition plan that helps you reach your
            specific goals.
          </p>
          <div className="my-6 flex cursor-pointer">
            {/* <img src={apple} alt="apple App store" />
            <img src={google} alt=" google app store" /> */}
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Choose;
