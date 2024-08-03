import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ExpensesContext } from "../../context/expenses.context";
import "./deleteExpense.css";

const DeleteExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { budgetItems, setBudgetItems } = useContext(ExpensesContext);
  const [selectedBudgetItem, setSelectedBudgetItem] = useState(null);

  useEffect(() => {
    const item = budgetItems.find((budgetItem) => budgetItem.id == id);
    setSelectedBudgetItem(item);
  }, [id, budgetItems]);

  const handleDelete = () => {
    setBudgetItems(budgetItems.filter((budgetItem) => budgetItem.id != id));
    navigate("/");
  };

  if (!selectedBudgetItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="delete-section">
      <h2>
        Are you sure you want to delete this Budget item:{" "}
        {selectedBudgetItem.title}
      </h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteExpense;
