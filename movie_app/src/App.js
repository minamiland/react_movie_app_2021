import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };

  componentDidMount() {
    // 영화 데이터 로딩
    // https://yts-proxy.vercel.app/list_movies.json
    setTimeout(() => {
      this.setState({ isLoading: false });
      console.log('componentDidMount: 영화 데이터 로딩');
    }, 6000)
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;