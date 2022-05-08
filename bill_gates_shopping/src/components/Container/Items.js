import React from "react";
import { data } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import {
  buyProperty,
  sellProperty,
  selectItems,
  selectValue,
} from "../../redux/moneySlice";

function Items() {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const value = useSelector(selectValue);

  const findItem = (item) => {
    let addedItem = products.find((product) => product.title === item.title);
    return addedItem ? addedItem.amount : 0;
  };

  const handleChange = ({ e, amountOld, title, price }) => {
    let val = e.target.value === "" ? 0 : e.target.value;
    let gap = parseInt(val) - parseInt(amountOld);
    gap > 0
      ? dispatch(buyProperty({ amount: gap, price, title }))
      : dispatch(sellProperty({ amount: gap * -1, price, title }));
  };

  const buyItems = (amount, price, title) => {
    dispatch(buyProperty({ amount, price, title }));
  };
  const sellItems = (amount, price, title) => {
    dispatch(sellProperty({ amount, price, title }));
  };

  return (
    <div className="items">
      {data.map((item) => (
        <div key={item.id} className="item">
          <div className="item-wrapper">
            <img src={item.img} className="item-img" alt={item.title} />{" "}
            <div className="item-name">{item.title}</div>{" "}
            <div className="item-cost dollar">${item.price}</div>{" "}
            <div className="item-controls">
              <button
                disabled={!findItem(item)}
                className="item-sell btnSell"
                onClick={() => sellItems(1, item.price, item.title)}
              >
                Sell
              </button>
              <input
                pattern="\d*"
                type="number"
                className="item-input inputAmount"
                value={findItem(item)}
                onChange={(e) =>
                  handleChange({
                    e,
                    amountOld: findItem(item),
                    title: item.title,
                    price: item.price,
                  })
                }
              />
              <button
                disabled={value < 0}
                className="item-buy btnBuy"
                onClick={() => buyItems(1, item.price, item.title)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
