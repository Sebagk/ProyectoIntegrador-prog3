import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"

const Home = (props) => {
  return (
    <main>
        {/* <SearchForm history={this.props.history} /> */}
        <SearchForm history={props.history}/>
        <h1>Populares</h1>
        <CardGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/populares"} cantidad={5}/>
        <h1>Estrenos</h1>
        <CardGrid api={"https://api.themoviedb.org/3/movie/now_playing"} link={"/estrenos"} cantidad={5}/>
    </main>
  )
}

export default Home


