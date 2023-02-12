import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import ErrorMessage from "../../Messages/ErrorMessage/ErrorMessage";

type IconInputProps = {
  children: ReactNode;
  icon: IconDefinition;
  error: string;
};

const IconInput = (props: IconInputProps) => {
  return (
    <div className="my-6">
      <div className="flex relative ">
        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          <FontAwesomeIcon icon={props.icon} />
        </span>

        {props.children}
      </div>

      <ErrorMessage>{props.error}</ErrorMessage>
    </div>
  );
};

export default IconInput;
