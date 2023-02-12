import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  faCheckDouble,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import IconInput from "../../../atoms/Input/IconInput/IconInput";
import AuthButton from "../../../atoms/buttons/AuthButton/AuthButton";
import {
  errorInputClass,
  successInputClass,
} from "../../../../utils/inputStyle";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const requierdMsg = "This is a required field";

  const schema = Yup.object({
    name: Yup.string().required(requierdMsg).min(3).max(50),
    email: Yup.string().required(requierdMsg).email(),
    password: Yup.string().required(requierdMsg).min(6).max(32),
    confirmPassword: Yup.string()
      .required(requierdMsg)
      .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  });

  const getError = (inputName: string) => {
    return <ErrorMessage name={inputName} />;
  };

  return (
    <div className="mt-12">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setIsLoading(true);
          setSubmitting(false);

          //   const createUser = httpsCallable(functions, "users-register");
          //   await createUser({ ...values })
          //     .then(() => {
          //       toast.success("User was register succesfully!");
          //       toogleLogin();
          //     })
          //     .catch((error) => {
          //       const message = error.message;
          //       toast.error(message);
          //     });

          setIsLoading(false);
          // eslint-disable-next-line prettier/prettier
        }}
      >
        {({ errors }) => (
          <Form>
            <IconInput icon={faUser} error={getError("name")}>
              <Field
                name="name"
                type="text"
                className={errors.name ? errorInputClass : successInputClass}
                placeholder="Your name"
              />
            </IconInput>

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

            <IconInput icon={faCheckDouble} error={getError("confirmPassword")}>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  errors.confirmPassword ? errorInputClass : successInputClass
                }
                placeholder="Confirm password"
              />
            </IconInput>

            <div className="my-6">
              <AuthButton type="submit" isLoading={isLoading}>
                Register
              </AuthButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
