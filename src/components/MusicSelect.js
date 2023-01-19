
const MusicSelect = ({songs, onMusicSelect}) => {

    const handleChange = function(event) {
        const chosenMusicId = event.target.value;
        console.log(chosenMusicId)
        onMusicSelect(chosenMusicId)
    }

    const musicOptions = songs.map((music) => {
        // console.log(music)
        return <option key={music.id.label} value={music.id.label}>{music["im:name"].label}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            {musicOptions} 
        </select>
    )
}

export default MusicSelect
