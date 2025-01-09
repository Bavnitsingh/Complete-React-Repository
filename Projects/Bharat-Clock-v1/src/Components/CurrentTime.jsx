function CurrentTime() {
  let time = new Date();
  return <p className="current-time">This is the Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>;
}
export default CurrentTime;