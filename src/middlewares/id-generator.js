export default (store) => (next) => (action) => {
  next({
    ...action,
    generatedId: Date.now()
  })
}
