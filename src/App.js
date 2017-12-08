import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};//hardcoded business to represent what will be pulled by the yelp API later

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        //<SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.businesses} />
      </div>
    );
  }
}

export default App;