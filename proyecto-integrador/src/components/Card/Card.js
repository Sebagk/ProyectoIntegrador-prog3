import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css"

class Card extends Component {

    constructor (props){
        super(props)
        this.state = {
            extra:false
        }
    }

    handleShowextra(){
        this.setState({
            extra: !this.state.extra           
        })

    }

    render(){
        const { id, title, poster_path, overview } = this.props.pelicula;
        return(
            <article className='character-card'>
                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
                <Link to={`/movies/${id}`}><h4>{title}</h4></Link>
                
                <button onClick={() => this.handleShowextra()}>{!this.state.extra ? "Ver más+" : "Ver menos-"}</button>
                <section className={this.state.extra ? "hide" : "show"}><p>Origen: {overview}</p></section>
                <p className='delete'>Borrar</p>
            </article>

        )
    }
}

export default Card