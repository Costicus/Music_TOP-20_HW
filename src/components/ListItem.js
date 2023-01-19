import React from 'react';
import './ListItem.css';

const ListItem = ({music, setSelectedMusicAsAProp}) => {

  const handleClick = function() {
    setSelectedMusicAsAProp(music)
  }

  return <li onClick={handleClick}>{music.name.common}</li>
}

export default ListItem;