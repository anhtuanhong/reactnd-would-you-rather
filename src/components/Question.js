import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helper'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
	handleAnswer = (e) => {
		e.preventDefault()

		//Hanlde Answer for Question and flip resource
	}

	render() {
		const { question, authedUser } = this.props

		if (question === null) {
			return <p>This Question Doesn't Exist</p>
		}

		const {
			id, name, avatar, text, timestamp, hasAnswered, optionOne, OptionTwo
		} = question

		console.log(question)

		return (
			<Link to={`/question/${id}`} className='question'>
				<img
					src={avatar}
					alt={`Avatar of ${name}`}
					className='avatar'
				/>
				<div className='question-info'>
				<p>{name} asks:</p>
				<h4>Would You Rather...</h4>
				{ hasAnswered === true
					//? <Answer optionOne={optionOne} optionTwo={optionTwo} id={authedUser} />
					//: <Unanswered optionOne={optionOne} optionTwo={optionTwo} id={authedUser} />
					? 'Answered'
					: 'Not Answered'
				}
				</div>
			</Link>
		)
	}
}


function mapStateToProps ({authedUser, users, questions}, { id }) {
  //const question = questions[id]
  const question = questions['8xf0y6ziyjabvozdd253nd']

  return {
    authedUser,
    hasAnswered: users[authedUser].answers.hasOwnProperty(id),
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Question))