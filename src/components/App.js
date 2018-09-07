import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import QuestionPage from './QuestionPage'
import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'
import Login from './Login'
import NewQuestion from './NewQuestion'
import './css/App.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>                
          <LoadingBar style={{ backgroundColor: 'green', height: '5px' }} />          
            {this.props.loading === true
              ? <Login />
              : <Fragment>
                  <Nav /> 
                  <div className="container">               
                        <Route path='/' exact component={QuestionList} />
                        <Route path='/question/:id' component={QuestionPage} />
                        <Route path='/add' component={NewQuestion} />
                        <Route path='/leaderboard' component={Leaderboard} />
                  </div>
                </Fragment>
            }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
