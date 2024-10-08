import { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleInputSubmit = () => {
        this.props.history.push('/search', { query: this.state.query })
    }

    render() {
        return (
            <div className="search-container">
                <input onChange={(e) => this.handleInputChange(e)}type='text' placeholder='Buscar por título' name='query' value={this.state.query} className="search-input"/>
                <button onClick={this.handleInputSubmit} className="search-button" > Buscar Película </button>
            </div>
        );
    }
}

export default SearchForm;
