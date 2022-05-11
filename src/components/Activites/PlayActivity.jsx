import "./Activites.css";

export default function PlayActivity(props) {
    return (
        <div className="playActivity activity">
            <h3 className="activityHeader">Playing a Game</h3>
            <div className="activityContainer">
                {
                    props.data.assets?.large_image && props.data.assets?.small_image ? <div className="activityCover">
                        <img className="assetsLargeImage" style={{
                            WebkitMask: `url(${process.env.PUBLIC_URL}/images/activity-mask.svg)`,
                            WebkitMaskSize: "100%",
                        }} src={`https://media.discordapp.net/external/${props.data.assets.large_image.replace("mp:external/", "")}`} loading="lazy" alt="" />
                        <img className="assetsSmallImage" src={`https://media.discordapp.net/external/${props.data.assets.small_image.replace("mp:external/", "")}`} loading="lazy" alt="" />
                    </div> : props.data.assets?.large_image ? <div className="activityCover">
                        <img className="assetsLargeImage" src={`https://media.discordapp.net/external/${props.data.assets.large_image.replace("mp:external/", "")}`} loading="lazy" alt="" />
                    </div> : null
                }
                <div className="activityInfo">
                    <div className="activityTitle textRow">{props.data.name}</div>
                    <div className="activityDetails textRow">{props.data.details}</div>
                    <div className="activityState textRow">{props.data.state}</div>
                </div>
            </div>
        </div>
    );
}
