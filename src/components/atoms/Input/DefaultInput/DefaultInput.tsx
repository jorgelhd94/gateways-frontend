import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import ErrorMessage from "../../Messages/ErrorMessage/ErrorMessage";

type DefaultInputProps = {
  children: ReactNode;
  isValidating?: boolean;
  error: ReactNode;
};

const DefaultInput = (props: DefaultInputProps) => {
  return (
    <div className="mt-2 mb-6">
      <div className="flex relative ">
        <div className="flex flex-col relative ">{props.children}</div>

        {props.isValidating && (
          <div className="absolute top-2 right-2 text-blue-600">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          </div>
        )}
      </div>

      <ErrorMessage>{props.error}</ErrorMessage>
    </div>
  );
};

export default DefaultInput;
