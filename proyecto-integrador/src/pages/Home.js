import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CardGrid from "../components/CardGrid/CardGrid"

const Home = () => {
  return (
    <div>
        {/* <SearchForm history={this.props.history} /> */}
        <SearchForm/>
        <h1>Hola react</h1>
        <CardGrid />
    </div>
  )
}

export default Home


