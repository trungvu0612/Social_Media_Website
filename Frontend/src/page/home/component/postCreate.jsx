import React from "react";
import CategoryMusic from "../../../component/categoryMusic";
import CheckRedirect from "../../../hook/checkRedirect";

export default function PostCreate() {
  CheckRedirect();
  return (
    <div className="postcreate post-list post-list-4">
      <CategoryMusic />
    </div>
  );
}
