import React from "react";
import { Card, CardBody } from "reactstrap";

const AllOrder = ({ id, productDetails, status, price }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{productDetails}</td>
      <td>{status}</td>
      <td>{price}</td>
    </tr>
  );
};

function Orders({ OrderData = [] }) {
  return (
    <>
      <Card className="dashboard-table mt-0">
        <CardBody>
          <div className="top-sec">
            <h3>orders</h3>
            <a href="#" className="btn btn-sm btn-solid">
              add product
            </a>
          </div>
          <table className="table table-responsive-sm mb-0">
            <thead>
              <tr>
                <th scope="col">order id</th>
                <th scope="col">product details</th>
                <th scope="col">status</th>
                <th scope="col">price</th>
              </tr>
            </thead>
            <tbody>
              {OrderData.map((data, i) => {
                return (
                  <AllOrder
                    key={i}
                    id={data.id}
                    productDetails={data.productDetails}
                    status={data.status}
                    price={data.price}
                  />
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
}

export default Orders;
