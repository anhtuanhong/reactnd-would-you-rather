import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component{
	state={
		showUnanswered : true //True = Unanswered
	}

	toggleFilter = (e, showUnanswered) => {
		e.preventDefault()

		this.setState(() => ({
			showUnanswered: showUnanswered
		}))
	}

	render(){
		const { authedUser, questionIds, answeredIds } = this.props

		if( authedUser === null ){return <Redirect to={{pathname: '/login', state: {from: this.props.location}}} />}

		const { showUnanswered } = this.state
		
		const filteredQuestions = showUnanswered ? questionIds.filter( id => !answeredIds.includes(id)) : questionIds.filter( id => answeredIds.includes(id))

		return(
				<div>
					<div className='answerContainer'>
						<div className={showUnanswered ? 'active-option option-one' : 'option-one'} onClick={(e) => this.toggleFilter(e, true)}>Unanswered</div>
						<div className={!showUnanswered ? 'active-option option-two' : 'option-two'} onClick={(e) => this.toggleFilter(e, false)}>Answered</div>
					</div>
					<div>
						<ul className='question-list'>
							{ filteredQuestions.length <= 0 
								? <h4 className='center'>No {showUnanswered ? 'Unanswered' : 'Answered'} Polls</h4>
								: filteredQuestions.map((id) => (
				            <li key={id}>
				              <Question isList={true} id={id}/>
				            </li>
				          ))
							}
						</ul>
					</div>
				</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions}) {
  

  return {
  	authedUser,
  	answeredIds: authedUser ? Object.keys(users[authedUser].answers) : null,
    questionIds: authedUser ? Object.keys(questions)
    	.sort((a,b) => questions[b].timestamp - questions[a].timestamp) : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionList))