import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, currency, expenses } = useContext(AppContext);

  const changeBudget = (e) => {
    console.log(totalExpenses, e.target.value);
    if (e.target.value < totalExpenses) {
      alert("You cannot reduce the budget lower than the spending");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: e.target.value,
      });
    }
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        value={budget}
        required="required"
        min="0"
        step="10"
        onChange={changeBudget}
      />
    </div>
  );
};

export default Budget;
