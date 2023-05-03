import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import { Filter } from "./Filter";
import { Link } from "react-router-dom";

const options = {
  method: "GET",
  url: "https://musclewiki.p.rapidapi.com/exercises/attributes",
  headers: {
    "X-RapidAPI-Key": "c342e770d2msh7b5694a311c25bfp144f03jsn999f49ae550e",
    "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
  },
};

const url = "https://musclewiki.p.rapidapi.com/exercises";

const Programms = () => {
  const [fitnessData, setfitnessData] = useState({});
  const [params, setParams] = useState({ categories: "Barbell" });
  // const [config, setconfig] = useState(options);
  const [exercises, setexercises] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await axios(options);
    setfitnessData(res.data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchxercises = useCallback(async () => {
    const res = await axios({ ...options, url });
    setexercises(res.data);
  }, []);

  useEffect(() => {
    fetchxercises();
  }, []);
  // console.log("in ", params, exercises);
  {
    return (
      <div className={` text-white `}>
        <Filter fitnessData={fitnessData} setParams={setParams} />
        {/* <pre>{JSON.stringify(params, null, 2)}</pre> */}
        <div className="flex sm:w-full w-screen flex-wrap gap-10 sm:gap-8 m-5">
          {/* <h1>entered</h1> */}
          {exercises.lenth !== 0 &&
            exercises
              .filter((exr) => params.categories === exr.Category)
              .map((exr, i) => {
                if (
                  i < 50 &&
                  (params.muscles == exr.target.Primary ||
                    params.difficulties == exr.Difficulty ||
                    params.forces == exr.Force)
                ) {
                  return (
                    <div className="sm:w-[30%] h-[40%]  text-xl  " key={exr.id}>
                      <Link to={`/programms/${exr.id}`}>
                        <h1>{exr.exercise_name}</h1>
                        <video
                          src={exr.videoURL[0]}
                          className="rounded-2xl mt-3 shadow-xl hover:shadow-lime-500"
                        ></video>
                      </Link>
                    </div>
                  );
                }
              })}
          {/* <h1>closed</h1> */}
        </div>
        {/* <Outlet /> */}
        {/* <Route path="/programms/:id" element={<Exercise />} /> */}
      </div>
    );
  }
};

export default Programms;
