
import React from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


const Test = () => {
    const songs = useSelector( (state) => {
        return state.songs;
    });

  return (
    <div>
        {songs.map(sng => (<li>{sng}</li>))}
    </div>
  )
}

export default Test