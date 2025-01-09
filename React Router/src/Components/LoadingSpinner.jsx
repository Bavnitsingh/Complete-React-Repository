const LoadingSpinner = () => {
  return (
    <center>
      {" "}
      <div className="spinner-border text-primary Loader" role="status" style={{width:"5rem",height:"5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
}
export default LoadingSpinner;