import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_SELECTED_ARTICLES
} from '../constants'

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

export function setDateFrom(value) {
  return {
    type: SET_DATE_FROM,
    payload: {
      value
    }
  }
}

export function setDateTo(value) {
  return {
    type: SET_DATE_TO,
    payload: {
      value
    }
  }
}

export function setSelectedArticles(value) {
  return {
    type: SET_SELECTED_ARTICLES,
    payload: {
      value
    }
  }
}
