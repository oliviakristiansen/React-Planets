import React from 'react';

import axios from 'axios';

class Planets extends React.Component {
  state = {
    planetData: []
  };
  // This is using axios to run a GET method on the defined url in the components prop in App.js. It is then setting the state as the data that was sent back. The data has to be JSON, which is why the JSON.stringify is needed in the back-end route.
  fetchPlanetData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      this.setState(() => {
        return {
          planetData: response.data
        };
      });
      console.log('after SetState: ', this.state.values);
    });
  };

  componentDidMount() {
    this.fetchPlanetData();
  }

  render() {
    console.log(this.state.planetData)
    //if there is no planetData sent back, it will return a string
    if(this.state.planetData.length === 0){
      return <div>Failed to fetch data from server</div>
    }
    // the below maps over the planetData and returns each planet with their name and numberOfMoons
    const planets = this.state.planetData.map(planet => 
      (<div key={planet.id}>
        <em>{planet.name}</em>: {planet.numberOfMoons}
      </div>)
    )
    return <div>{planets}</div>;
  }
}

export default Planets;