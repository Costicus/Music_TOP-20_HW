import React, { useState, useEffect } from 'react';
import MusicDetail from '../components/MusicDetail';
import MusicList from '../components/MusicList';
import MusicSelect from '../components/MusicSelect'
import './SongsContainer.css';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);

    useEffect(() => {
      getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    const onMusicSelect = function(chosenMusicId) {
        const foundMusic = songs.find((music) => music.id.label === chosenMusicId )
        console.log(foundMusic)
        setSelectedMusic(foundMusic)
    }

    return (
        <div className="main-container">
            <MusicSelect songs={songs} onMusicSelect={onMusicSelect}/>
            {selectedMusic && <MusicDetail music={selectedMusic}/>}
        </div>
    )
}

export default MusicContainer;

