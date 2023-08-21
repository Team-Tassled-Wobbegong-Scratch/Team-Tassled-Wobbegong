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
      <button type="button" onClick={feedHandler}>
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216382838845500/feed.png" />
      </button>
      <button type="button">
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216382528462980/clean.png" />
      </button>
      <button type="button">
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216382197117040/groom.png" />
      </button>
      <button type="button">
        <img src="https://cdn.discordapp.com/attachments/384155828715782145/1143216381886734407/health.png" />
      </button>
      <button type="button">
        <img src="https://media.discordapp.net/attachments/384155828715782145/1143216381563777124/log.png" />
      </button>
    </div>
  );
};

export default NavBar;