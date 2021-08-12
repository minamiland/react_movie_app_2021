import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <img src={ picture } alt="" />
    </div>
  );
}

const foodLike = [
  {
    name: 'Kimchi',
    image: 'http://via.placeholder.com/300x100/000FF/808080'
  },
  {
    name: 'Coffee',
    image: 'http://via.placeholder.com/300x100/FF0000/FFFFFF'
  },
  {
    name: 'Banana',
    image: 'http://via.placeholder.com/300x100/FFFF00/000000'
  },
  {
    name: 'Apple',
    image: 'http://via.placeholder.com/300x100/CCCC00/EEEEEE'
  },
];

// ES5 함수 사용
// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// ES6 함수 사용
const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

function App() {
  console.log(foodLike.map(renderFood));
  return (
    <div>
      { 
        // 외부함수로 분리
        // foodLike.map(dish => (
        //   <Food name={dish.name} picture={dish.image} />
        // ))

        // 외부함수로 관리 
        foodLike.map(renderFood)
      }
    </div>
  );
}

export default App;