import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
//   <Route {...rest} render={props => (authenticated === true ? <Redirect to="/profile" /> : <Component {...props} />)} />
// )

const AuthRoute = ({ component, authenticated, ...rest }) => (
  <component {...rest} render={props => (authenticated === true ? <Redirect to="/profile" /> : <Redirect to="/" />)} />
)

export default AuthRoute
