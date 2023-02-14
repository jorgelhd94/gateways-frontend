import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import DefaultInput from "../../../atoms/Input/DefaultInput/DefaultInput";
import {
  errorInputClass,
  successInputClass,
} from "../../../../utils/inputStyle";
import SubmitButton from "../../../atoms/Buttons/SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { userSelectState } from "../../../../store/reducers/user.reducer";
import { INewGateway } from "../../../../interfaces/INewGateway";
import HttpAdapter from "../../../../utils/HttpAdapter";
import { notify } from "../../../../utils/notifications/notify";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAxiosError } from "../../../../utils/axios/getAxiosError";
import { IGateway } from "../../../../interfaces/IGateway";

type GatewayFormProps = {
  isEdit?: boolean;
};

const GatewayForm = (props: GatewayFormProps) => {
  const getGateway = () => {
    const data = useLoaderData() as { gateway: IGateway };

    if (data) {
      return data.gateway;
    }

    return {
      serialNumber: "",
      name: "",
      ipAddress: "",
    };
  };

  const gateway = getGateway();

  const [isLoading, setIsLoading] = useState(false);
  const requierdMsg = "This is a required field";
  const ipv4Validation =
    /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

  const schema = Yup.object({
    serialNumber: Yup.string().required(requierdMsg),
    name: Yup.string().required(requierdMsg),
    ipAddress: Yup.string()
      .matches(ipv4Validation, { message: "Invalid IP address" })
      .required(requierdMsg),
  });

  const getError = (inputName: string) => {
    return <ErrorMessage name={inputName} />;
  };

  const { token } = useSelector((state: any) =>
    userSelectState(state.userReducer)
  );

  const navigate = useNavigate();

  const createUser = async (values: INewGateway) => {
    const httpAdapter = HttpAdapter.getInstance();
    await httpAdapter
      .post("gateways", values, {}, token)
      .then((response) => {
        notify("The gateway was created succesfully!!", "success");
        navigate("/gateways");
      })
      .catch((error) => {
        const errorMessage = getAxiosError(error);
        notify(errorMessage, "error");
      });
  };

  const editUser = async (values: IGateway) => {
    const { serialNumber, name, ipAddress } = values;
    const httpAdapter = HttpAdapter.getInstance();
    await httpAdapter
      .patch(
        "gateways/" + (gateway as IGateway)._id,
        { serialNumber, name, ipAddress },
        {},
        token
      )
      .then((response) => {
        notify("The gateway was modified succesfully!!", "success");
        navigate("/gateways");
      })
      .catch((error) => {
        const errorMessage = getAxiosError(error);
        notify(errorMessage, "error");
      });
  };

  return (
    <div>
      <div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
        {props.isEdit ? "Edit" : "Create a new "} Gateway
      </div>

      <Formik
        initialValues={{ ...gateway }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          if (props.isEdit) {
            await editUser(values as IGateway);
          } else {
            await createUser(values);
          }

          setIsLoading(false);
        }}
      >
        {({ errors, isValidating }) => (
          <Form>
            <div className="flex flex-col lg:flex-row justify-start w-full">
              <div className="mr-0 lg:mr-6">
                <label
                  htmlFor="serialNumber"
                  className="font-normal text-gray-600 "
                >
                  Serial Number
                </label>
                <DefaultInput
                  error={getError("serialNumber")}
                  isValidating={isValidating}
                >
                  <Field
                    name="serialNumber"
                    type="text"
                    placeholder="Serial number"
                    className={
                      errors.serialNumber ? errorInputClass : successInputClass
                    }
                  />
                </DefaultInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="name" className="font-normal text-gray-600 ">
                  Name
                </label>
                <DefaultInput error={getError("name")}>
                  <Field
                    name="name"
                    type="text"
                    className={
                      errors.name ? errorInputClass : successInputClass
                    }
                    placeholder="Name"
                  />
                </DefaultInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label
                  htmlFor="ipAddress"
                  className="font-normal text-gray-600 "
                >
                  IP v4
                </label>
                <DefaultInput error={getError("ipAddress")}>
                  <Field
                    name="ipAddress"
                    type="text"
                    className={
                      errors.ipAddress ? errorInputClass : successInputClass
                    }
                    placeholder="__.__.__.__"
                  />
                </DefaultInput>
              </div>
            </div>

            <div className="my-6 flex justify-end w-full">
              <SubmitButton isLoading={isLoading} isValidating={isValidating}>
                Submit
              </SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GatewayForm;
