export const getAxiosError = (error: any): string => {
  const errorMessage =
    typeof error.response.data.message === "string"
      ? error.response.data.message
      : error.response.data.message[0];

  return errorMessage;
};
