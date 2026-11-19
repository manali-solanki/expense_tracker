import "../styles/ExpenseForm.css";

export default function ExpenseForm(){
    return(
        <div className="expenseform">
            <form>
                <h1>Expense form</h1>
                <input
                type="number"
                name="amount"
                placeholder="enter Amount.."
                />

                <input
                type="text"
                name="describtion"
                placeholder="enter Describtion.."
                />

                <input
                type="date"
                name="date"
                placeholder="Enter Date.."
                />
                <label htmlFor="category">Category:</label>
                <select id="category" name="category" defaultValue="">
                    <option value="">Select Category</option>
                     <option value="food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="transporting">Trannsporting</option>
                    <option value="education">Eduction</option>
                    <option value="phonBill">Phone Bill</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                <div className="btn">
                    <button type="button">Add Expense</button>
                </div>
            </form>

        </div>
    );
}