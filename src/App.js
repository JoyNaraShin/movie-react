import React from 'react';
import axios from 'axios';
import Movie from './Movies'

class App extends React.Component{
  state = {
    isLoading : true,
    movies: [],
  };
  getMovies = async () => {    
    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
    this.setState({movies, isLoading:false});
    console.log(movies)
  }
  async componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? 'Loading...' : movies.map(item=>{
      return <Movie id={item.id} year={item.year} title={item.title} summury={item.summary} poster={item.poster} />
    })}</div>
  }
}

export default App;
