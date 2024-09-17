import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"

const Home = (props) => {
  return (
    <main>
        {/* <SearchForm history={this.props.history} /> */}
        <SearchForm/>
        <h1>Populares</h1>
        <CardGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/populares"}/>
        <h1>Estrenos</h1>
        <CardGrid api={"https://api.themoviedb.org/3/movie/now_playing"} link={"/estrenos"}/>
    </main>
  )
}

export default Home


