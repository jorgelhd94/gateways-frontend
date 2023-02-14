import React from "react";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { Link, useLoaderData } from "react-router-dom";
import { faPlus, faServer } from "@fortawesome/free-solid-svg-icons";
import { IGateway } from "../../interfaces/IGateway";
import DeviceTable from "../../components/molecules/Devices/DeviceTable/DeviceTable";

const DetailsGatewayPage = () => {
  const { gateway } = useLoaderData() as { gateway: IGateway };

  return (
    <div className="mx-4 mb-2">
      <Link to="/gateways">
        <IconButton type="primary" icon={faServer} showIcon={true}>
          Manage Gateways
        </IconButton>
      </Link>
      <CardContainer>
        <div className="flex flex-col justify-start">
          <div className="text-xl font-light text-gray-600 sm:text-2xl  mb-6">
            Details Gateway
          </div>
          <div className="text-md text-gray-600 sm:text-lg  mb-2">
            <p className="font-medium">
              Serial Number:{" "}
              <span className="font-normal">{gateway.serialNumber}</span>
            </p>
          </div>
          <div className="text-md text-gray-600 sm:text-lg  mb-2">
            <p className="font-medium">
              Name: <span className="font-normal">{gateway.name}</span>
            </p>
          </div>
          <div className="text-md text-gray-600 sm:text-lg  mb-2">
            <p className="font-medium">
              IPv4: <span className="font-normal">{gateway.ipAddress}</span>
            </p>
          </div>
        </div>
      </CardContainer>

      <CardContainer>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="text-xl font-light text-gray-600 sm:text-2xl  mb-2">
            Devices
          </div>

          {gateway.devices.length < 10 && (
            <Link to={"/devices/create/" + gateway._id}>
              <IconButton type="success" icon={faPlus} showIcon={true}>
                Add device
              </IconButton>
            </Link>
          )}
        </div>

        <div className="flex flex-row">
          <div className="text-md font-bold text-gray-600  mb-2">
            Capacity: {gateway.devices.length}/10
          </div>
        </div>

        <DeviceTable gateway={gateway} />
      </CardContainer>
    </div>
  );
};

export default DetailsGatewayPage;
