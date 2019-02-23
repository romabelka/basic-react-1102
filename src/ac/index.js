import { DELETE_ARTICLE, INCREMENT, SELECTED_FILTER } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function selectedFilter(id) {
  return {
    type: SELECTED_FILTER,
    payload: { id }
  }
}
