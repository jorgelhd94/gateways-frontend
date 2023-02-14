import React from "react";
import { Link, Outlet } from "react-router-dom";
import IconButton from "../../components/atoms/buttons/IconButton/IconButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import GatewayTable from "../../components/molecules/Gateways/GatewayTable/GatewayTable";

const GatewaysPage = () => {
  return (
    <div className="mx-4 mb-2">
      <Link to="/gateways/create">
        <IconButton type="success" icon={faPlus} showIcon={true}>
          New Gateway
        </IconButton>
      </Link>
      <CardContainer>
        <div className="text-xl font-light text-gray-600 sm:text-2xl">
          Manage Gateways
        </div>
        <GatewayTable />
      </CardContainer>
    </div>
  );
};

export default GatewaysPage;
