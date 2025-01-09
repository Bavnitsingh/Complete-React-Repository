const LoadingSpinner = () => {
  return (
    <center>
      {" "}
      <div className="spinner-border text-danger loader" style={{
        "width": "100px",
        "height": "100px"
      }} role="status">
       </div>
    </center>
  );
};
export default LoadingSpinner;
