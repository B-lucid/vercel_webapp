import React from "react";
import { Container } from "reactstrap";
import CommonLayout from "../../../components/shop/common-layout";

const LoginLayout = ({ children }) => {
  return (
    <CommonLayout parent="home" title="login">
      <section className="login-page section-b-space">
        <Container>{children}</Container>
      </section>
    </CommonLayout>
  );
};

export default LoginLayout;
