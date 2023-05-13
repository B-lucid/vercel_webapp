import React from "react";
import { Row, Form, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import Input from "../../../../components/common/Input";
import NewCustomer from "../../../layouts/login/components/new-customer";
import LoginLayout from "../../../layouts/login";

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
                  validationOptions={{
                    required: "Please enter your email address",
                    pattern: {
                      value: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  }}
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
                  validationOptions={{
                    required: "Please enter your password",
                    minLength: {
                      value: 8,
                      message: "Password must be more than 8 character",
                    },
                  }}
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
