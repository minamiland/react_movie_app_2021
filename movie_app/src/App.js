import React from 'react';

// 클래스 상속 : 클래스에 다른 클래스의 기능을 추가하는 것을 지칭
class App extends React.Component {
  // App 클래스에 React.Component를 상속시킨다.
  // React.Component 클래스의 기능을 추가한 App 클래스
  // state 변경시 render 함수를 다시 실행
  state = {
      count: 0
  };

  add = () => {
    console.log('add');
    // state를 직접변경할 수 없음으로 사용 할 수 없는 방식
    // this.state.count = 1;

    // setState 함수에 새로운 객체(count)를 적용하여 state에 반영
    this.setState({count: 1})
  };

  minus = () => {
    console.log('minus');
    // state를 직접변경할 수 없음으로 사용 할 수 없는 방식
    // this.state.count = -1;

    // setState 함수에 새로운 객체(count)를 적용하여 state에 반영
    this.setState({count: -1})
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