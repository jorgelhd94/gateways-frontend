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
import { useLoaderData, useNavigate } from "react-router-dom";
import TDElement from "../../../atoms/Table/TDElement/TDElement";
import BadgeElement from "../../../atoms/BadgeElement/BadgeElement";
import IconButton from "../../../atoms/Buttons/IconButton/IconButton";
import {
  faEye,
  faPencil,
  faServer,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import SimpleTable from "../../../atoms/Table/SimpleTable/SimpleTable";
import { Link } from "react-router-dom";
import formatDate from "../../../../utils/formatDate";

const DeviceTable = (props: { gateway?: IGateway }) => {
  let headerList = ["UID", "Vendor", "Status", "Created", "Gateway", ""];

  if (props) {
    headerList = ["UID", "Vendor", "Status", "Created", ""];
  }

  const { token } = useSelector((state: any) =>
    userSelectState(state.userReducer)
  );
  const navigate = useNavigate();

  //   const deleteGateway = async (_id: string) => {
  //     if (window.confirm("Are you sure?")) {
  //       const httpAdapter = HttpAdapter.getInstance();
  //       await httpAdapter
  //         .delete("gateways/" + _id, {}, token)
  //         .then(() => {
  //           notify("The gateway was removed correctly", "success");
  //           navigate("/gateways");
  //         })
  //         .catch((error: any) => {
  //           const message = getAxiosError(error);
  //           notify(message, "error");
  //         });
  //     }
  //   };

  // const deleteDevice = async (id) => {
  //     if (window.confirm('Are you sure?')) {
  //       setFetchingData(true);
  //       const removeDevice = httpsCallable(functions, 'device-delete');
  //       await removeDevice({ id })
  //         .then(() => {
  //           getData();
  //           toast.success('The device was removed correctly');
  //         })
  //         .catch((error) => {
  //           const message = error.message;
  //           toast.error(message);
  //         });
  //       setFetchingData(false);
  //     }
  //   };

  const transformData = () => {
    return props.gateway?.devices.map((data, row) => {
      return (
        <tr key={row}>
          <TDElement>{data.uid}</TDElement>
          <TDElement>{data.vendor}</TDElement>
          <TDElement>
            <BadgeElement type={data.status === "online" ? "success" : "sad"}>
              {data.status}
            </BadgeElement>
          </TDElement>
          <TDElement>{formatDate(data.dateCreated)}</TDElement>
          {!props.gateway && (
            <TDElement>
              <IconButton type="primary" icon={faServer} showIcon={true} />
            </TDElement>
          )}
          <TDElement>
            <span className="flex gap-2">
              <IconButton type="info" icon={faEye} showIcon={true} />
              <IconButton type="success" icon={faPencil} showIcon={true} />
              <IconButton type="danger" icon={faTrash} showIcon={true} />
            </span>
          </TDElement>
        </tr>
      );
    });
  };

  const tableComponent = () => {
    let component;

    component =
      props.gateway?.devices.length === 0 ? (
        <EmptyList />
      ) : (
        <SimpleTable headerList={headerList} contentList={transformData()} />
      );

    return component;
  };

  return <div>{tableComponent()}</div>;
};

export default DeviceTable;
