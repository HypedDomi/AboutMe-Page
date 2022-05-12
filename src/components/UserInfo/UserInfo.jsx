import AboutMe from "./AboutMe";
import Connection from "./Connection";
import "./UserInfo.css";
import info from "../../info.json";

export default function UserInfo() {
    const platforms = [
        { type: "github", icon: `${process.env.PUBLIC_URL}/images/github.svg`, name: "GitHub" },
        { type: "discord", icon: `${process.env.PUBLIC_URL}/images/discord.svg`, name: "Discord" },
        { type: "spotify", icon: `${process.env.PUBLIC_URL}/images/spotify.svg`, name: "Spotify" },
        { type: "instagram", icon: `${process.env.PUBLIC_URL}/images/instagram.svg`, name: "Instagram" },
        { type: "paypal", icon: `${process.env.PUBLIC_URL}/images/paypal.svg`, name: "PayPal" },
        { type: "mail", icon: `${process.env.PUBLIC_URL}/images/mail.svg`, name: "E-Mail" }
    ];
    return (
        (
            <div className="userInfo">
                <AboutMe text={info.aboutMe} />
                <div className="connections">
                    <div className="connectedAccounts">
                        {
                            info.connections.map((connection, index) => {
                                const platform = platforms.find(platform => platform.type === connection.type);
                                return (
                                    <Connection key={index} username={connection.username} link={connection.link} platform={platform} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        ));
}