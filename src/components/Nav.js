import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'


class Nav extends Component {
	handleLogout = (e) => {
		e.preventDefault()

		this.props.dispatch(setAuthedUser(null))
	}

	render() {
		const{ user } = this.props

		return (
			<nav className='nav'>
			{ user === null 
				? ''
				: <Fragment>
						<ul className='nav-left'>
							<li>
								<NavLink to='/' exact activeClassName='active'>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to='/add' exact activeClassName='active'>
									Add
								</NavLink>
							</li>
							<li>
								<NavLink to='/leaderboard' exact activeClassName='active'>
									Leaderboard
								</NavLink>
							</li>
						</ul>
						<ul className='nav-right'>
							<li>
								<span>Hi {user.name}</span>
								<img
									src={user.avatarURL}
									alt={`Avatar of ${user.name}`}
									className='avatar'
								/>
							</li>
							<li>
								<div className='question-button small' onClick={(e) => this.handleLogout(e)}>Logout</div>
							</li>
						</ul>
					</Fragment>
			}
			</nav>
		)
	}
}

function mapStateToProps ({authedUser, users }) {

  return {
    user: (authedUser === null) ? null : users[authedUser]
  }
}

export default withRouter(connect(mapStateToProps)(Nav))