import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component{
	state={
		showUnanswered : true 
	}

	toggleFilter = (e, showUnanswered) => {
		e.preventDefault()

		console.log( showUnanswered )

		this.setState(() => ({
			showUnanswered: showUnanswered
		}))
	}

	render(){
		const { questionIds, answeredIds } = this.props
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
						{filteredQuestions.map((id) => (
	            <li key={id}>
	              <Question isList={true} id={id}/>
	            </li>
	          ))}
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions}) {
  
  return {
  	answeredIds: Object.keys(users[authedUser].answers),
    questionIds: Object.keys(questions)
    	.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList)