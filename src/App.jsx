import React, { Component } from 'react'
import './App.css'
import FlagComponent from './Components/FlagComponent/FlagComponent';
import Header from './Components/Header/Header';
import SearchBar from './Components/Search&Filter/SearchBar';

 class App extends Component {

  constructor() {
    super();
    this.state ={
      countryData: [],
      SearchBar: ''
    }
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(response => 
        this.setState({
          countryData: response
        })
      )
  }
  render() {
      return (
      <div>
        <Header/>
        <SearchBar/>
        <div className="flexed-country">
        {
          this.state.countryData.map(({index, name, capital, population, region, flag}) => (
            
            <FlagComponent key={index} name={name} capital={capital} population={population} region={region} flag={flag}/>
            
          ))
        }
        </div>
        </div>
    )
  }
}

export default App
