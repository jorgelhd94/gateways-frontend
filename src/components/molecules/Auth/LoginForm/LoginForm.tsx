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

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const requierdMsg = "This is a required field";

  const schema = Yup.object({
    email: Yup.string().required(requierdMsg).email(),
    password: Yup.string().required(requierdMsg).min(6).max(32),
  });

  const getError = (inputName: string) => {
    return <ErrorMessage name={inputName} />;
  };

  return (
    <div className="mt-12">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);

          //   await signInWithEmailAndPassword(auth, values.email, values.password)
          //     .then(() => {
          //       // Signed in
          //       toast.success("Welcome!!");
          //       router.push("/");
          //       // ...
          //     })
          //     .catch((error) => {
          //       const errorMessage = error.message;
          //       toast.error(errorMessage);
          //     });

          setIsLoading(false);
          // eslint-disable-next-line prettier/prettier
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
