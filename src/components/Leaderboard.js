import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LeaderboardItem from './LeaderboardItem'


class Leaderboard extends Component{

	render () {

		if( this.props.authedUser === null ){return <Redirect to={{pathname: '/login', state: {from: this.props.location}}} />}

		return (
				<div className='leaderboard'>
					<ul>
					{ this.props.sortedUsers.map((id) => (
						<li key={id}>
							<LeaderboardItem id={id} />
						</li>
					))}
					</ul>
				</div>
		)
	}
}

function mapStateToProps ({authedUser, users }) {

  const sortedUsers = Object.keys(users)
  	.sort((a,b) => Object.keys(users[b].answers).length - Object.keys(users[a].answers).length || Object.keys(users[b].questions).length - Object.keys(users[a].questions).length )
  
  return {
    authedUser,
    sortedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)