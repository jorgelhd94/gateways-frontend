import React, { ReactNode } from "react";
import FecthErrorImg from '../../../../assets/fetchError.svg'

const FetchError = (props: {children: ReactNode}) => {
  return (
    <div className="flex relative flex-col items-center">
      <img src={FecthErrorImg} width={400} />
      <h1 className="w-full text-center text-2xl absolute top-[90%]">
        {props.children}
      </h1>
    </div>
  );
};

export default FetchError;
