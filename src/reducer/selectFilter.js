import { SELECTED_FILTER } from '../constants'

export default (selectedFilter = [], action) => {
  const { type } = action
  switch (type) {
    case SELECTED_FILTER: {
      const { id } = action.payload
      return id
    }
    default:
      return selectedFilter
  }
}
