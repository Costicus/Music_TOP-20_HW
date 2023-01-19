

const MusicDetail = ({music}) => {

    return (
        <div className="music-detail">
            <p>The current song from UK top 20 is {music["im:name"].label} the price is {music["im:price"].label} the artist is {music["im:artist"].label} </p>
        </div>
    )
}

export default MusicDetail;