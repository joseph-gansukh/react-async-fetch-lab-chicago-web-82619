// create your App component here
import React, { Component } from 'react'

export class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        people: data.people
      })
    })
  }

  listPeople = () => this.state.people.map(person => {
    return <p>{person.name}</p>
  })

  render() {
    console.log(this.state
      )
    return (
      <div>
        {this.listPeople()}
      </div>
    )
  }
}

export default App
