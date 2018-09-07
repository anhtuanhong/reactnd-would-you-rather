import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatAnswerQuestion } from '../utils/helper'
import { withRouter, Link } from 'react-router-dom'
//import { Link, withRouter } from 'react-router-dom'
import Answered from './Answered'
import { answerQuestion } from '../actions/shared'

class Question extends Component {
	state = {
		isList : true,
		isAnswered: false
	}

	handleAnswer = (option) => {
		const { dispatch, question, authedUser } = this.props

		dispatch(answerQuestion({
			qid:question.id,
			answer: option,
			authedUser
		}))

		this.setState({
			isAnswered: true
		})
		//Hanlde Answer for Question and flip resource
	}

	toQuestion = (e, id) => {
		e.preventDefault()
		this.props.history.push(`/question/${id}`)
	}

	render() {
		const { question, authedUser, isList } = this.props

		if (question === null) {
			return <p>This Question Doesn't Exist</p>
		}

		const {
			id, name, avatar, optionOne, optionTwo
		} = question

		const hasAnswered = ( question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) ) ? true : false

		return (
			<Fragment>
				<h1>{ isList === false ? 'Poll' : ''}</h1>
				<div className='question'>
					<img
						src={avatar}
						alt={`Avatar of ${name}`}
						className='avatar'
					/>
					<div className='question-info'>
					<h5 className='center'>{name} Asks Would You Rather...</h5>
						{ isList === true
							? ( 
								<Fragment>
									<h4 className='center'>{`...${optionOne.text} OR ${optionTwo.text}...`}</h4>
									<div className='question-button' onClick={(e) => this.toQuestion(e, id)}>View Poll</div>
								</Fragment>
							):(
							 <Answered hasAnswered={hasAnswered} authedUser={authedUser} optionOne={optionOne} optionTwo={optionTwo} toParent={this.handleAnswer} />
							)
						}
						{ hasAnswered && !isList
							? <Link to='/' className='question-button small'>Done</Link>
							: '' 
						}
					</div>
				</div>
			</Fragment>
		)
	}
}


function mapStateToProps ({authedUser, users, questions}, { id }) {

  const question = questions[id]
  
  return {
    authedUser,
    question: question
      ? formatAnswerQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Question))