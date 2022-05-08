import React from "react";

import Items from "./Items";
import Receipt from "./Receipt";

function Container() {
  return (
    <div className="continer">
      <div className="container">
        <Items />
        <Receipt />
      </div>
    </div>
  );
}

export default Container;
