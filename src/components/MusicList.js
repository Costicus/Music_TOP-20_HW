import React from 'react';
import ListItem from './ListItem';

const MusicList = ({songs, setSelectedMusicAsAProp}) => {

    const musicItems = songs.map((music) => {
      return <ListItem music={music} key={music.name.common} setSelectedMusicAsAProp={setSelectedMusicAsAProp}/>
    })

  return (
    <div>
    <ul>
      {musicItems}
    </ul>
  </div>
  )
}

export default MusicList;
