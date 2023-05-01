import styles from "../../constants/style";
import Heading from "../../utils/heading";
import PageHead from "../../utils/pageheader";
import { facebook, instagram, linkedin, twitter, logo } from "../../assets";

const Contact = () => {
  return (
    <div className="bg-primary text-white">
      <PageHead title="Contact " />

      <section
        className={`${styles.marginY} ${styles.paddingX} mt-20 flex sm:justify-between flex-wrap item-center gap-9 `}
      >
        <div className="w-[45%]">
          <Heading title="Any Information you need" />
          <p className="my-12 p-5">
            we're total nerds when it comes to design personal programmes. We
            use Athletic based training model and make sure to 'dot every i and
            cross every t' so that your progamme rock solid and worth every
            second so that you can spend your time efficiently and effectively
            in GYM....
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  text-justify space-x-3">
            <address>
              <h1 className="text-xl text-lime-400 font-bold">
                Clean City,INDIA{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                quae.
              </p>
            </address>
            <section>
              <h1 className="text-xl text-lime-400 font-bold">Opening Hours</h1>
              <p>
                24 / 7 <br /> over 50+ schedule per week
              </p>
            </section>
            <section>
              <h1 className="text-xl text-lime-400 font-bold">Contact Info</h1>
              <pre>
                +91 -1234554321 <br />
                WorriorGym@gmail.com
              </pre>
            </section>
            <section>
              <h1 className="text-xl text-lime-400 font-bold">Foolow Us On</h1>
              <div className="flex justify-between mt-4">
                <img src={facebook} alt="fb" className="w-8h-4" />
                <img src={instagram} alt="insta" className="w-8h-4" />
                <img src={linkedin} alt="linkedin" className="w-8h-4" />
                <img src={twitter} alt="twitter" className="w-8h-4" />
              </div>
            </section>
          </div>
        </div>

        <div
          className={`${styles.marginY} p-6 ${styles.paddingX} w-[50%] border-2 border-lime-400 relative`}
        >
          <h2 className="text-black font-bold bg-lime-400 rounded-lg w-[30%] absolute -top-3 left-3 pl-4">
            Let us, Know You
          </h2>
          <form autoComplete={false}>
            <div className="relative mt-5 ">
              <input
                type="text "
                id="fname"
                name="first name"
                className="w-full bg-transparent outline-none border-b-2 peer  border-lime-400"
                required
              />
              <label className="absolute left-0 peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:text-lime-500/70 transition-all">
                Name
              </label>
            </div>
            <div className="relative mt-5">
              <input
                type="text"
                id="Lname"
                name="last name"
                required
                className="w-full bg-transparent outline-none peer focus border-b-2 border-lime-400 peer-focus:text-lime-500/70 "
              />
              <label className="absolute left-0 peer-focus:-translate-y-5 transition-all  peer-valid:-translate-y-5">
                Email
              </label>
            </div>
            <div className="relative mt-5">
              <label>Your Thoughts On Us ⚡💪🏻</label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="5"
                className="w-full bg-transparent outline-none border-b-2 shadow-lg hover:shadow-lime-300 resize-none focus:border-l border-lime-400"
              ></textarea>
              <button
                type="submit "
                className="text-black bg-lime-300 p-3 rounded-xl font-bold hover:animate-pulse mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
