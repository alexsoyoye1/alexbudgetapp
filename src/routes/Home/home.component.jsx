import "./home.css";
import Expense from "../../components/expense/expense.component";
import { useContext, useState } from "react";
import { ExpensesContext } from "../../context/expenses.context";

const Home = () => {
  const { budgetItems } = useContext(ExpensesContext);

  const [filteredBudgetItems, setFilteredBudgetItems] = useState(budgetItems);

  const searchExpenseHandler = (input) => {
    console.log(input);
    setFilteredBudgetItems(
      budgetItems.filter((budgetItem) =>
        budgetItem.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Expenses</h1>
      <form className="search">
        <input
          type="text"
          placeholder="Search Expenses"
          onChange={(e) => searchExpenseHandler(e.target.value)}
        />
      </form>
      {filteredBudgetItems.map((budgetItem) => (
        <Expense bugetItem={budgetItem} />
      ))}
    </div>
  );
};

export default Home;
