import axios from "axios";

const options = {
  method: "GET",
  url: "https://musclewiki.p.rapidapi.com/exercises/attributes",
  headers: {
    "X-RapidAPI-Key": "c342e770d2msh7b5694a311c25bfp144f03jsn999f49ae550e",
    "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
  },
};

async function exerciseoptions() {
  try {
    const res = await axios(options);

    return await res.data;
  } catch (error) {
    console.error(error);
  }
}

export default exerciseoptions;
