import React from "react";
import CheckRedirect from "../../../hook/checkRedirect";
import OverviewBoxes from "./overviewBoxes";
import SaleBox from "./saleBox";

export default function Dashboard() {
  CheckRedirect();
  return (
    <div className="home-content menu-bar">
      <OverviewBoxes />
      <SaleBox />
    </div>
  );
}
