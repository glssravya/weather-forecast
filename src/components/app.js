import React, { Component } from 'react';
import Searchbar from '../containers/searchbar';
import WeatherCards from '../containers/weathercards'
class App extends Component {
    render() {
        return (
            <div> 
                <Searchbar />
                <WeatherCards />
            </div>
        );
    }
}
export default App