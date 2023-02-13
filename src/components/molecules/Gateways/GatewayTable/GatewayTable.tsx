import React, { useState } from "react";
import EmptyList from "../../../atoms/Messages/EmptyList/EmptyList";
import FetchError from "../../../atoms/Messages/FetchError/FetchError";
import TableSkeleton from "../../../atoms/Table/TableSkeleton/TableSkeleton";
import { useSelector } from "react-redux";
import { userSelectState } from "../../../../store/reducers/user.reducer";
import { notify } from "../../../../utils/notifications/notify";
import { getAxiosError } from "../../../../utils/axios/getAxiosError";
import HttpAdapter from "../../../../utils/HttpAdapter";

const GatewayTable = () => {
  const httpAdapter = HttpAdapter.getInstance();
  const { token, user } = useSelector((state: any) =>
    userSelectState(state.userReducer)
  );
  const headerList = ["Serial", "Name", "IPv4", "Devices", ""];
  const [fetchingData, setFetchingData] = useState(false);
  const [showError, setShowError] = useState(false);

  const getData = async () => {
    setFetchingData(true);
    setShowError(false);

    // await httpAdapter.get('gateways')
    //   .then((result) => {
    //     setContentList([...result.data.listAll]);
    //   })
    //   .catch((error) => {
    //     setShowError(true);
    //     const message = getAxiosError(error);
    //     notify(message, "error");
    //   });

    setFetchingData(false);
  };
  return (
    <div>
      {/* <EmptyList /> */}
      {/* <FetchError /> */}
      {/* <TableSkeleton/> */}
    </div>
  );
};

export default GatewayTable;
