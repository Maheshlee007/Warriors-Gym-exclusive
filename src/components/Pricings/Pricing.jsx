import PageHead from "../../utils/pageheader";
import styles from "../../constants/style";
import { premium, standard, starter } from "../../assets";
import Button from "../../utils/Button";
import Heading from "../../utils/heading";
import Footer from "../Footer/footer";
import Stripe from "../payments/paymentStripe";

const features = [
  "Unlimited Club ACCESS",
  "Diet Plan",
  "individual programme plan",
  "6 days a week",
  "hot sona & bath facility",
  "personal locker",
  "Health and Fitness Tips",
  "lipid profile check",
];
const plans = [
  {
    name: "starters plan",
    bg: starter,
    price: "$ 49 /Month",
    border: "border-lime-300",
  },
  {
    name: "standard plan",
    bg: standard,
    price: "$ 99 /Month",
    border: "border-slate-400",
  },
  {
    name: "premium plan",
    bg: premium,
    price: "$ 129 /Month",
    border: "border-amber-300",
  },
];

const Pricing = ({ exclude }) => {
  return (
    <div className="bg-primary text-white ">
    {exclude ? null:  <PageHead title="Pricing" />}
      <Heading title="Exclusive pricing" />

      <section
        className={`${styles.marginY} ${styles.paddingX} mt-20 ${styles.flexbetween} gap-8 font-poppins`}
      >
        {plans.map((plan) => {
          const amt = Number(plan.price.split(" ")[1]);
          return (
            <div
              key={plan.name}
              className="space-t-5 sm:w-[30%] text-white  rounded-2xl"
            >
              <div className="relative rounded-sm">
                <img
                  src={plan.bg}
                  className="w-full h-[150px] rounded-t-xl opacity-90 contrast-125"
                />
                <h1 className="absolute left-[20%] top-[40%] text-black text-2xl font-bold capitalize">
                  {plan.name}
                </h1>
              </div>
              <div
                className={`p-4 space-y-2 border-2 border-t-0 rounded-b-xl ${plan.border}`}
              >
                <h1 className="text-xl underline decoration-lime-400 underline-offset-8">
                  {plan.price}
                </h1>
                {features.map((feature) => {
                  return <p key={feature}>✔️ {feature}</p>;
                })}

                <Stripe
                  amount={amt}
                  desc={`${plan.name} ${plan.price}`}
                  border={`${plan.border}`}
                />
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
