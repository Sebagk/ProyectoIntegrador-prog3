import React from "react";
import { Component } from "react";

class Favorito extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false
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
        return (
            <button className="favoritos-button" onClick= {() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
                {!this.state.esFavorito ? "Agregar a favoritos ♡" : "Quitar de favoritos ❤"} 
            </button>
        )
    }
}

export default Favorito;