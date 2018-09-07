import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
//import { answerQuestion } from '../actions/shared'

class NewQuestion extends Component {
	state = {
		optionOne : '',
		optionTwo : '',
		submitted : false,
	}

	handleChange = (e, value) => {
		e.preventDefault()

		this.setState({
			[value]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.dispatch(handleNewQuestion({
			optionOneText : this.state.optionOne,
			optionTwoText : this.state.optionTwo,
			author : this.props.authedUser
		}))

		this.setState({
        optionOneText:'',
        optionTwoText:'',
        submitted : true
      })
	}

	render() {
		const { name, avatarURL } = this.props
		const { optionOne, optionTwo } = this.state 

		if(this.state.submitted) {return <Redirect to='/' />}

		return (
			<Fragment>
				<div className='question'>
					<img
						src={avatarURL}
						alt={`Avatar of ${name}`}
						className='avatar'
					/>
					<div className='question-info'>
					<h5 className='center'>Complete the poll:</h5>
					<h4 className='center'>Would You Rather...</h4>
						<input type='text' placeholder='Enter Option One Text Here' value={optionOne} onChange={(e) => this.handleChange(e, 'optionOne')} />
						<p className='center'>OR</p>
						<input type='text' placeholder='Enter Option Two Text Here' value={optionTwo} onChange={(e) => this.handleChange(e, 'optionTwo')} />
						<button className='question-button' onClick={(e) => this.handleSubmit(e)} disabled={optionOne === '' || optionTwo === '' ? 'disabled' : ''}>Save</button> 
					</div>
				</div>
			</Fragment>
		)
	}
}


function mapStateToProps ({authedUser, users}) {
  
  return {
    authedUser,
    name: users[authedUser].name,
    avatarURL: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(NewQuestion)