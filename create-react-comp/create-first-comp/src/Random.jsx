function Random() {
  let number = Math.random()*100;
  return <h3> Random no: { Math.round(number)}</h3>
}
export default Random;