import { useState } from "react";
import "../styles/ExpenseForm.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function ExpenseForm() {
  const navigate = useNavigate();
  const [formdata, setfordata] = useState({
    amount: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    category: "",
  });
  const [errors, SetErrors] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setfordata((prev) => ({
      ...prev,
      [name]: name === "amount" && value !== "" ? Number(value) : value,
    }));
  };
  const validate = () => {
    const newErrors = {};

    if (!formdata.amount || formdata.amount <= 0) {
      newErrors.amount = "Enter an amount greater then 0";
    }
    if (!formdata.description.trim()) {
      newErrors.description = "Description is requied";
    }

    if (!formdata.date) {
      newErrors.date = "Date is requied";
    }

    if (!formdata.category) {
      newErrors.category = "seleact a category";
    }

    SetErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const expense = JSON.parse(localStorage.getItem("expense") || "[]");

    const nevexpense = { ...formdata, id: uuidv4() };
    console.log("expense addes successfully", nevexpense);
    localStorage.setItem("expense", JSON.stringify([...expense, nevexpense]));
    navigate("/");
  };
  return (
    <div className="expenseform">
      <form onSubmit={handlesubmit}>
        <h1>Expense form</h1>
        <input
          type="number"
          name="amount"
          placeholder="enter Amount.."
          value={formdata.amount}
          onChange={handlechange}
        />
        {errors.amount && <p className="validation">{errors.amount}</p>}

        <input
          type="text"
          name="description"
          placeholder="enter Description.."
          value={formdata.description}
          onChange={handlechange}
        />
        {errors.description && (
          <p className="validation">{errors.description}</p>
        )}

        <input
          type="date"
          name="date"
          placeholder="Enter Date.."
          value={formdata.date}
          onChange={handlechange}
        />
        {errors.date && <p className="validation">{errors.date}</p>}

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          defaultValue=""
          onChange={handlechange}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="transporting">Trannsporting</option>
          <option value="education">Eduction</option>
          <option value="phonBill">Phone Bill</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && <p className="validation">{errors.category}</p>}

        <div className="btn">
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
}
