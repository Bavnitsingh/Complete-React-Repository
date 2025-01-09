function AddTODO() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-btn">
            Add 
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTODO;