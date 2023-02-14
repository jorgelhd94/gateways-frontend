import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import DeviceTable from "../../components/molecules/Devices/DeviceTable/DeviceTable";

const DevicePage = () => {
  return (
    <div className="mx-4 mb-2">
      <Link to="/devices/create">
        <IconButton type="success" icon={faPlus} showIcon={true}>
          New Device
        </IconButton>
      </Link>
      <CardContainer>
        <div className="text-xl font-light text-gray-600 sm:text-2xl">
          Manage Devices
        </div>
        <DeviceTable />
      </CardContainer>
    </div>
  );
};

export default DevicePage;
