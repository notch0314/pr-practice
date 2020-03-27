import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContent from '../components/AppContent'
import AppHeader from '../components/AppHeader'
import Home from './Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </AppContent>
      </>
    </BrowserRouter>
  )
}

export default AppRouter