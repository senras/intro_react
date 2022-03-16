import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";

function Expenses(props) {
  const expenseItems = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <div className="expenses">{expenseItems}</div>;
}

export default Expenses;
