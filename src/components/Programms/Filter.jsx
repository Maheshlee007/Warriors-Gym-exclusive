import React from "react";

export function Filter({ fitnessData, setParams }) {
  const handleDropdownChange = (key, selectedOptions) => {
    setParams((prevParams) => ({
      ...prevParams,
      [key]: selectedOptions[0],
    }));
  };

  return (
    <div className="w-full flex sm:flex-row flex-col gap-8 sm:justify-between text-white">
      {Object.entries(fitnessData).map(([key, options]) => (
        <div key={key}>
          <label className="uppercase text-xl mx-2 ">{key}: </label>
          <select
            className="text-lime-400 bg-transparent rounded-lg border-2 border-lime-400"
            onChange={(event) =>
              handleDropdownChange(
                key,

                Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                )
              )
            }
          >
            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-slate-500 text-white "
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
