import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectValue } from "../../redux/moneySlice";

function Receipt() {
  const items = useSelector(selectItems);
  const value = useSelector(selectValue);

  return (
    <div className="receipt">
      <h2>Your Receipt</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="receiptItem">
            <p>{item.title}</p>
            <p>x{item.amount}</p>
            <p className="dollar">${item.amount * item.price}</p>
          </li>
        ))}
      </ul>

      <hr style={{ margin: "10px 0 " }} />

      <div className="receiptTotal">
        <p>
          <strong>TOTAL</strong>
        </p>
        <p className="dollar">${value}</p>
      </div>
    </div>
  );
}

export default Receipt;
