import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    hideForm(false);
  };

  const [displayForm, hideForm] = useState(false);

  const startState = () => {
    hideForm(true);
  };

  const stopEditing = () => {
    hideForm(false);
  };
  // const conditionForm = (event) => {
  //   showForm = !showForm;
  //   console.log(showForm);
  //   if (showForm === false) {
  //     return <ExpenseForm hidden onSaveExpenseData={saveExpenseDataHandler} />;
  //   } else {

  //   }
  // };

  return (
    <div className="new-expense">
      {!displayForm && <button onClick={startState}>Add expense</button>}
      {displayForm && (
        <ExpenseForm
          onStopEditing={stopEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
