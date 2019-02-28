import React, { Component } from 'react';
import "../Contact/Contact"
import { Link, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }

  render() {
    return(
      <Router>
      <div className="App">
      <header>
        <nav>
          <Link to="/">Contact List</Link>
          <Link to="/new-contact">New Contacts</Link>
        </nav>
          <Route path="/" component={ ContactList }/>
          <Route path="/new-contact" component={ NewContact }/>
      </header>
        <p>app</p>
      </div>
      </Router>
    )}
}

export default App;