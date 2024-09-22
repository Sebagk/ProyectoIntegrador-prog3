import React, { Component } from "react";
import { options } from "../options";

class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        const parsedArray = JSON.parse(localStorage.getItem('favoritos'))

        Promise.all(
            parsedArray.map((id)=>{
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

    render(){
        return(
            <div>{!this.state.isLoading ? <>AGREGAR LA GRILLA DE CARDSGRID</> : 
                <p>Loading...</p>}
            </div>
        )
    }

}

export default Favoritos