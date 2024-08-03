import { createContext, useState, useEffect } from "react";

const addBudgetItem = (budgetItems, budgetToAdd) => {
  const existingBudgetItem = budgetItems.find(
    (budgetItem) =>
      budgetItem.title.toLowerCase() === budgetToAdd.title.toLowerCase()
  );
  if (existingBudgetItem) {
    alert("You already have this budget item");
    return budgetItems;
  } else {
    return [...budgetItems, { ...budgetToAdd }];
  }
};

export const ExpensesContext = createContext({
  addBudgetItems: () => {},
  setBudgetItems: () => {},

  budgetItems: [],
});

export const ExpensesProvider = ({ children }) => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [filteredItems, setfilterBudgetItems] = useState([]);

  useEffect(() => {
    const storedBudgetItems =
      JSON.parse(localStorage.getItem("budgetItems")) || [];
    setBudgetItems(storedBudgetItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
  }, [budgetItems]);

  const addBudgetItems = (budgetToAdd) => {
    setBudgetItems(addBudgetItem(budgetItems, budgetToAdd));
  };

  const value = {
    budgetItems,
    addBudgetItems,
    setBudgetItems,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
