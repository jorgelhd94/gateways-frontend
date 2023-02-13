import React, { ReactNode } from "react";

const TDElement = (props: { children: ReactNode }) => {
  return (
    <>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">{props.children}</p>
        </div>
      </td>
    </>
  );
};

export default TDElement;
