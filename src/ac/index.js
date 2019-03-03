import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_COMMENTS,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL
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

export function loadComments(articleId) {
  return (dispatch) => {
    dispatch({
      type: LOAD_COMMENTS + START,
      payload: {
        articleId
      }
    })

    fetch(`/api/comment?article=${articleId}`)
      .then((rawRes) => rawRes.json())
      .then((response) => {
        console.log(response)
        dispatch({
          type: LOAD_COMMENTS + SUCCESS,
          payload: {
            articleId,
            response
          }
        })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_COMMENTS + FAIL,
          payload: {
            articleId,
            error
          }
        })
      })
  }
}
