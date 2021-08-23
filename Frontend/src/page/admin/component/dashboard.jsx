import React from "react";
import OverviewBoxes from "./overviewBoxes";
import SaleBox from "./saleBox";

export default function Dashboard() {
  return (
    <div className="home-content menu-bar">
      <OverviewBoxes />
      <SaleBox />
    </div>
  );
}
