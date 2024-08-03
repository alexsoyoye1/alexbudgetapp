import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ExpensesContext } from "../../context/expenses.context";
import "./editExpense.css";

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { budgetItems } = useContext(ExpensesContext);
  const [selectedBudgetItem, setSelectedBudgetItem] = useState(null);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    const item = budgetItems.find((budgetItem) => budgetItem.id == id);
    setSelectedBudgetItem(item);
  }, [id, budgetItems]);

  const handleEdit = () => {
    setSelectedBudgetItem(
      (selectedBudgetItem.title = title),
      (selectedBudgetItem.cost = cost)
    );
    navigate("/");
  };

  const returnHome = () => {
    navigate("/");
  };

  if (!selectedBudgetItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="edit-section">
      <h1>Edit Expense</h1>
      <h2>Confirm edit of this Expense: {selectedBudgetItem.title}</h2>
      <form onSubmit={handleEdit}>
        <div className="edit-inputs">
          <input
            id="title"
            type="text"
            placeholder={selectedBudgetItem.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            id="cost"
            type="number"
            placeholder={selectedBudgetItem.cost}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <div className="edit-btns">
          <button type="submit">Save</button>
          <Link to="/">
            <span>Cancel</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditExpense;
