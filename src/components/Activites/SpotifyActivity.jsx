import "./Activites.css";

export default function SpotifyActivity(props) {
    return (
        <div className="spotifyActivity activity">
            <h3 className="activityHeader">Listening to Spotify</h3>
            <div className="activityContainer">
                <div className="activityCover">
                    <img src={props.data.cover} loading="lazy" alt="" />
                </div>
                <div className="activityInfo">
                    <a className="activityTitle textRow" href={props.data.track_url} target="_blank" rel="noopener noreferrer">{props.data.song}</a>
                    <div className="activityDetails textRow">{`by ${props.data.artists?.map(e => e).join(", ")}`}</div>
                    <div className="activityState textRow">{`on ${props.data.album}`}</div>
                </div>
            </div>
        </div>
    );
}