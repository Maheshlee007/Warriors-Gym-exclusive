import styles, { layout } from "../../../constants/style";
import { trainersDetails } from "../../../constants";
import { facebook, instagram, linkedin, twitter } from "../../../assets";
import Heading from "../../../utils/heading";
const Trainers = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <Heading title="Professional Trainers" />
      <section className="px-8  sm:flex flex-col gap-8 w-full sm:flex-row justify-evenly mt-3">
        {trainersDetails.map((td) => {
          return (
            <div
              key={td.id}
              className="w-[300px] relative  text-white card hover:border-lime-300 hover:border-8 mt-10"
            >
              <div className="w-full h-full">
                <img src={td.pic} alt={td.name} className="object-" />
              </div>

              <div className="space-x-4 flex absolute bottom-0 cursor-pointer">
                <div className=" text-white font-bold  my-3 ">
                  <h3>{td.name}</h3>
                  <p>{td.coaching}</p>
                </div>
                <img src={facebook} alt="fb" className="w-8h-4" />
                <img src={instagram} alt="insta" className="w-8h-4" />
                <img src={linkedin} alt="linkedin" className="w-8h-4" />
                <img src={twitter} alt="twitter" className="w-8h-4" />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Trainers;
