import { ADD_COMMENT } from '../constants'

const newId = () =>
  Math.random()
    .toString(16)
    .substring(2) +
  Math.random()
    .toString(16)
    .substring(2)
export default (store) => (next) => (action) => {
  console.log('generated id: ', newId())

  const { type } = action

  if (type === ADD_COMMENT) {
    action.payload.newId = newId()
  }

  next(action)
}
