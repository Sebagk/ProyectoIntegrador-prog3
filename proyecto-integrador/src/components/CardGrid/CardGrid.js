import React from "react";
import { Component } from "react";
import { options } from "../../options";
import Card from "../Card/Card";
import "./CardGrid.css"; 
import { Link } from "react-router-dom";

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }
  
  componentDidMount() {
    const api = this.props.api;
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
      <section className="card-grid-container">
        <div>
          <Link to={this.props.link}><h4>Ver todas</h4></Link>
          </div>
          <div>
        {this.state.peliculas.length > 0 ? (
          this.state.peliculas.slice(0, this.props.cantidad).map((pelicula, index) => (
            <Card pelicula={pelicula} key={index} />
            
          ))
        ) : (
          <p>Cargando...</p>
        )}
        </div>
      </section>
    );
  }
}

export default CardGrid;
