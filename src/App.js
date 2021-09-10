import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home/Home'


const App = () => {
  return (
    <>
      <Router>
        <Route exact component={Home} path="/" />
      </Router>
    </>
  )
}

export default App

