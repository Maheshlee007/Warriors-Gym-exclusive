import headerbg from "../assets/about/PageHead.png";

const PageHead = ({ title }) => {
  return (
    <section className="w-full h-[300px] relative">
      <h1 className="text-lime-400 absolute top-1 uppercase left-1/2 font-bold [writing-mode:vertical-lr] [text-orientation:upright] tracking-[.5rem] text-2xl ">
        {title}
      </h1>

      <img
        src={headerbg}
        alt="background-img"
        className="w-full object-cover h-full"
      />
    </section>
  );
};

export default PageHead;
