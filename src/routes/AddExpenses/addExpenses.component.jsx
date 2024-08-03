import "./addExpenses.css";
import { useContext, useState } from "react";
import { ExpensesContext } from "../../context/expenses.context";

const AddExpenses = () => {
  const { addBudgetItems, budgetItems } = useContext(ExpensesContext);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  const addExpenseHandler = (event) => {
    event.preventDefault();
    const budgetItem = {
      id: Date.now().valueOf(),
      title: title,
      cost: parseFloat(cost), // Ensure cost is a number
    };
    addBudgetItems(budgetItem);
    alert("Budget item added");
    setTitle("");
    setCost("");
  };

  return (
    <div>
      <h1>Add Expenses</h1>
      <form onSubmit={addExpenseHandler} className="expenses-form">
        <div className="add-inputs">
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            id="cost"
            type="number"
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddExpenses;
