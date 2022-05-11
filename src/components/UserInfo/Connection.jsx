import "./UserInfo.css";

export default function Connection(props) {
    const icons = {
        "github": `${process.env.PUBLIC_URL}/images/github.svg`,
        "discord": `${process.env.PUBLIC_URL}/images/discord.svg`,
        "spotify": `${process.env.PUBLIC_URL}/images/spotify.svg`,
        "instagram": `${process.env.PUBLIC_URL}/images/instagram.svg`,
        "paypal": `${process.env.PUBLIC_URL}/images/paypal.svg`,
        "mail": `${process.env.PUBLIC_URL}/images/mail.svg`,
    };
    return (
        <div className="connectedAccount" onClick={() => window.open(`${props.link}`, '_blank').focus()}>
            <img src={icons[props.type]} alt="" className="connectedAccountIcon" />
            <div className="connectedAccountName">{props.name}</div>
        </div>
    );
}