import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Favorito from "../Favorito/Favorito";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: false
    };
  }

  handleShowextra() {
    this.setState({
      extra: !this.state.extra
    });
  }

  render() {
    const { id, title, poster_path, overview } = this.props.pelicula;
    return (
      <section className="movie-card">
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
            className="card-image"
          />
          </Link>
          <Link to={`/movies/${id}`} className="movie-title">
            <h4>{title}</h4>
          </Link>

        <button
          className="toggle-button"
          onClick={() => this.handleShowextra()}
        >
          {!this.state.extra ? "Ver más +" : "Ver menos -"}
        </button>
        <article className={this.state.extra ? "show" : "hide"}>
          <p>{overview}</p>
        </article>
        <Favorito movie={this.props.pelicula} />
      </section>
    );
  }
}

export default Card;
