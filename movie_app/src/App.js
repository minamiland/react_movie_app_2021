import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    // ES6 구조분해 할당을 위한작업
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    
    // ES6 구조분해 작업
    // movies.data.data.movies => 좋지 않은 접근 방법
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies);
    // this.setState({movies: movies});
    // this.setState({movies});
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    // 영화 데이터 로딩
    // https://yts-proxy.vercel.app/list_movies.json
    // axios 설정으로 제거
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    //   console.log('componentDidMount: 영화 데이터 로딩');
    // }, 6000)
    
    // axios 추가
    // axios.get('https://yts-proxy.now.sh/list_movies.json');
    // movie 함수화
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
    return (
      <div>
        { isLoading ? 'Loading...' : movies.map((movie) => {
          console.log(movie);
          return (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          );
        })}
      </div>
    );
  }
}

export default App;