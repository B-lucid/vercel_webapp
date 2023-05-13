import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Media,
  Card,
  CardBody,
  Input,
  NavItem,
  NavLink,
  TabContent,
  Nav,
  TabPane,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Label,
} from "reactstrap";
import seventeen from "../../../../public/assets/images/logos/17.png";
import order from "../../../../public/assets/images/icon/dashboard/order.png";
import sale from "../../../../public/assets/images/icon/dashboard/sale.png";
import homework from "../../../../public/assets/images/icon/dashboard/homework.png";
import one from "../../../../public/assets/images/dashboard/product/1.jpg";
import nine from "../../../../public/assets/images/dashboard/product/9.jpg";
import thirtyfour from "../../../../public/assets/images/pro3/34.jpg";
import pro1 from "../../../../public/assets/images/pro3/1.jpg";
import pro27 from "../../../../public/assets/images/pro3/27.jpg";
import pro36 from "../../../../public/assets/images/pro3/36.jpg";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { apexPieChart, lineChart1 } from "../../../../data/vendorData";
import Orders from "./orders";
import Products from "./products";
import ProfileInfo from "./profile-info";
import Settings from "./settings";

const SummaryData = [
  {
    img: "/assets/images/icon/dashboard/order.png",
    title: "25",
    desc: "Total Products",
  },
  {
    img: "/assets/images/icon/dashboard/sale.png",
    title: "12500",
    desc: "Total Sales",
  },
  {
    img: "/assets/images/icon/dashboard/homework.png",
    title: "50",
    desc: "Order Pending",
  },
];

const Summary = ({ img, title, desc }) => {
  return (
    <Col md="4">
      <div className="counter-box">
        <Media src={img} className="img-fluid" />
        <div>
          <h3>{title}</h3>
          <h5>{desc}</h5>
        </div>
      </div>
    </Col>
  );
};

const ProductData = [
  {
    img: one,
    productName: "Neck Velvet Dress	",
    category: "Women Clothes",
    price: "$205",
    stock: "1000",
    sales: "2000",
  },
  {
    img: nine,
    productName: "Belted Trench Coat		",
    category: "Women Clothes",
    price: "$350",
    stock: "800",
    sales: "350",
  },
  {
    img: thirtyfour,
    productName: "Men Print Tee",
    category: "Men Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
  {
    img: pro1,
    productName: "Woman Print Tee",
    category: "Women Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
  {
    img: pro27,
    productName: "Men Print Tee",
    category: "Men Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
  {
    img: pro36,
    productName: "Men Print Tee",
    category: "Men Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
];

const TrendingProduct = ({ img, productName, price, sales }) => {
  return (
    <tr>
      <th scope="row">
        <Media src={img} className="blur-up lazyloaded" />
      </th>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{sales}</td>
    </tr>
  );
};

const OrderData = [
  {
    id: "#125021",
    productDetails: "Neck Velvet Dress",
    status: "Shipped",
    price: "$205",
  },
  {
    id: "#521214",
    productDetails: "Belted Trench Coat",
    status: "Shipped",
    price: "$350",
  },
  {
    id: "#521021",
    productDetails: "Men Print Tee",
    status: "pending",
    price: "$150",
  },
  {
    id: "#245021",
    productDetails: "Woman Print Tee",
    status: "Shipped",
    price: "$150",
  },
  {
    id: "#122141",
    productDetails: "Men Print Tee",
    status: "canceled",
    price: "$150",
  },
  {
    id: "#125015",
    productDetails: "Men Print Tee",
    status: "pending",
    price: "$150",
  },
  {
    id: "#245021",
    productDetails: "women print tee",
    status: "Shipped",
    price: "$150",
  },
  {
    id: "#122141",
    productDetails: "men print tee",
    status: "canceled",
    price: "$150",
  },
  {
    id: "#125015",
    productDetails: "men print tee",
    status: "pending",
    price: "$150",
  },
];

const RecentOrder = ({ id, productDetails, status }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{productDetails}</td>
      <td>{status}</td>
    </tr>
  );
};

const ProfileData = [
  { title: "Company Name", detail: "Fashion Store" },
  { title: "Email Address", detail: "Mark.Enderess@Mail.Com" },
  { title: "Country / Region", detail: "Downers Grove, IL" },
  { title: "Year Established", detail: "2022" },
  { title: "Total Employees", detail: "101 - 200 People" },
  { title: "Category", detail: "Clothing" },
  { title: "Street Address", detail: "549 Sulphur Springs Road" },
  { title: "City/State", detail: "Downers Grove, IL" },
  { title: "Zip", detail: "60515" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <section className="dashboard-section section-b-space">
      <Container>
        <Row>
          <Col lg="3">
            <div className="dashboard-sidebar">
              <div className="profile-top">
                <div className="profile-image">
                  <Media src={seventeen.src} alt="" className="img-fluid" />
                </div>
                <div className="profile-detail">
                  <h5>Fashion Store</h5>
                  <h6>750 followers | 10 review</h6>
                  <h6>mark.enderess@mail.com</h6>
                </div>
              </div>
              <div className="faq-tab">
                <Nav tabs className="border-tab-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                    >
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                    >
                      Products
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === "3" ? "active" : ""}
                      onClick={() => setActiveTab("3")}
                    >
                      Order
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === "4" ? "active" : ""}
                      onClick={() => setActiveTab("4")}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === "5" ? "active" : ""}
                      onClick={() => setActiveTab("5")}
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === "6" ? "active" : ""}
                      onClick={toggle}
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Col>
          <Col lg="9">
            <div className="faq-content">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="counter-section">
                    <Row>
                      {SummaryData.map((data, i) => {
                        return (
                          <Summary
                            key={i}
                            img={data.img}
                            title={data.title}
                            desc={data.desc}
                          />
                        );
                      })}
                    </Row>
                  </div>
                  <Row>
                    <Col md="7">
                      <Card>
                        <CardBody>
                          <div id="chart">
                            <Chart
                              options={lineChart1.options}
                              series={lineChart1.series}
                              height="170"
                              type="area"
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="5">
                      <Card>
                        <CardBody>
                          <div id="chart-order">
                            <Chart
                              options={apexPieChart.options}
                              series={apexPieChart.series}
                              type="donut"
                              width={380}
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <Card className="dashboard-table">
                        <CardBody>
                          <h3>trending products</h3>
                          <table className="table mb-0 table-responsive-sm">
                            <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">price</th>
                                <th scope="col">sales</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ProductData.slice(0, 3).map((data, i) => {
                                return (
                                  <TrendingProduct
                                    key={i}
                                    img={data.img.src}
                                    productName={data.productName}
                                    price={data.price}
                                    sales={data.sales}
                                  />
                                );
                              })}
                            </tbody>
                          </table>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="dashboard-table">
                        <CardBody>
                          <h3>recent orders</h3>
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th scope="col">order id</th>
                                <th scope="col">product details</th>
                                <th scope="col">status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {OrderData.slice(0, 5).map((data, i) => {
                                return (
                                  <RecentOrder
                                    key={i}
                                    id={data.id}
                                    productDetails={data.productDetails}
                                    status={data.status}
                                  />
                                );
                              })}
                            </tbody>
                          </table>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <Products ProductData={ProductData} />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <Orders OrderData={OrderData} />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <ProfileInfo ProfileData={ProfileData} />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <Settings />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
              <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Logging Out</ModalHeader>
                <ModalBody className="p-4">Do you want to logout?</ModalBody>
                <ModalFooter>
                  <Link href={"/"}>
                    <a className="btn-solid btn-custom" color="secondary">
                      Yes
                    </a>
                  </Link>
                  <Button
                    className="btn-solid btn-custom"
                    color="secondary"
                    onClick={toggle}
                  >
                    No
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;