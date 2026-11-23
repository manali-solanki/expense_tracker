import "../styles/EditModal.css"



function EditModal() {
  return (
    <div className="model">
      <div div className="form-box">
      <form>
        <h1> Edit Expense</h1>

        <input
          type="number"
          name="amount"
          defaultValue=""
          placeholder="Amount"
        />

        <input
          type="text"
          name="description"
          defaultValue=""
          placeholder="Description"
        />
        <input type="date" name="date" defaultValue="" />

        <label htmlFor="category">category:</label>
        <select id="category" name="category" defaultValue="">
          <option value="">select name=" category"</option>
          <option value="food">food</option>
          <option value="shopping">Shooping</option>
          <option value="transportation">transportation</option>
          <option value="eductation">eductation</option>
          <option value="phoneBill">phoneBill</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <div className="model-btn">
          <button type="button" className="edit">
            Update
          </button>
          <button type="button" className="cancle">
            Cancle
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default EditModal;
