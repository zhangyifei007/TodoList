import React, { Component } from 'react'
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore'

export default function setup() {
  class Root extends Component {

    constructor(props) {
      super(props)

      this.state = {
        store: null
      }
    }

    componentDidMount() {
      const store = configureStore()
      this.setState({
        store
      })
    }

    render() {
      const { store } = this.state
      if (!store) {
        return null
      }

      return (
        <Provider store={store}>
          <App></App>
        </Provider>
      )
    }
  }

  return Root;
}
