import { toast } from "react-toastify";

export const notify = (message: string, type: "success" | "error") => {
  toast(message, {
    type,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
