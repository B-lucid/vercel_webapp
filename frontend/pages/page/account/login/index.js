import React from "react";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import NewCustomer from "../../../layouts/login/components/new-customer";
import LoginLayout from "../../../layouts/login";

const LOGIN_ROLES = [
  {
    label: "User",
    link: "/page/account/user/login",
  },
  {
    label: "Vendor",
    link: "/page/account/vendor/login",
  },
  {
    label: "Admin",
    link: "/page/account/admin/login",
  },
];

const Login = () => {
  return (
    <LoginLayout>
      <Row>
        <Col lg="6">
          <h3>Login</h3>
          <div className="theme-card background">
            <div className="row gap-2 h-100">
              {LOGIN_ROLES.map(({ label, link }) => (
                <Link key={label} href={link}>
                  <h4 className="col contain-bg login-role">{label}</h4>
                </Link>
              ))}
            </div>
          </div>
        </Col>
        <Col lg="6" className="right-login">
          <NewCustomer />
        </Col>
      </Row>
    </LoginLayout>
  );
};

export default Login;
