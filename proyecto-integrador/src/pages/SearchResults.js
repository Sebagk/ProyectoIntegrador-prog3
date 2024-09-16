import {Component} from 'React'

export default class SearchResults extends Component{

    constructor(props){
        super(props)
    }
render(){
  return (
    <div> searchResults {this.location.state.query}</div>
  )
    }
}
