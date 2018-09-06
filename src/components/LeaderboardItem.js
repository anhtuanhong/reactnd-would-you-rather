import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderboardItem extends Component{
	render () {

		const { id, name, avatarURL, answers, questions } = this.props.user

		return (
			<div className='leaderboard-item'>
				<img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='leaderboard-info'>
        	<h3>{name}</h3>
        	<div className='leaderboard-stat-container'>
        		<div className='leaderboard-stat-box'>
        			<span className='count'># of Questions Answered</span>
        			<span className='leaderboard-number'>{Object.keys(answers).length}</span>
        		</div>
        		<div className='leaderboard-stat-box'>
        			<span className='count'># of Questions Asked</span>
        			<span className='leaderboard-number'>{Object.keys(questions).length}</span>
        		</div>
        	</div>
        </div>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users }, {id} ) {

  return {
    authedUser,
    user: users[id]
  }
}

export default connect(mapStateToProps)(LeaderboardItem)