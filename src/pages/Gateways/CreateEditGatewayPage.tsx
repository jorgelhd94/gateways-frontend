import React from "react";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { Link } from "react-router-dom";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import GatewayForm from "../../components/molecules/Gateways/GatewayForm/GatewayForm";

const CreateEditGatewayPage = (props: { isEdit?: boolean }) => {
  return (
    <>
      <div className="mx-4 mb-2">
        <Link to="/gateways">
          <IconButton type="primary" icon={faServer} showIcon={true}>
            Manage Gateways
          </IconButton>
        </Link>
        <CardContainer>
          <GatewayForm isEdit={props.isEdit} />
        </CardContainer>
      </div>
    </>
  );
};

export default CreateEditGatewayPage;
