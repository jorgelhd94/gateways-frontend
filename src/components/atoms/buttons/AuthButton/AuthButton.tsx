import React, { ReactNode } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AuthButtonProps = {
  type: "button" | "submit" | "reset";
  isLoading: boolean;
  children: ReactNode;
};

const AuthButton = (props: AuthButtonProps) => {
  return (
    <button
      className="inline-block rounded font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full"
      type={props.type}
      disabled={props.isLoading}
    >
      {props.isLoading && (
        <FontAwesomeIcon icon={faCircleNotch} className="mr-2 fa-spin" />
      )}
      {props.children}
    </button>
  );
};

export default AuthButton;
