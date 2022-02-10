import { toast } from "react-toastify";

export const toaster = (status, data) => {
  return status === "success"
    ? toast.success(data, { position: toast.POSITION.TOP_CENTER })
    : toast.error(
        data.response?.data?.message ??
          data.message ??
          "Internal server error.",
        { position: toast.POSITION.TOP_CENTER }
      );
};
