import React from "react";
import { Component } from "react";
import { options } from "../../options";


class CardGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/genre/movie/list", options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    render() {
      return (
        <div>
          {/* {this.state.characters.length > 0 ? (
            this.state.characters.map((character, index) => (
              <CharacterCard character={character} key={index} />
            ))
          ) : (
            <p>Cargando...</p>
          )} */}
        </div>
      );
    }
  }
  
export default CardGrid
