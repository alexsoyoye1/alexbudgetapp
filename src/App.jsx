import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ExpensesProvider } from "./context/expenses.context";

import Home from "./routes/Home/home.component";
import Navbar from "./components/navbar/navbar.component";
import AddExpenses from "./routes/AddExpenses/addExpenses.component";
import DeleteExpense from "./routes/DeleteExpense/deleteExpense.component";
import EditExpense from "./routes/EditExpense/EditExpenses.component";

function App() {
  return (
    <BrowserRouter>
      <ExpensesProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddExpenses />} />
          <Route path="/delete/:id" element={<DeleteExpense />} />
          <Route path="/edit/:id" element={<EditExpense />} />
        </Routes>
      </ExpensesProvider>
    </BrowserRouter>
  );
}

export default App;
