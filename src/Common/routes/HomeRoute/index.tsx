import React, { Component } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import ReactLogo from '../../components/Icons/ReactLogo'
import { LETSRIDE_ROUTE_PATH } from '../../../UserModule/constants/NavigationConstants'
import { withTranslation, WithTranslation } from 'react-i18next'
import './index.css'

interface HomeRouteProps extends RouteComponentProps, WithTranslation {}
interface InjectedProps extends HomeRouteProps {}

class HomeRoute extends Component<HomeRouteProps> {
  goToHomePage = () => {
    const { history } = this.props
    history.push(LETSRIDE_ROUTE_PATH)
  }
  render() {
    return (
      <div className='app'>
        <header className='bg-indigo-900 app-header'>
          <ReactLogo className='app-logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='app-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <Link to={LETSRIDE_ROUTE_PATH} onClick={this.goToHomePage}>
            Let's Ride
          </Link>
        </header>
      </div>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(HomeRoute)
)
