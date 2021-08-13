import React from 'react';

// 클래스 상속 : 클래스에 다른 클래스의 기능을 추가하는 것을 지칭
class App extends React.Component {

  // React에서 Mount()로 분류하는 생명주기 함수 3가지
  // render(), constructor(), componentDidMount()
  
  // 렌더링 순서
  // button 클릭 
  // setState() 함수 실행 
  // render() 함수 실행
  // componentDidUpdate() 함수 실행

  // 생명주기 학습 1
  constructor(props) {
    super(props);
    console.log('hello props');
  }

  // 생명주기 학습 2
  componentDidMount() {
    console.log('component rendered');
  }

  // 생명주기 학습 3
  componentDidUpdate() {
    console.log('I just updated')
  }

  // App 클래스에 React.Component를 상속시킨다.
  // React.Component 클래스의 기능을 추가한 App 클래스
  // state 변경시 render 함수를 다시 실행
  // setState 함수로 state와 state를 비교하여 바뀐 데이터만 업데이트
  state = {
      count: 0
  };

  add = () => {
    console.log('add');
    // state를 직접변경할 수 없음으로 사용 할 수 없는 방식
    // this.state.count = 1;

    // setState 함수에 새로운 객체(count)를 적용하여 state에 반영
    // this.setState({count: 1})

    // state의 바른 사용법
    // this.setState({count: this.state.count + 1});

    // 코드개선
    this.setState(current => ({
      count: current.count + 1
    }));
  };

  minus = () => {
    console.log('minus');
    // state를 직접변경할 수 없음으로 사용 할 수 없는 방식
    // this.state.count = -1;

    // setState 함수에 새로운 객체(count)를 적용하여 state에 반영
    // this.setState({count: -1})

    // state의 바른 사용법
    // this.setState({count: this.state.count - 1});

    // 코드개선
    this.setState(current => ({
      count: current.count - 1
    }));
  };
  
  // 클래스에서는 return 문을 사용할 수 없다.
  // 함수형 컴포넌트는 return 문이 JRX를 반환
  // 클래스형 컴포넌트는 render() 함수가 JSX를 반환
  render() {
    console.log("I'm rendering");
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