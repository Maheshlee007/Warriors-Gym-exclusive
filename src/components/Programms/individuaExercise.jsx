import React, { useState, useEffect, useCallback } from "react";

// import styles from "../../constants/style";
import axios from "axios";
import Footer from "../Footer/footer";
import Heading from "../../utils/heading";
import { Outlet, useParams } from "react-router-dom";

const options = {
  method: "GET",
  url: "https://musclewiki.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": "c342e770d2msh7b5694a311c25bfp144f03jsn999f49ae550e",
    "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
  },
};

const Exercise = () => {
  const [exercises, setexercises] = useState([]);

  const { id } = useParams();
  const fetchxercises = useCallback(async () => {
    const res = await axios(options);
    setexercises(res.data);
    // console.log(res.data);
  }, []);

  useEffect(() => {
    fetchxercises();
  }, []);
  console.log("received id", typeof id);
  return (
    <div className={` text-white `}>
      <div className="flex w-full sm:flex-row flex-col flex-wrap gap-8 m-5">
        {/* <h1>entered</h1> */}
        {exercises.lenth !== 0 &&
          exercises
            .filter((exr) => Number(id) === exr.id)
            .map((exr, i) => {
              const ytd = exr.youtubeURL.split("/").pop();
              //    console.log("ending",ytd);
              const url = `https://www.youtube.com/watch?v=${ytd}`;
              return (
                <>
                  <div className="sm:w-[60%]  w-[90%] ">
                    <Heading title={exr.exercise_name} />

                    <video
                      src={exr.videoURL[0]}
                      className="rounded-2xl"
                      controls
                    ></video>
                  </div>
                  <div className="mx-3 px-8 text-center sm:text-start sm:w-[30vw] space-y-4">
                    <h1>level :- {exr.Difficulty}</h1>
                    <h1> Equipmet Required :- {exr.Category} </h1>
                    {ytd && (
                      <h1>
                        Addiitional exercises from Youtube
                        <a
                          href={url}
                          target="_blank"
                          className="text-lime-500 ml-2"
                        >
                          {exr.exercise_name}
                        </a>
                      </h1>
                    )}
                    <h1 className="text-lime-500 uppercase font-bold text-xl">
                      steps to perform exercise
                    </h1>
                    <div className="text-justify space-y-4">
                      {exr.steps.map((step) => (
                        <h2>🔰{step}</h2>
                      ))}
                    </div>
                    {/* <Outlet/> */}
                  </div>
                </>
              );
            })}
      </div>
      <Footer />
    </div>
  );
};

export default Exercise;
