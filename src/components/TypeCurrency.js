import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TypeCurrency() {
  const currenycRef = {
    "£": "£ Pound",
    $: "$ Dollar",
    "€": "€ Euro",
    "₹": "₹ Ruppee",
  };

  const { dispatch, currency } = useContext(AppContext);

  const handleCurrency = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.value,
    });
  };

  return (
    <div className="alert alert-success">
      <select
        name="currency"
        id="currency"
        onChange={handleCurrency}
        value="default"
      >
        <option value="default" hidden>
          Currency ({currenycRef[currency]})
        </option>
        <option value="£">{currenycRef["£"]}</option>
        <option value="$">{currenycRef["$"]}</option>
        <option value="€">{currenycRef["€"]}</option>
        <option value="₹">{currenycRef["₹"]}</option>
      </select>
    </div>
  );
}
