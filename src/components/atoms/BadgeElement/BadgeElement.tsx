import React, { ReactNode } from "react";

type BadgeElementProps = {
  type?: "primary" | "success" | "danger" | "sad";
  children: ReactNode;
};

const BadgeElement = (props: BadgeElementProps) => {
  const styles = {
    primary: "bg-blue-500",
    success: "bg-green-500",
    danger: "bg-red-500",
    sad: "bg-gray-500",
  };

  const defaultClass = "px-2 py-1 text-white rounded-full ";
  const typeClass = props.type
    ? defaultClass + styles[props.type]
    : defaultClass + styles["primary"];

  return (
    <>
      <span className={typeClass}>{props.children}</span>
    </>
  );
};

export default BadgeElement;
