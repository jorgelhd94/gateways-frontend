import React, { ReactNode } from "react";

const CardContainer = (props: { children: ReactNode }) => {
  return (
    <div className="flex flex-col my-4 px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
      {props.children}
    </div>
  );
};

export default CardContainer;
