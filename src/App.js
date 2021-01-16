
import './styles/App.scss';
import React, { Component } from 'react'
import Layout from './layouts/layout'
import { ToastProvider } from 'react-toast-notifications'

class App extends Component {
  render() {
    return (
      <div>
        <ToastProvider>
          <Layout />
        </ToastProvider>

      </div>
    )
  }
}




export default App;
