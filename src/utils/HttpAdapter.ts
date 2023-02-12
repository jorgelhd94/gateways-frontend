import { axiosApi } from "./axiosInstance";

class HttpAdapter {
  private static instance: HttpAdapter;

  public static getInstance(): HttpAdapter {
    if (!HttpAdapter.instance) {
      HttpAdapter.instance = new HttpAdapter();
    }

    return HttpAdapter.instance;
  }

  private static getAxiosInstance(useToken: boolean) {
    
    return axiosApi;
  }

  public sendRequest(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any,
    config?: any,
    useToken?: boolean
  ): Promise<any> {
    const axiosInstance = HttpAdapter.getAxiosInstance(useToken || false);
    return axiosInstance[method](`${url}`, data, config);
  }

  public get(url: string, config?: any, useToken?: boolean) {
    return this.sendRequest("get", url, undefined, config, useToken);
  }

  public post(url: string, data?: any, config?: any, useToken?: boolean) {
    return this.sendRequest("post", url, data, config, useToken);
  }

  public put(url: string, data?: any, config?: any, useToken?: boolean) {
    return this.sendRequest("put", url, data, config, useToken);
  }

  public delete(url: string, config?: any, useToken?: boolean) {
    return this.sendRequest("delete", url, undefined, config, useToken);
  }
}

export default HttpAdapter;
