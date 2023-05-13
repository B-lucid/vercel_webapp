import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/login";
import AdminLayoutRoutes from "./AdminLayoutRoutes";
import VendorLayoutRoutes from "./VendorLayoutRoutes";
import { useRolesContext } from "../providers/RolesProvider";

const Routers = () => {
  const { isAdmin } = useRolesContext();

  return (
    <Fragment>
      <Routes>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/auth/login`}
          element={<Login />}
        />
        {isAdmin ? (
          <Route path={`/*`} element={<AdminLayoutRoutes />} />
        ) : (
          <Route path={`/*`} element={<VendorLayoutRoutes />} />
        )}
      </Routes>
    </Fragment>
  );
};

export default Routers;
