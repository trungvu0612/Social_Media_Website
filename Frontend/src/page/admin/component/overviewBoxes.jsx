import React from "react";

export default function OverviewBoxes() {
  return (
    <div className="overview-boxes">
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Post</div>
          <div className="number">40,876</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Up from yesterday</span>
          </div>
        </div>
        <i className="bx bxs-pencil cart" />
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Comments</div>
          <div className="number">38,876</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Up from yesterday</span>
          </div>
        </div>
        <i className="bx bxs-comment-detail cart two" />
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Downloads</div>
          <div className="number">12,876</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Up from yesterday</span>
          </div>
        </div>
        <i className="bx bx-download cart three" />
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Users</div>
          <div className="number">11,086</div>
          <div className="indicator">
            <i className="bx bx-down-arrow-alt down" />
            <span className="text">Down From Today</span>
          </div>
        </div>
        <i className="bx bx-user cart four" />
      </div>
    </div>
  );
}
