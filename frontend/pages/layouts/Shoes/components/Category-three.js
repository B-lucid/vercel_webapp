import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Col, Row } from "reactstrap";

const CategoryThree = () => {
  const size = ["size 06", "size 07", "size 08", "size 09", "size 10","size 11"];
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    arrows:true,
    slidesToScroll: 1,
responsive: [
{
  breakpoint: 1366,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
  },
},
{
  breakpoint: 1200,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
  },
},
{
  breakpoint: 991,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
  },
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
  },
},

],
  };
  return (
    <Fragment>
      <section className="p-0">
        <Container>
          <Row className="background">
            {/* {size.map((size, i) => {
              return (
                <Col key={i}>
                  <a href="#">
                    <div className="contain-bg">
                      <h4 data-hover="size 06">{size}</h4>
                    </div>
                  </a>
                 
                </Col>
              );
            })} */}
            <Slider {...settings} className="slide-1 home-slider"> {size.map((size,i)=>(
            <div>
              <Col key={i}>
                  <a href="#">
                    <div className="contain-bg">
                      <h4 data-hover="size 06">{size}</h4>
                    </div>
                  </a>
                 
                </Col>
            </div>
            ))}</Slider>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CategoryThree;
