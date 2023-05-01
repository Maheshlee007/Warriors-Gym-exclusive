import React from "react";
import PageHead from "../../utils/pageheader";
import Heading from "../../utils/heading";
import styles from "../../constants/style";
import Footer from "../Footer/footer";

const GallerySection = ({ search }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    console.log(current.scrollLeft);
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-primary text-white">
      <section
        className={`${styles.marginY} ${styles.paddingX} w-full h-full flex sm:flex-row flex-col gap-5 `}
      >
        <section className=" sm:w-[30vw] m-3">
          <p className="font-poppins text-zinc-400 text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fugiat nisi, minus
            voluptatem porro explicabo blanditiis quis quo quae excepturi
            asperiores.
          </p>
        </section>
        <div className="relative sm:w-[60vw]  border-2 rounded-xl py-3 border-lime-400 snap-x">
          <div
            className="w-full h-[300px] rounded-lg space-x-4 flex overflow-x-scroll
             [-ms-overflow-style: none] [scrollbar-width: none] gallery snap-end"
            ref={scrollRef}
          >
            {[1, 2, 3, 4, 5, 6].map((image, i) => (
              <img
                src={`https://source.unsplash.com/random/?${search} ${i}`}
                alt="gallery_image"
                className="rounded-3xl p-3 w-[240px]"
              />
            ))}
          </div>
          <div className="">
            <button
              className="  absolute top-1/2 text-2xl"
              onClick={() => scroll("left")}
            >
              ⬅️
            </button>
            <button
              className="absolute right-0 top-1/2 text-2xl "
              onClick={() => scroll("right")}
            >
              ➡️
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <PageHead title="Gallery" />
      <Heading title="top noch equipment" />
      <GallerySection search="Gym equipment " />
      <Heading title="Gym clubs" />
      <GallerySection search="Gym-Clubs " />
      <Heading title="Trainers" />
      <GallerySection search="gym" />
      <Footer />
    </div>
  );
};

export default Gallery;
