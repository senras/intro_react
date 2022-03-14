import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 14);
  const expenseTitle = "Seguro del auto";
  const expensePrice = 294.67;

  return (
    <div>
      <div className="expense-item">{expenseDate.toDateString()}</div>
      <div>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
