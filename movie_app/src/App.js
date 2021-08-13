import React from 'react';
import PropTypes from 'prop-types';
// https://www.npmjs.com/package/prop-types

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://via.placeholder.com/300x100/000FF/808080',
    rating: 3
  },
  {
    id: 2,
    name: 'Coffee',
    image: 'http://via.placeholder.com/300x100/FF0000/FFFFFF',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Banana',
    image: 'http://via.placeholder.com/300x100/FFFF00/000000',
    rating: 2.5
  },
  {
    id: 4,
    name: 'Apple',
    image: 'http://via.placeholder.com/300x100/CCCC00/EEEEEE',
    rating: 5
  },
];

// ES5 함수 사용
// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// ES6 함수 사용
// const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} />;

function App() {
  // console.log(foodLike.map(renderFood));
  return (
    <div>
      { 
        // 외부함수로 분리
        foodLike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))

        // 외부함수로 관리 
        // foodLike.map(renderFood)
      }
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;