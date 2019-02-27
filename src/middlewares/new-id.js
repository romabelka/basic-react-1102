const newId = () =>
  Math.random()
    .toString(16)
    .substring(2) +
  Math.random()
    .toString(16)
    .substring(2)
export default (store) => (next) => (action) => {
  console.log('generated id: ', newId())
  next(action)
}
