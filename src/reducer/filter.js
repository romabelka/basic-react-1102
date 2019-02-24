import { SET_SELECTED_ARTICLES, SET_DATE_FROM, SET_DATE_TO } from '../constants/index'

const defaultState = {
  dateFrom: null,
  dateTo: null,
  selectedArticles: []
}

export default (state = defaultState, action) => {
  const { type, payload = {} } = action

  switch (type) {
    case SET_DATE_FROM:
      return Object.assign({}, state, { dateFrom: payload.value })
    case SET_DATE_TO:
      return Object.assign({}, state, { dateTo: payload.value })
    case SET_SELECTED_ARTICLES:
      return Object.assign({}, state, { selectedArticles: payload.value })

    default:
      return state
  }
}
