import HttpAdapter from "../../utils/HttpAdapter";
import { getAxiosError } from "../../utils/axios/getAxiosError";
import { notify } from "../../utils/notifications/notify";

const httpAdapter = HttpAdapter.getInstance();

const getAllGateways = async () => {
  const token = localStorage.getItem("user_token");
  if (token) {
    const result = await httpAdapter
      .get("gateways", {}, token)
      .then((response) => {
        return [...response.data];
      })
      .catch((error) => {
        const message = getAxiosError(error);
        notify(message, "error");
      });

    console.log(result);

    return result;
  }

  return [];
};
const getGatewayById = async (gatewayId: string) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    const result = await httpAdapter
      .get("gateways/" + gatewayId, {}, token)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        const message = getAxiosError(error);
        notify(message, "error");
      });

    return result;
  }

  return [];
};

export { getAllGateways, getGatewayById };
