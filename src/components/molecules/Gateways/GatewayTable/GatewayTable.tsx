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
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import SimpleTable from "../../../atoms/Table/SimpleTable/SimpleTable";
import { Link } from "react-router-dom";

const GatewayTable = () => {
  const headerList = ["Serial", "Name", "IPv4", "Devices", ""];
  const { gateways } = useLoaderData() as { gateways: IGateway[] };
  const { token } = useSelector((state: any) =>
    userSelectState(state.userReducer)
  );
  const navigate = useNavigate();

  const deleteGateway = async (_id: string) => {
    if (window.confirm("Are you sure?")) {
      const httpAdapter = HttpAdapter.getInstance();
      await httpAdapter
        .delete("gateways/" + _id, {}, token)
        .then(() => {
          notify("The gateway was removed correctly", "success");
          navigate("/gateways");
        })
        .catch((error: any) => {
          const message = getAxiosError(error);
          notify(message, "error");
        });
    }
  };

  const transformData = () => {
    return gateways.map((data, row) => {
      return (
        <tr key={row}>
          <TDElement>{data.serialNumber}</TDElement>
          <TDElement>{data.name}</TDElement>
          <TDElement>{data.ipAddress}</TDElement>
          <TDElement>
            <BadgeElement>{data.devices.length}</BadgeElement>
          </TDElement>
          <TDElement>
            <span className="flex gap-2">
              <IconButton type="info" icon={faEye} showIcon={true} />
              <Link to={`/gateways/${data._id}/edit`}>
                <IconButton type="success" icon={faPencil} showIcon={true} />
              </Link>
              <IconButton
                type="danger"
                icon={faTrash}
                showIcon={true}
                click={() => deleteGateway(data._id)}
              />
            </span>
          </TDElement>
        </tr>
      );
    });
  };

  const tableComponent = () => {
    let component;

    component =
      gateways.length === 0 ? (
        <EmptyList />
      ) : (
        <SimpleTable headerList={headerList} contentList={transformData()} />
      );

    return component;
  };

  return <div>{tableComponent()}</div>;
};

export default GatewayTable;
