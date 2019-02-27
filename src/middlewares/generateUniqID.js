export default (store) => (next) => (action) => {
  action.random = Math.random()
    .toString(36)
    .substr(2, 9)
  next(action)
}
