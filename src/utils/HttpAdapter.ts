import axios from "axios";

class HttpAdapter {
  private static instance: HttpAdapter;

  public static getInstance(): HttpAdapter {
    if (!HttpAdapter.instance) {
      HttpAdapter.instance = new HttpAdapter();
    }

    return HttpAdapter.instance;
  }

  private static getAxiosInstance(token?: string) {
    const baseURL = import.meta.env.VITE_SERVER_URL;
    if (token)
      return axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${token}` },
      });

    return axios.create({ baseURL });
  }

  public sendRequest(
    method: "get" | "post" | "patch" | "delete",
    url: string,
    data?: any,
    config?: any,
    token?: string
  ): Promise<any> {
    const axiosInstance = HttpAdapter.getAxiosInstance(token);
    return axiosInstance[method](`${url}`, data, config);
  }

  public get(url: string, config?: any, token?: string) {
    return this.sendRequest("get", url, undefined, config, token);
  }

  public post(url: string, data?: any, config?: any, token?: string) {
    return this.sendRequest("post", url, data, config, token);
  }

  public patch(url: string, data?: any, config?: any, token?: string) {
    return this.sendRequest("patch", url, data, config, token);
  }

  public delete(url: string, config?: any, token?: string) {
    return this.sendRequest("delete", url, undefined, config, token);
  }
}

export default HttpAdapter;
