import { useEffect, useState } from "react";
import "../styles/ExpenseneList.css";
import ConfirmationModal from "./ConfirmationModal";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";
function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [deleteExpense, setDeleteExpense] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  const loadExpenses = () => {
    const savedExpenses = JSON.parse(localStorage.getItem("expense") || "[]");
    setExpenses(savedExpenses);
  };
  useEffect(() => {
    //safe:we only read localstroge on mount
    //eslint-disable-next-line react-hooks/set-state-in-effect
    loadExpenses();
  }, []);
  const totalAmount = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );
  const handleDelete = (id) => {
    const updateExpense = expenses.filter((item) => item.id !== id);

    localStorage.setItem("expense", JSON.stringify(updateExpense));

    setExpenses(updateExpense);
    setDeleteExpense(null);
  };

  const editHandler = (id) => {
    setEditId(id);
    setOpenModel(true);
  };

  // Read more handler
  const handleReadMore = (id) => navigate(`/expenseDetails/${id}`);

  return (
    <>
      <div className="ExpenseList">
        <div className="list-search">
          <div>
            <h1>your Expense</h1>
            <p className="list-help">search,edits, or remove an expense</p>
          </div>
          <div>
            <select>
              <option> All categories</option>
              <option> Food</option>
              <option> Travel</option>
              <option> Shooping</option>
              <option> Entertainment</option>
            </select>
            <input type="search" placeholder="search expense..." />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* condition ? (true part) : (false part) */}
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.amount}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td className="table-action">
                    <button
                      className="btn-delete"
                      onClick={() => setDeleteExpense(expense)}
                    >
                      delete
                    </button>
                    <button
                      onClick={() => editHandler(expense.id)}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      className="btn-readmore"
                      onClick={() => handleReadMore(expense.id)}
                    >
                      view
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  no result found
                </td>
              </tr>
            )}
            <tr className="expense-total">
              <td colSpan={5}>total:{totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {deleteExpense !== null && (
        <ConfirmationModal
          title="Delete Expense"
          message={"Are you sure you want to delete this expense"}
          confirmText="Delete"
          cancleText="Cancle"
          onCancel={() => setDeleteExpense(null)}
          onConfirm={() => handleDelete(deleteExpense.id)}
        />
      )}
      {openModel && editId !== null && (
        <EditModal
          editid={editId}
          onClose={() => setOpenModel(false)}
          onUpdate={loadExpenses}
        />
      )}
    </>
  );
}
export default ExpenseList;
