import { DELETE_ARTICLE, INCREMENT, CHANGE_FILTER } from '../constants'

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

export function changeFilters(filterConfig) {
  return {
    type: CHANGE_FILTER,
    filterConfig: { ...filterConfig }
  }
}
