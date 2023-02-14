import HttpAdapter from "../../utils/HttpAdapter";
import { getAxiosError } from "../../utils/axios/getAxiosError";
import { notify } from "../../utils/notifications/notify";

const httpAdapter = HttpAdapter.getInstance();
const token = localStorage.getItem("user_token");

const getAllDevices = async () => {
  if (token) {
    const result = await httpAdapter
      .get("devices", {}, token)
      .then((response) => {
        return [...response.data];
      })
      .catch((error) => {
        const message = getAxiosError(error);
        notify(message, "error");
      });

    return result;
  }

  return [];
};

export { getAllDevices, };
