import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promises";
import Filmcards from "./cards";
import People from "./people"

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      people: [],
      isLoaded: false,
      showFilms: false,
      showPeople: false,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          films: json,
          showFilms: true,
          showPeople: false,
          
        });
      })
      .catch((err) => console.log(err));
      fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          people: json,
          showfilms: false,
          showPeople: true

        });
      })
      .catch((err) => console.log(err));
      
  }

  showFilms = ()=> {this.setState({showfilms: true, showPeople: false })}




  render() {
      if (this.state.showFilms == true && this.state.showPeople == false ) {
    return this.state.films.map((ghibiliFilms) => (
      <Filmcards oneFilm={ghibiliFilms} />
    ));
      } else {return ( <button type="button" class="btn btn-primary btn-lg" onClick={() => this.showFilms()}>Show Films</button>)
    }
    if (this.state.showFilms == false && this.state.showPeople == true ) {
        
    }
  }
}

export default App;
