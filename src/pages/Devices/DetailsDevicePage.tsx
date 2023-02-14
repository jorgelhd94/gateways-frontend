import React from "react";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { Link, useLoaderData } from "react-router-dom";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { IDevice } from "../../interfaces/IDevice";
import formatDate from "../../utils/formatDate";
import BadgeElement from "../../components/atoms/BadgeElement/BadgeElement";

const DetailsDevicePage = () => {
  const { device } = useLoaderData() as { device: IDevice };

  return (
    <div className="mx-4 mb-2">
      <Link to="/devices">
        <IconButton type="primary" icon={faServer} showIcon={true}>
          Manage devices
        </IconButton>
      </Link>
      <CardContainer>
        <>
          <div className="flex flex-row flex-nowrap justify-between">
            <div className="text-xl font-light text-gray-600 sm:text-2xl  mb-6">
              Details Device
            </div>
            <Link to={"/gateways/" + device.gatewayId}>
              <a>
                <IconButton type="primary" icon={faServer} showIcon={true}>
                  Gateway
                </IconButton>
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <div className="text-md text-gray-600 sm:text-lg  mb-2">
              <p className="font-medium">
                UID: <span className="font-normal">{device.uid}</span>
              </p>
            </div>
            <div className="text-md text-gray-600 sm:text-lg  mb-2">
              <p className="font-medium">
                Vendor: <span className="font-normal">{device.vendor}</span>
              </p>
            </div>
            <div className="text-md text-gray-600 sm:text-lg  mb-2">
              <p className="font-medium">
                Created:{" "}
                <span className="font-normal">
                  {formatDate(device.dateCreated)}
                </span>
              </p>
            </div>
            <div className="text-md text-gray-600 sm:text-lg  mb-2">
              <p className="font-medium">
                Status:{" "}
                <span className="font-normal">
                  <BadgeElement
                    type={device.status === "online" ? "success" : "sad"}
                  >
                    {device.status}
                  </BadgeElement>
                </span>
              </p>
            </div>
          </div>
        </>
      </CardContainer>
    </div>
  );
};

export default DetailsDevicePage;
