import React from "react";
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP',
    headers: {
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': '86db650bd0msha8cd5b031bafacap183965jsn4f7e6fb311b2'
    },
});

class ListPlace extends React.Component {
    constructor() {
      super();
      this.state = {
        query: null,
      };
    }
  
    componentDidMount() {
        this.fetchListPlaces();
    }
    
    async fetchListPlaces() {
        const response = await API.get(`/en-GB`);
        console.log(response);
    }
  
    addPlaces = async e => {
      e.preventDefault();
      const {placeNameInput} = this.state;
    }
  
    render() {
        const { query } = this.state; 
    
      return (
        <>
          <h3>Add Places</h3>
          <form onSubmit={this.addPlaces}>
            <fieldset>
              <label>Place Name</label>
              <input required onChange={e => {this.setState({placeNameInput: e.target.value})}} />
              <button>Add Place</button>
            </fieldset>
          </form>
  
          <h3>All Places</h3>
          { ! query ? 'Loading...' :
          <>
             { query === 200 ? <>
               <ul>
                 {query.map( d => <li onClick={this.clickedOwner}key={d.id}>{d.name}</li>)}
               </ul>
              </> :
          'We had an error' }
          </>}
        </>
      );
    }
  }
    
    export default ListPlace;