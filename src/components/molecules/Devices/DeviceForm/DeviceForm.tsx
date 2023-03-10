import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import DefaultInput from "../../../atoms/Input/DefaultInput/DefaultInput";
import {
  errorInputClass,
  selectErrorClass,
  selectSuccessClass,
  successInputClass,
} from "../../../../utils/inputStyle";
import SubmitButton from "../../../atoms/Buttons/SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { userSelectState } from "../../../../store/reducers/user.reducer";
import HttpAdapter from "../../../../utils/HttpAdapter";
import { notify } from "../../../../utils/notifications/notify";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAxiosError } from "../../../../utils/axios/getAxiosError";
import { IGateway } from "../../../../interfaces/IGateway";
import { IDevice } from "../../../../interfaces/IDevice";

type DeviceFormProps = {
  isEdit?: boolean;
  listGateways: IGateway[];
};

type InitialValues = {
  uid: string;
  vendor: string;
  gateway: string;
  online: boolean;
};

const DeviceForm = (props: DeviceFormProps) => {
  const loaderData = useLoaderData() as {
    device: IDevice;
    gatewayId: string;
  };

  const getDevice = () => {
    if (props.isEdit) {
      if (loaderData.device && loaderData.gatewayId) {
        return {
          ...loaderData.device,
          gateway: loaderData.gatewayId,
          online: loaderData.device.status === "online",
        };
      }
    }

    const { gatewayId } = useLoaderData() as { gatewayId: string };

    return {
      uid: "",
      vendor: "",
      gateway: gatewayId || "",
      online: false,
    };
  };

  const [isLoading, setIsLoading] = useState(false);
  const requierdMsg = "This is a required field";

  const schema = Yup.object({
    uid: Yup.number()
      .positive("Must be a positive number")
      .required(requierdMsg),
    vendor: Yup.string().required(requierdMsg),
    gateway: Yup.string().required(requierdMsg),
  });

  const getError = (inputName: string) => {
    return <ErrorMessage name={inputName} />;
  };

  const { token } = useSelector((state: any) =>
    userSelectState(state.userReducer)
  );

  const navigate = useNavigate();

  const createDevice = async (values: InitialValues) => {
    const data = {
      uid: values.uid,
      status: values.online ? "online" : "offline",
      vendor: values.vendor,
      dateCreated: new Date(),
    };
    const httpAdapter = HttpAdapter.getInstance();
    await httpAdapter
      .post("devices/" + values.gateway, data, {}, token)
      .then(() => {
        notify("The device was created succesfully!!", "success");
        navigate("/gateways/" + values.gateway);
      })
      .catch((error) => {
        const errorMessage = getAxiosError(error);
        notify(errorMessage, "error");
      });
  };

  const editDevice = async (values: InitialValues) => {
    const { uid, vendor, gateway } = values;

    const modifiedDevice = {
      uid,
      vendor,
      status: values.online ? "online" : "offline",
      dateCreated: loaderData.device.dateCreated,
      gatewayId: values.gateway,
    };

    const httpAdapter = HttpAdapter.getInstance();
    await httpAdapter
      .patch(
        `devices/${loaderData.gatewayId}/${loaderData.device._id}`,
        modifiedDevice,
        {},
        token
      )
      .then(() => {
        notify("The device was modified succesfully!!", "success");
        navigate("/gateways/" + gateway);
      })
      .catch((error) => {
        const errorMessage = getAxiosError(error);
        notify(errorMessage, "error");
      });
  };

  const [listOptions, setListOptions] = useState([
    <option key={0} disabled>
      No elements
    </option>,
  ]);

  const createSelect = () => {
    if (props.listGateways.length > 0) {
      const list = props.listGateways.map((value) => {
        return (
          <option key={value._id} value={value._id}>
            {value.name} - {value.serialNumber}
          </option>
        );
      });
      const empty = <option key="empty" value=""></option>;
      setListOptions([empty, ...list]);
    }
  };

  useEffect(() => createSelect(), []);

  return (
    <div>
      <div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
        {props.isEdit ? "Edit" : "Create a new "} Device
      </div>

      <Formik
        initialValues={{ ...getDevice() }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          if (props.isEdit) {
            await editDevice(values as InitialValues);
          } else {
            await createDevice(values as InitialValues);
          }

          setIsLoading(false);
        }}
      >
        {({ errors, isValidating, setFieldValue, values }) => (
          <Form>
            <div className="flex flex-wrap flex-col lg:flex-row justify-start w-full">
              <div className="mr-0 lg:mr-6">
                <label htmlFor="uid" className="font-normal text-gray-600 ">
                  UID
                </label>
                <DefaultInput
                  error={getError("uid")}
                  isValidating={isValidating}
                >
                  <Field
                    name="uid"
                    type="text"
                    placeholder="UID number"
                    className={errors.uid ? errorInputClass : successInputClass}
                  />
                </DefaultInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="vendor" className="font-normal text-gray-600 ">
                  Vendor
                </label>
                <DefaultInput error={getError("vendor")}>
                  <Field
                    name="vendor"
                    type="text"
                    className={
                      errors.vendor ? errorInputClass : successInputClass
                    }
                    placeholder="Vendor"
                  />
                </DefaultInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="gateway" className="font-normal text-gray-600 ">
                  Gateway
                </label>
                <DefaultInput error={getError("gateway")}>
                  <Field
                    as="select"
                    name="gateway"
                    className={
                      errors.gateway ? selectErrorClass : selectSuccessClass
                    }
                  >
                    {listOptions}
                  </Field>
                </DefaultInput>
              </div>

              <div className="mr-0 lg:mr-6">
                <label htmlFor="online" className="font-normal text-gray-600 ">
                  Status
                </label>

                <div className="mt-2">
                  <div
                    className="relative inline-block w-10 align-middle select-none mr-2"
                    onClick={() => setFieldValue("online", !values.online)}
                  >
                    <Field
                      type="checkbox"
                      name="online"
                      className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="online"
                      // eslint-disable-next-line prettier/prettier
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                  <span className="text-gray-400 font-medium">
                    {values.online ? "Online" : "Offline"}
                  </span>
                </div>
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

export default DeviceForm;
