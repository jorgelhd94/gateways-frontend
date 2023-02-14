import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "../interfaces/ErrorResponse";
import FetchError from "../components/atoms/Messages/FetchError/FetchError";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="w-screen h-screen">
      <FetchError>
        Oops!!
        <br /> {error.status && "Error " + error.status + " - " + error.statusText}
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.data}</i>
        </p>
      </FetchError>
    </div>
  );
};

export default ErrorPage;
