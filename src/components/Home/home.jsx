import Footer from "../Footer/footer";
import Pricing from "../Pricings/Pricing";
import About from "./homeSectionsComps/KnowUs";
import Testimonials from "./homeSectionsComps/Testimonials";
import Choose from "./homeSectionsComps/choose";
import Hero from "./homeSectionsComps/hero";
import OurProgramms from "./homeSectionsComps/ourProgramms";
import Trainers from "./homeSectionsComps/trainers";

const Home = () => {
  return (
    <div className=" z-[-10] text-white">
      <Hero />
      <OurProgramms />
      <About />
      <Choose />
      <Trainers />
      <Testimonials />
      <Pricing exclude />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
