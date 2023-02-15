import React, { useEffect, useState } from "react";
import { IGateway } from "../../../../interfaces/IGateway";

type Props = {
  listGateways: IGateway[];
};

const SelectGatewaysInput = (props: Props) => {
  /* Create select options */
  const [listOptions, setListOptions] = useState([
    <option key={0} disabled>
      No elements
    </option>,
  ]);

  const createSelect = () => {
    if (props.listGateways.length > 0) {
      const list = props.listGateways.map((value) => {
        return (
          <option key={value._id} value={value._id}>
            {value.name} - {value.serialNumber}
          </option>
        );
      });
      const empty = <option key="empty" value=""></option>;
      setListOptions([empty, ...list]);
    }
  };

  useEffect(() => createSelect(), []);
  return <>{listOptions}</>;
};

export default SelectGatewaysInput;
