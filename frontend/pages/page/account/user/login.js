import React from "react";
import { Row, Form, Label, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import Input from "../../../../components/common/Input";
import NewCustomer from "../../../layouts/login/components/new-customer";
import LoginLayout from "../../../layouts/login";
import {
  emailOrPhoneValidation,
  passwordValidation,
} from "../../../../helpers/validation";

const UserLogin = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      emailOrNumber: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("here is the user data : ", data);
  };

  return (
    <LoginLayout>
      <Row>
        <Col lg="6">
          <h3>Login as User</h3>
          <div className="theme-card">
            <Form onSubmit={handleSubmit(onSubmit)} className="theme-form">
              <div className="form-group">
                <Input
                  label="Email or Phone Number"
                  type="text"
                  id="emailOrNumber"
                  placeholder="Enter your email address or phone number"
                  register={register}
                  name="emailOrNumber"
                  validationOptions={emailOrPhoneValidation}
                  error={errors?.emailOrNumber?.message}
                />
              </div>
              <div className="form-group">
                <Input
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  register={register}
                  name="password"
                  validationOptions={passwordValidation}
                  error={errors?.password?.message}
                />
              </div>
              <button type="submit" className="btn btn-solid">
                Login
              </button>
            </Form>
          </div>
        </Col>
        <Col lg="6" className="right-login">
          <NewCustomer />
        </Col>
      </Row>
    </LoginLayout>
  );
};

export default UserLogin;
