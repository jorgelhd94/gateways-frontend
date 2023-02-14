import React from "react";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { Link, useLoaderData } from "react-router-dom";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { IGateway } from "../../interfaces/IGateway";

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
              Serial Number: <span className="font-normal">{gateway.serialNumber}</span>
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
          <div className="text-md text-gray-600 sm:text-lg  mb-2">
            <p className="font-medium">
              Devices: <span className="font-normal">{gateway.devices.length}</span>
            </p>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default DetailsGatewayPage;
