import React, { FC, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Router, Redirect, Link } from '@reach/router'

import { MobxPage, ReduxToolkitPage } from './pages'

const App: FC = () => (
  <Fragment>
    {/* Ugly header here */}
    <section style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/mobx">MobX</Link>
      <span> ----- </span>
      <Link to="/redux-toolkit">Redux-Toolkit</Link>
    </section>

    <Router>
      <MobxPage path="/mobx" />
      <ReduxToolkitPage path="/redux-toolkit" />

      <Redirect from="*" to="/redux-toolkit" />
    </Router>
  </Fragment>
)

ReactDOM.render(<App />, document.querySelector('#root'))
