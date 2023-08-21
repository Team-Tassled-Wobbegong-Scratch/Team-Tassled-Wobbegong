import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MoodIcon from '../components/MoodIcon.jsx';
import { fetchCat } from '../reducers/catReducer.js'

const CatDisplay = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  const catMood = useSelector(state => state.cats);

  console.log('KittyMood?', catMood);
  console.log('Hungry?', catMood.hungry);

  return (
    <div>
      <img />
      <div>
        <img />
      </div>
    </div>
  )
}

export default CatDisplay;