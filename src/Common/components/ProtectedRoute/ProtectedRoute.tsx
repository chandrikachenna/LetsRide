import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getAccessToken, setAccessToken } from '../../utils/StorageUtils'

interface ProtectedRouteProps {
  path: string
  renderedComponent: any
}

class ProtectedRoute extends React.Component<ProtectedRouteProps> {
  constructor(props) {
    super(props)
  }

  render() {
    const { path, renderedComponent: Component } = this.props
    setAccessToken('abc')
    if (getAccessToken()) {
      return <Route exact path={path} component={Component} />
    }
    return (
      <Redirect
        to={{
          pathname: '/signin'
        }}
      />
    )
  }
}
export { ProtectedRoute }
