import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'

import HomeRoute from './Common/components/HomePage'

import { HOME_ROUTE_PATH } from './Common/constants/NavigationConstants'

import i18n from './Common/i18n'
import { userRoutes } from './UserModule/routes'

const App = () => {
  return (
    <Provider>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div />}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              {userRoutes}
              <Route path={HOME_ROUTE_PATH}>
                <HomeRoute />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  )
}

export default App
