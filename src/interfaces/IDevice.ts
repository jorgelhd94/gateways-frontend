export interface IDevice {
  _id: string;
  uid: number;
  vendor: string;
  dateCreated: Date;
  status: "online" | "offline";
  gatewayId?: string;
}
