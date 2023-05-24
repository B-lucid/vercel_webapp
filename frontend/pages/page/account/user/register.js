import React, { useState } from "react";
import CommonLayout from "../../../../components/shop/common-layout";
import { Container, Row, Form, Label, Col } from "reactstrap";
import Input from "../../../../components/common/Input";
import { useForm } from "react-hook-form";
import Select from "../../../../components/common/Select";
import {
  countryValidation,
  dateValidation,
  emailValidation,
  fullNameValidation,
  genderValidation,
  passwordValidation,
  phoneNumberValidation,
  referralCodeValidation,
} from "../../../../helpers/validation";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      gender: "",
    },
  });

  // define the onSubmit event handler function for the form
  const onSubmit = (data) => {
    // if there are no errors, submit the form
    console.log("Full Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Date of Birth:", data.dateOfBirth);
    console.log("Gender:", data.gender);
    console.log("Country:", data.country);
    console.log("Password:", data.password);
    console.log("Referral Code:", data.referralCode);
  };

  return (
    <CommonLayout parent="home" title="register">
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>create account</h3>
              <div className="theme-card">
                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md="6">
                      <Input
                        label="Full Name"
                        name="fullName"
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Full Name"
                        register={register}
                        validationOptions={fullNameValidation}
                        error={errors?.fullName?.message}
                      />
                    </Col>
                    <Col md="6">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        register={register}
                        validationOptions={emailValidation}
                        error={errors?.email?.message}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Input
                        label="phone"
                        name="phone"
                        type="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        register={register}
                        validationOptions={phoneNumberValidation}
                        error={errors?.phone?.message}
                      />
                    </Col>
                    <Col md="6">
                      <Input
                        label="Date of Birth"
                        name="dateOfBirth"
                        type="date"
                        id="dateOfBirth"
                        placeholder="Date of Birth"
                        register={register}
                        validationOptions={dateValidation}
                        error={errors?.dateOfBirth?.message}
                      />
                    </Col>
                    <Col md="6">
                      <Select
                        label="Gender"
                        options={["Male", "Female"]}
                        type="select"
                        id="gender"
                        className="gender-class"
                        placeholder="Gender"
                        name="gender"
                        register={register}
                        validationOptions={genderValidation}
                        error={errors?.gender?.message}
                      />
                    </Col>
                    <Col md="6">
                      <Input
                        label="country"
                        name="country"
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="Country"
                        register={register}
                        validationOptions={countryValidation}
                        error={errors?.country?.message}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Input
                        label="Referral Code"
                        name="referralCode"
                        type="text"
                        className="form-control"
                        id="referralCode"
                        placeholder="Referral Code"
                        register={register}
                        validationOptions={referralCodeValidation}
                        error={errors?.referralCode?.message}
                      />
                    </Col>
                    <Col md="6">
                      <Input
                        label="Password"
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        register={register}
                        validationOptions={passwordValidation}
                        error={errors?.password?.message}
                      />
                    </Col>
                  </Row>
                  <Col md="12">
                    <button type="submit" className="btn btn-solid w-auto">
                      create Account
                    </button>
                  </Col>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Register;
