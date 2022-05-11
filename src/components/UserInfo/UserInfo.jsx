import AboutMe from "./AboutMe";
import Connection from "./Connection";
import "./UserInfo.css";
import info from "../../info.json";

export default function UserInfo() {
    return (
        (
            <div className="userInfo">
                <AboutMe text={info.aboutMe} />
                <div className="connections">
                    <div className="connectedAccounts">
                        {
                            info.connections.map((connection, index) => (
                                <Connection
                                    key={index}
                                    type={connection.type}
                                    name={connection.username}
                                    link={connection.link} />
                            ))
                        }
                    </div>
                </div>
            </div>
        ));
}