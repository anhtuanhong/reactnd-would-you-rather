import React, { Component } from 'react'
import { connect } from 'react-redux'


class Leaderboard extends Component{

	render () {
		return (
			<div>
			{this.props.sortedUsers.map((id) => (
				{id}
			))}
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users }) {

  //const question = questions[id]
  
  return {
    authedUser,
    sortedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)