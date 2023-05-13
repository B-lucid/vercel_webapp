import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import Dashboard from "./common/dashboard";
// import { withApollo } from '../../../helpers/apollo/apollo';

const VendorDashboard = () => {
  return (
    <CommonLayout parent="home" title="Vendor Profile">
      <Dashboard />
    </CommonLayout>
  );
};

export default VendorDashboard;
