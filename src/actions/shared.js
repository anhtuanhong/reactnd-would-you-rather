import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTON_ANSWER'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

function saveUserQuestionAnswer ({authedUser, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function answerQuestion (info){
  return (dispatch) => {
    dispatch(saveUserQuestionAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in Answering Question')
        dispatch(saveUserQuestionAnswer(info))
        alert('There was an error. Please try again')
      })
  } 
}