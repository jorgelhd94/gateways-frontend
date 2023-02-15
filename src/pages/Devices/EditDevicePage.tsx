import React from "react";
import CardContainer from "../../components/atoms/CardContainer/CardContainer";
import IconButton from "../../components/atoms/Buttons/IconButton/IconButton";
import { Link, useLoaderData } from "react-router-dom";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import DeviceForm from "../../components/molecules/Devices/DeviceForm/DeviceForm";
import { IGateway } from "../../interfaces/IGateway";
import { IDevice } from "../../interfaces/IDevice";

const EditDevicePage = () => {
  const { gateways } = useLoaderData() as { gateways: IGateway[], device: IDevice };
  return (
    <>
      <div className="mx-4 mb-2">
        <Link to="/devices">
          <IconButton type="primary" icon={faServer} showIcon={true}>
            Manage Devices
          </IconButton>
        </Link>
        <CardContainer>
          {/* <GatewayForm isEdit={props.isEdit} /> */}
          <DeviceForm listGateways={gateways} isEdit/>
        </CardContainer>
      </div>
    </>
  );
};

export default EditDevicePage;
