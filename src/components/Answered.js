import React, { Component, Fragment } from 'react'

class Answered extends Component {

	toParent = (e, option) => {
		e.preventDefault()
		this.props.toParent( option );
	}

	render() {
		const { hasAnswered, authedUser, optionOne, optionTwo } = this.props

		const totalVotes = optionOne.votes.length + optionTwo.votes.length

		return (
			<Fragment>
			{ hasAnswered 
				? (
					<div className='answerContainer'>
						<div className={optionOne.votes.includes(authedUser) ? 'active-option option-one' : 'option-one'}>
						  <h6>{optionOne.votes.includes(authedUser) ? 'You Selected:' : ' '}</h6>
							<span className='text'>{optionOne.text}</span>
						  <span className='percent'>{Math.round(optionOne.votes.length/totalVotes * 100) / 1}%</span>
						  <span className='count'>Voted: {optionOne.votes.length}</span>
						</div>
						<div className={optionTwo.votes.includes(authedUser) ? 'active-option option-two' : 'option-two' }>
							<h6>{optionTwo.votes.includes(authedUser) ? 'You Selected:' : ' '}</h6>
							<span className='text'>{optionTwo.text}</span>
							<span className='percent'>{Math.round(optionTwo.votes.length / totalVotes * 100) / 1}%</span>
						  <span className='count'>Voted: {optionTwo.votes.length}</span>
						</div>
					</div>
				):(
					<div className='answerContainer'>
						<div className='option-one' onClick={(e) => this.toParent(e, 'optionOne')}>
							<span className='text'>{optionOne.text}</span>
						</div>
						<div className='option-two' onClick={(e) => this.toParent(e, 'optionTwo')}>
							<span className='text'>{optionTwo.text}</span>
						</div>
					</div>
				)
			}
			</Fragment>
		)
	}
}

export default Answered