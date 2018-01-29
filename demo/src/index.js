import React, {Component} from 'react'
import {render} from 'react-dom'

import App from '../../src/App.js'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-synapse-components Demo</h1>
      <App/>
    </div>
  }
}

render(<App/>, document.querySelector('#demo'))
