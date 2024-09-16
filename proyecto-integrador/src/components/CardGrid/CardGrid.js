import React from "react";
import { Component } from "react";
import { options } from "../../options";
import Card from "../Card/Card"

class CardGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        peliculas: []
      };
    }
    componentDidMount() {
      const api = this.props.api
      fetch(api, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            peliculas: data.results
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    render() {
      return (
        <div>
          {this.state.peliculas.length > 0 ? (
          this.state.peliculas.slice(0, 5).map((pelicula, index) => (
            <Card pelicula={pelicula} key={index} />
          ))
        ) : (
          <p>Cargando...</p>
        )}
        </div>
      );
    }
  }
  
export default CardGrid
