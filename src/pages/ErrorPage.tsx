import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "../interfaces/ErrorResponse";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div id="error-page">
      <h1>Oops!!</h1>
      <h1>Error {error.status} - {error.statusText}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
