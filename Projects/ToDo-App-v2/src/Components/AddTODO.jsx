import styles from "./AddTODO.module.css"
function AddTODO() {
  return (
    <div className="container kg-style">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            className={styles.input}
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.input} />
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
