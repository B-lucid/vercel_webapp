import React from "react";
import { Card, CardBody, Media } from "reactstrap";

const AllProduct = ({ img, productName, category, price, stock, sales }) => {
  return (
    <tr>
      <th scope="row">
        <Media src={img} className="blur-up lazyloaded" />
      </th>
      <td>{productName}e</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>{sales}</td>
      <td>
        <i className="fa fa-pencil-square-o me-1" aria-hidden="true"></i>
        <i className="fa fa-trash-o ms-1" aria-hidden="true"></i>
      </td>
    </tr>
  );
};

function Products({ ProductData = [] }) {
  return (
    <>
      <Card className="dashboard-table mt-0">
        <CardBody>
          <div className="top-sec">
            <h3>all products</h3>
            <a href="#" className="btn btn-sm btn-solid">
              add product
            </a>
          </div>
          <table className="table-responsive-md table mb-0">
            <thead>
              <tr>
                <th scope="col">image</th>
                <th scope="col">product name</th>
                <th scope="col">category</th>
                <th scope="col">price</th>
                <th scope="col">stock</th>
                <th scope="col">sales</th>
                <th scope="col">edit/delete</th>
              </tr>
            </thead>
            <tbody>
              {ProductData.map((data, i) => {
                return (
                  <AllProduct
                    key={i}
                    img={data.img.src}
                    productName={data.productName}
                    category={data.category}
                    stock={data.stock}
                    price={data.price}
                    sales={data.sales}
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

export default Products;
