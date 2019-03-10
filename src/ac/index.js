import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  INCREMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { LOAD_COMMENTS } from '../constants/index'

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

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

/*
export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `/api/article/${id}`
  }
}
*/

export function loadArticle(id) {
  return async (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    const rawRes = await fetch(`/api/article/${id}`)
    const response = await rawRes.json()

    dispatch({
      type: LOAD_ARTICLE + SUCCESS,
      payload: { id },
      response
    })
  }
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export function loadComments(page) {
  page = +page
  return async (dispatch) => {
    dispatch({
      type: LOAD_COMMENTS + START,
      payload: { page }
    })

    const rawRes = await fetch(`/api/comment/?limit=5&offset=${(page - 1) * 5}`)
    const response = await rawRes.json()

    dispatch({
      type: LOAD_COMMENTS + SUCCESS,
      payload: { page },
      response
    })
  }
}
