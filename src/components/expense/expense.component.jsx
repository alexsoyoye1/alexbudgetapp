import Editbtn from "../../assets/editbtn.svg?react";
import Deletebtn from "../../assets/trashbtn.svg?react";

import { Link } from "react-router-dom";
import "./expense.css";
const Expense = ({ bugetItem }) => {
  const { id, title, cost } = bugetItem;

  return (
    <div className="expense-item" key={id}>
      <p>{title}</p>
      <span className="cost-btn">₦ {cost}</span>
      <div className="action-btns">
        <Link to={`/edit/${id}`}>
          <Editbtn />
        </Link>
        <Link to={`/delete/${id}`}>
          <Deletebtn />
        </Link>
      </div>
    </div>
  );
};

export default Expense;
