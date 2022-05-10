import AboutMe from "./AboutMe";
import Connection from "./Connection";
import "./UserInfo.css";
import info from "../../info.json";

export default function UserInfo() {
    return (
        (<>
            <AboutMe text={info.aboutMe} />
            <div className="connections">
                <div className="connectedAccounts">
                    {
                        info.connections.map(connection => (
                            <Connection
                                key={Math.random()}
                                type={connection.type}
                                name={connection.username}
                                link={connection.link} />
                        ))
                    }
                </div>
            </div>
        </>
        ));
}