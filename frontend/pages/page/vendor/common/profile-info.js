import React from "react";
import { Card, CardBody } from "reactstrap";

const ProfileDetail = ({ title, detail }) => {
  return (
    <li>
      <div className="details">
        <div className="left">
          <h6>{title}</h6>
        </div>
        <div className="right">
          <h6>{detail}</h6>
        </div>
      </div>
    </li>
  );
};

function ProfileInfo({ ProfileData = [] }) {
  return (
    <>
      <Card className="mt-0">
        <CardBody>
          <div className="dashboard-box">
            <div className="dashboard-title">
              <h4>profile</h4>
              <span data-toggle="modal" data-target="#edit-profile">
                edit
              </span>
            </div>
            <div className="dashboard-detail">
              <ul>
                {ProfileData.map((data, i) => {
                  return (
                    <ProfileDetail
                      key={i}
                      title={data.title}
                      detail={data.detail}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileInfo;
