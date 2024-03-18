import React from "react";

export const InputData = (prop) => {
  return (
    <>
      <label htmlFor="">
        <input name={prop.firstname} type={prop.type} />
      </label>
    </>
  );
};
