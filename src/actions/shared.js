import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTON_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

//const AUTHED_ID = 'tylermcginnis'

const AUTHED_ID = null

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
        alert('There was an error. Please try again.')
      })
  } 
}

function saveNewQuestion(question) {
  console.log(question)
  return {
    type: SAVE_QUESTION,
    id: question.id,
    author: question.author,
    timestamp: question.timestamp,
    optionOne: question.optionOne.text,
    optionTwo: question.optionTwo.text
  }
}

export function handleNewQuestion (question){
  return (dispatch) => {
    dispatch(showLoading())
    console.log(question)
    return saveQuestion(question)
      .then((res) => dispatch(saveNewQuestion(res)))
      .then( () => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in Saving Question')
        dispatch(saveNewQuestion(question))
        alert('There was an error. Please try again.')
      })

  }
}