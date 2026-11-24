import { useEffect, useState } from "react";
import "../styles/EditModal.css";

function EditModal({ editid, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    id: editid,
    amount: null,
    description: "",
    date: "",
    category: "",
  });

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expense") || "[]");
    const expense = expenses.find((item) => String(item.id) === String(editid));
  
    //eslint-disable-next-line react-hooks/set-state-in-effect
  if(expense) setFormData(expense);
  },[editid]);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  //Update expense
  const handleUpdate=(e) => {
    e.preventDefault();

    const expenses=JSON.parse(localStorage.getItem("expense")|| "[]");
    const updateExpenses = expenses.map((item) =>
      String(item.id) === String(editid) ? formData : item
    );

    localStorage.setItem("expense",JSON.stringify(updateExpenses));
    onUpdate();
    onClose();
  };
  return (
    <div className="model">
      <div div className="form-box">
        <form onSubmit={handleUpdate}>
        
          <h1> Edit Expense</h1>

          <input
            type="number"
            name="amount"
            value={formData.amount || ""}
            onChange={handleChange}
            defaultValue=""
            placeholder="Amount"
          />

          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            defaultValue=""
            placeholder="Description"
          />
          <input type="date" name="date" defaultValue=""  value={formData.date}
            onChange={handleChange} />

          <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          defaultValue=""
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="transporting">Trannsporting</option>
          <option value="education">Eduction</option>
          <option value="phonBill">Phone Bill</option>
          <option value="entertainment">Entertainment</option>
        </select>
          <div className="model-btn">
            <button className="edit">
              Update
            </button>
            <button   className="cancle" onClick={onClose}>
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
