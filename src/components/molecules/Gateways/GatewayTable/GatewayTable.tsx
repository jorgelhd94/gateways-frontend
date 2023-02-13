import React from "react";
import EmptyList from "../../../atoms/Messages/EmptyList/EmptyList";
import FetchError from "../../../atoms/Messages/FetchError/FetchError";

const GatewayTable = () => {
  return (
    <div>
      {/* <EmptyList /> */}
      <FetchError />
    </div>
  );
};

export default GatewayTable;
