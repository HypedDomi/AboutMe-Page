import "./Activites.css";
import SpotifyActivity from '../Activites/SpotifyActivity';
import PlayActivity from "./PlayActivity";

export default function ActivityWrapper(props) {
    return (
        <div className="activityWrapper">
            {
                props.data.map((activity, index) => {
                    switch (activity.type) {
                        case 0:
                            return <PlayActivity data={activity} key={index} />;
                        case 2:
                            return <SpotifyActivity data={activity} key={index} />;
                        default:
                            return null;
                    }
                })
            }
        </div>
    );
}