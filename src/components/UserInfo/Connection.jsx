import "./UserInfo.css";

export default function Connection(props) {
    return (
        <div className="connectedAccount" onClick={() => window.open(`${props.link}`, '_blank').focus()}>
            <img src={props.platform.icon} alt="" className="connectedAccountIcon" />
            <div className="connectedAccountName">{props.platform.name}</div>
        </div>
    );
}