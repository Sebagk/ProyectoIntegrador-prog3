import React from 'react'
import { options } from '../options'
import { Component } from 'react'
import Favorito from '../components/Favorito/Favorito'


class Detalle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: {},
            id: props.match.params.id,
        }
    }

    componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movie : data})           
      })
      .catch((error) => {
        console.log(error);
      });
    }


    render() {
      const { poster_path, title, vote_average, genres, release_date, runtime, overview }
      return (
      )
    }

}

export default Detalle