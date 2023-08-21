import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { feed } from '../actions/actions.js';

const NavBar = () => {

  const dispatch = useDispatch();
  const cat = useSelector(state => state.cats);

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
    <div id="navbar">
      <button id="feed" type="button" className="button" onClick={feedHandler}></button>
      <button id="clean" type="button" className="button"></button>
      <button id="groom" type="button" className="button"></button>
      <button id="health" type="button" className="button"></button>
      <button id="log" type="button" className="button"></button>
    </div>
  );
};

export default NavBar;