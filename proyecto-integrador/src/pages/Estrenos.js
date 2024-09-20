import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"

const Estrenos = (props) => {
  return (
    <main>
        {/* <SearchForm history={this.props.history} /> */}
        <SearchForm history={props.history}/>
        <h1>Estrenos</h1>
        <CardGrid api={"https://api.themoviedb.org/3/movie/now_playing"} link={"/estrenos"} cantidad={30}/>
    </main>
  )
}

export default Estrenos