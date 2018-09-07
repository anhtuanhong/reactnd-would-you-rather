import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
 
class Login extends Component {
	state = {
		value: ''
	}

	handleChange = (e) => {
		e.preventDefault()

		this.setState({
			value: e.target.value
		})
	}

	handleLogin = (e) => {
		e.preventDefault()

		this.props.dispatch(setAuthedUser(this.state.value))
	}

	render() {
		const { users } = this.props
		const { value } = this.state

		if(this.props.authedUser) {return <Redirect to='/' />}

		return (	
			<div className='container login'>
				<h1 className='center'>Would You Rather...</h1>
				<div className='question'>
					<img
						src='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media'
						alt='Avatar of React'
						className='avatar'
					/>
					<div className='question-info'>
					<h5 className='center'>Please Login to Continue:</h5>
						<select value={ value } onChange={(e) => this.handleChange(e)}>
								<option value='' >Please Select a Profile</option>
							{ Object.keys(users).map((id) => (
								<option key={id} value={users[id].id}>{users[id].name}</option>
							))}
						</select>
						<button className='question-button' onClick={(e) => this.handleLogin(e)} disabled={value === '' ? 'disabled' : ''}>Sign In</button>
					</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps ({ authedUser, users }) {

  return {
  	authedUser,
    users
  }
}

export default connect(mapStateToProps)(Login)