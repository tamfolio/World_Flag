import React, { Component } from 'react'

 class App extends Component {

  constructor() {
    super();
    this.state ={
      countryData: []
    }
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(response => console.log(response))
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
