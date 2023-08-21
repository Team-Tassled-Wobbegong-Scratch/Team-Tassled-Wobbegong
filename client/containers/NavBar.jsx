import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { feed } from '../actions/actions.js';

const NavBar = () => {

  const dispatch = useDispatch();
  const cat = useSelector(state => state);

  const feedHandler = async (e) => {
    if (cat.hungry === true) {
      const result = await fetch('/api/feed', {
        method: 'PUT',
        body: JSON.stringify({
          hungry: false,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const hungerInfo = await result.json();
      dispatch(feed(hungerInfo));
    } else {
      console.log('The cat is not hungry!')
    };
  };

  return (
    <div>
      <button type='button' onClick={feedHandler}>
        <img src=
      </button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
};

export default NavBar;