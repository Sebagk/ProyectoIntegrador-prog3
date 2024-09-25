import React, { Component } from "react";
import { options } from "../options";
import Card from "../components/Card/Card";
import './Style.css'


class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
    
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            Promise.all(
                parsedStorage.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
                        .then((response) => response.json())
                )
            ).then((data) => {
                this.setState({
                    movies: data
                });
                console.log(data);
            });
        }
    }
    

    render() {
        return (

            <div style={{
                display: 'flex', 
                flexdDirection: 'row',
                aligniItems: 'center',
                gap: '20px',
                backgroundColor: 'rgb(249, 249, 249)',
                justifyContent: 'space-evenly',
                margin: '20px',
                flexWrap: 'wrap',
                minHeight: '100vh'
            }}>
            
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