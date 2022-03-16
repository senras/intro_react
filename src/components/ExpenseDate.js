import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("es-AR", { month: "long" });
  const day = props.date.toLocaleString("es-AR", { day: "numeric" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
