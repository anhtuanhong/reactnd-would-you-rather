ADD npm install --save react-router-dom


# Would You Rather Project

This is my submission for Would You Rather Project. This React App allows a user to impersonate a login and answer questions on would you rather do option A or option B. The user, after logging in, can add new polls and view the leaderboard where users are ranked. When a user answers a poll, the results are immediately displayed with the user's choice clearly displayed.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* install React Router with `npm install react-router-dom`
* install Redux with `npm install redux`
* install Redux-Thunk with `npm install redux-thunk`
* install React-Redux with `npm install react-redux`
* install Redux Loading with `npm install react-redux-loading`
* install React Transition with `npm install react-transition-group`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
│   └── manifest.json # JSON
└── src
    ├── actions
    │   ├── authedUser.js # AuthedUser Items to call Reducers
    │   ├── questions.js # Questions Items to call Reducers
    │   ├── shared.js # Shared Items to call Reducers
    │   └── users.js  # Users Items to call Reducers
    ├── reducers
    │   ├── authedUser.js # Reducers for Authenticating Users
    │   ├── questions.js # Reducers for Questions
    │   ├── index.js # Combine Reducers
    │   └── users.js  # Reducers for Users
    ├── middleware
    │   ├── index.js # 
    │   └── logger.js  # For debugging
    ├── components
    │   ├── css
    │   │   └── App.css # Default styling for APP
    │   ├── App.js # Main App for JS
    │   ├── Answered.js # Answered Compoenent, shows results of poll
    │   ├── Leaderboard.js # Leaderboard Compoenent, shows ranking of users
    │   ├── LeaderboardItem.js # Individual Leaderboard Items
    │   ├── Login.js # Login Component
    │   ├── Nav.js # Navigation Component for header
    │   ├── NewQuestion.js # New Question Compoenent, for adding polls
    │   ├── NoMatch.js # Error 404 Component
    │   ├── Question.js # Unanswered Poll Component
    │   ├── QuestionList.js # List of Questions Component
    │   ├── QuestionPage.js # Individual Component to display single Question Component
    ├── utils # Helpful files for running app
    │   ├── _DATA.js # Data files
    │   ├── api.js # API calls instead of calling Data
    │   └── helper.js # Helper Functions
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify the development process, Udacity provided a data file. The provided file [`_DATA.js`] has the initial data and [`api.js`] contains the API methods.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
