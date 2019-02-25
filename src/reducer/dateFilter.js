import { DATE_FILTER } from '../constants'

export default (state = { from: null, to: null }, action) => {
  const { type } = action
  switch (type) {
    case DATE_FILTER: {
      const { id } = action.payload
      return id
    }
    default: {
      return state
    }
  }
}
