import React from 'react';

// 클래스 상속 : 클래스에 다른 클래스의 기능을 추가하는 것을 지칭
class App extends React.Component {
  // App 클래스에 React.Component를 상속시킨다.
  // React.Component 클래스의 기능을 추가한 App 클래스
  state = {
      count: 0
  };

  add = () => {
    console.log('add');
  };

  minus = () => {
    console.log('minus');
  };
  
  // 클래스에서는 return 문을 사용할 수 없다.
  // 함수형 컴포넌트는 return 문이 JRX를 반환
  // 클래스형 컴포넌트는 render() 함수가 JSX를 반환
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;