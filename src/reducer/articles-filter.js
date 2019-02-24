import { SELECT_ARTICLES, SET_RANGE } from '../constants'

const initialState = {
  range: {
    from: null,
    to: null
  },
  selected: null
}

export default (filtersState = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLES: {
      return {
        ...filtersState,
        selected: payload
      }
    }

    case SET_RANGE: {
      return {
        ...filtersState,
        range: payload
      }
    }
    default:
      return filtersState
  }
}
