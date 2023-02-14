import { IDevice } from "./IDevice";

export interface IGateway {
  _id: string;
  serialNumber: string;
  name: string;
  ipAddress: string;
  devices: IDevice[];
}
