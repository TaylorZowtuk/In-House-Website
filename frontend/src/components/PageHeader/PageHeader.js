import React from "react";
import Header from "./styles";

function PageHeader({ header }) {
  return (
    <>
      <div className="container">
        <Header>{header}</Header>
      </div>
    </>
  );
}

export default PageHeader;
