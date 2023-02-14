import React from "react";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { Link } from "react-router-dom";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import GatewayForm from "../../components/molecules/Gateways/GatewayForm/GatewayForm";

const CreatePage = () => {
  return (
    <>
      <div className="mx-4 mb-2">
        <Link to="/gateways">
          <IconButton type="primary" icon={faServer} showIcon={true}>
            Manage Gateways
          </IconButton>
        </Link>
        <CardContainer>
          <GatewayForm />
        </CardContainer>
      </div>
    </>
  );
};

export default CreatePage;
