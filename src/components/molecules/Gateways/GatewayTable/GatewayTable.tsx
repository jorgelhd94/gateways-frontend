import React, { useEffect, useState } from "react";
import EmptyList from "../../../atoms/Messages/EmptyList/EmptyList";
import FetchError from "../../../atoms/Messages/FetchError/FetchError";
import TableSkeleton from "../../../atoms/Table/TableSkeleton/TableSkeleton";
import { useSelector } from "react-redux";
import { userSelectState } from "../../../../store/reducers/user.reducer";
import { notify } from "../../../../utils/notifications/notify";
import { getAxiosError } from "../../../../utils/axios/getAxiosError";
import HttpAdapter from "../../../../utils/HttpAdapter";
import { IGateway } from "../../../../interfaces/IGateway";

const GatewayTable = () => {
  const headerList = ["Serial", "Name", "IPv4", "Devices", ""];
  const [fetchingData, setFetchingData] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contentList, setContentList] = useState<IGateway[] | []>([]);

  return (
    <div>
      {/* <EmptyList /> */}
      {/* <FetchError /> */}
      {/* <TableSkeleton/> */}
    </div>
  );
};

export default GatewayTable;
