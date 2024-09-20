import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"

const Populares = (props) => {
  return (
    <main>
        {/* <SearchForm history={this.props.history} /> */}
        <SearchForm history={props.history}/>
        <h1>Populares</h1>
        <CardGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/populares"} cantidad={30}/>
    </main>
  )
}

export default Populares

