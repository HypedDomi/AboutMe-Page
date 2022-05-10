import "./AvatarWrapper.css";

export default function AvatarWrapper(props) {
    const status = {
        "online": "#3ba55d",
        "idle": "#faa81a",
        "dnd": "#ed4245",
        "offline": "#747f8d"
    };
    return (
        <div className="avatarWrapper">
            <svg width="138px" height="120px" viewBox="0 0 138 120" className="avatarSVG">
                <mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
                    <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666" />
                </mask>
                <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
                </mask>
                <mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
                    <circle fill="black" cx="0.25" cy="0.25" r="0.375" />
                </mask>
                <mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
                    <rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125" />
                </mask>
                <mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
                    <circle fill="black" cx="0.5" cy="0.5" r="0.25" />
                </mask>

                <foreignObject width="120" height="120" x="0" y="0" mask="url(#svg-mask-avatar-status-round-120)">
                    <img className="avatar" src={process.env.PUBLIC_URL + "/images/avatar.png"} loading="lazy" alt="" />
                </foreignObject>
                <rect width="24" height="24" x="88" y="88" fill={status[props.status]} mask={`url(#svg-mask-status-${props.status})`} />
            </svg>
        </div>
    );
}