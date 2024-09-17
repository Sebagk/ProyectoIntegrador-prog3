import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: false
    };
  }

  componentDidMount(){
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
      this.setState({
        esFavorito: estaEnFavoritos
      })
    }
  }

  handleShowextra() {
    this.setState({
      extra: !this.state.extra
    });
  }

  agregarFavorito(){
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      parsedArray.push(this.props.movie.id)
      const stringArray = JSON.stringify(parsedArray)
      localStorage.setItem('favoritos', stringArray)
    } else {
      const primerMovie = [this.props.movie.id]
      const stringArray = JSON.stringify(primerMovie)
      localStorage.setItem('favoritos', stringArray)
    }
    this.setState({
      esFavorito: true
    })
  }

  sacarFavorito(){
    const storage = localStorage.getItem('favoritos')
    const parsedArray = JSON.parse(storage)
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
      const stringArray = JSON.stringify(favoritosRestantes)
      localStorage.setItem('favoritos', stringArray)
      this.setState({
        esFavorito: false
      })
  }

  render() {
    const { id, title, poster_path, overview } = this.props.pelicula;
    return (
      <article className="movie-card">
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
        <section className={this.state.extra ? "show" : "hide"}>
          <p>{overview}</p>
        </section>
        <button className="favoritos-button" onClick= {() => !this.state.esFavorito ?
        this.agregarFavorito() : this.sacarFavorito()}> 
        {!this.state.esFavorito ? "agregar a favoritos" : 
        "Quitar de favoritos"}</button>
      </article>
    );
  }
}

export default Card;
