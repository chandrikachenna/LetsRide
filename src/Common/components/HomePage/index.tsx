import React from 'react'
import { Link } from 'react-router-dom'

import ReactLogo from '../Icons/ReactLogo'
import { LETSRIDE_ROUTE_PATH } from '../../constants/NavigationConstants'

import './index.css'
import { DropDown } from '../DropDown'

function HomeRoute() {
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
        <Link to={LETSRIDE_ROUTE_PATH}>Let's Ride</Link>
        <DropDown />
      </header>
    </div>
  )
}

export default HomeRoute
