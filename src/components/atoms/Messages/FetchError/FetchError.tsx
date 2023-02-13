import React from "react";
import FecthErrorImg from '../../../../assets/fetchError.svg'

const FetchError = () => {
  return (
    <div className="flex relative flex-col items-center">
      <img src={FecthErrorImg} width={400} />
      <h1 className="w-full text-center text-2xl absolute bottom-6">
        Sorry!! An unexpected error has occurred!!
      </h1>
    </div>
  );
};

export default FetchError;
