import React, { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = (props: ErrorMessageProps) => {
  return <div className="text-left text-red-500">{props.children}</div>;
};

export default ErrorMessage;
