import Link from "next/link";
import React from "react";

const NEW_CUSTOMER_ROUTE = "/page/account/user/register";

function NewCustomer() {
  return (
    <>
      <h3>New Customer</h3>
      <div className="theme-card authentication-right">
        <h6 className="title-font">Create A Account</h6>
        <p>
          Sign up for a free account at our store. Registration is quick and
          easy. It allows you to be able to order from our shop. To start
          shopping click register.
        </p>
        <Link href={NEW_CUSTOMER_ROUTE}>
          <button className="btn btn-solid">Create an Account</button>
        </Link>
      </div>
    </>
  );
}

export default NewCustomer;
