import React, { Component } from "react";
import { options } from "../options";
import Card from "../components/Card/Card";


class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        const parsedArray = JSON.parse(localStorage.getItem('favoritos'))

        Promise.all(
            parsedArray.map((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
                    .then(response => response.json())
                    .then(movie =>
                        this.setState({
                            movies: [...this.state.movies, movie]
                        })
                    )
                    .catch(e =>
                        console.log(e));
            })
        )
        this.setState({
            isLoading: false
        })
    }

    render() {
        return (

                <div>
                    {this.state.movies.length > 0 ? (
                        this.state.movies.slice(0, this.props.cantidad).map((movie, index) => (
                            <Card pelicula={movie} key={index} />
                        ))
                    ) : (
                        <p>No hay resultados </p>
                    )}
                </div>

        )
    }

}

export default Favoritos