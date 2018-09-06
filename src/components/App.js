import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import QuestionPage from './QuestionPage'
import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'
import './css/App.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <LoadingBar />
          <div className="container">
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/leaderboard' component={Leaderboard} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
