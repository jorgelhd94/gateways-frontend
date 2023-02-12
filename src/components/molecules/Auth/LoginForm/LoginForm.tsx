import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import IconInput from "../../../atoms/Input/IconInput/IconInput";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  errorInputClass,
  successInputClass,
} from "../../../../utils/inputStyle";
import AuthButton from "../../../atoms/buttons/AuthButton/AuthButton";
import HttpAdapter from "../../../../utils/HttpAdapter";
import { redirect } from "react-router-dom";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const requierdMsg = "This is a required field";

  const schema = Yup.object({
    email: Yup.string().required(requierdMsg).email(),
    password: Yup.string().required(requierdMsg).min(6).max(10),
  });

  const getError = (inputName: string) => {
    return <ErrorMessage name={inputName} />;
  };

  const singIn = async (email: string, password: string) => {
    const httpAdapter = HttpAdapter.getInstance();
    await httpAdapter
      .post("auth/login", { email, password })
      .then(() => {
        // Signed in
        toast.success("Welcome!!");
        redirect("/");
        // ...
      })
      .catch((error) => {
        const errorMessage =
          typeof error.response.data.message === "string"
            ? error.response.data.message
            : error.response.data.message[0];
        toast.error(errorMessage);
      });
  };

  return (
    <div className="mt-12">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          await singIn(values.email, values.password);

          setIsLoading(false);
        }}
      >
        {({ errors }) => (
          <Form>
            <IconInput icon={faEnvelope} error={getError("email")}>
              <Field
                name="email"
                type="email"
                className={errors.email ? errorInputClass : successInputClass}
                placeholder="Your email"
              />
            </IconInput>

            <IconInput icon={faLock} error={getError("password")}>
              <Field
                name="password"
                type="password"
                className={
                  errors.password ? errorInputClass : successInputClass
                }
                placeholder="Your password"
              />
            </IconInput>

            <div className="my-6">
              <AuthButton type="submit" isLoading={isLoading}>
                Sign In
              </AuthButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
