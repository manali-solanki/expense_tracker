
import '../styles/ExpenseneList.css';
function ExpenseList({expenses}){
    return(
        <div className='ExpenseList'>
            <div className='list-search'>
                <div>
                    <h1>your Expense</h1>
                    <p className='list-help'>
                        search,edits, or remove an expense
                    </p>
                </div>
            <div>
  <select>
            <option> All categories</option>
            <option> Food</option>
            <option> Travel</option>
            <option> Shooping</option>
            <option> Entertainment</option>
        </select>
        <input
        type ="search"
                placeholder='search expense...'/>

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

  {expenses.map((expense)=>(
      <tr>
        <td>{expense.amount}</td>
        <td>{expense.shopping}</td>
        <td>{expense.date}</td>
        <td>{expense.category}</td>
        <td className="table-action">
            <button className="btn-delete">delete</button>
            <button className="btn-edit">Edit</button>
            <button className="btn-readmore">view</button>
        </td>
    </tr>
  ))}
    <tr className="expense-total">
        <td colSpan={5}>total:₹2,000</td>
    </tr>
</tbody>
        </table>

        </div>

    )
}
export default ExpenseList