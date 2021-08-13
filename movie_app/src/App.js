import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };

  getMovies = async() => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies)
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
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;