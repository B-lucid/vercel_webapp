import React from "react";
import { Row, Form, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import Input from "../../../../components/common/Input";
import NewCustomer from "../../../layouts/login/components/new-customer";
import LoginLayout from "../../../layouts/login";
import {
  emailValidation,
  passwordValidation,
} from "../../../../helpers/validation";

const AdminLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log("here is admin data : ", data);

  return (
    <LoginLayout>
      <Row>
        <Col lg="6">
          <h3>Login as Admin</h3>
          <div className="theme-card">
            <Form onSubmit={handleSubmit(onSubmit)} className="theme-form">
              <div className="form-group">
                <Input
                  label="Email"
                  type="text"
                  id="email"
                  placeholder="Enter your email address"
                  register={register}
                  name="email"
                  validationOptions={emailValidation}
                  error={errors?.email?.message}
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

export default AdminLogin;
