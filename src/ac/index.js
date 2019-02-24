import { DELETE_ARTICLE, INCREMENT, SELECT_ARTICLES, SET_RANGE } from '../constants'

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

export function selectArticles(payload) {
  return {
    type: SELECT_ARTICLES,
    payload
  }
}

export function setRange(payload) {
  return {
    type: SET_RANGE,
    payload
  }
}
