import { Component } from 'react';
import "./Modal.css";
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import Tabs from "../TabBar/Tabs";
import UserInfo from "../UserInfo/UserInfo";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        return (
            <div className="modal">
                <div className="topSection">
                    <header className="modalHeader">
                        <div className="banner" >
                            <img src={process.env.PUBLIC_URL + "/images/banner.png"} loading="lazy" alt="" />
                        </div>
                        <div className="avatarHeader">
                            <AvatarWrapper status="online" />
                        </div>
                        <div className="nameTag">
                            <span className="name">HypedDomi</span>
                            <span className="discriminator">#1711</span>
                        </div>
                    </header>
                    <div className="tabBarContainer">
                        <Tabs>
                            <div label="User Info">
                                <UserInfo />
                            </div>
                            <div label="Activity">Activity</div>
                        </Tabs>
                    </div>
                </div>
                <div className="bottomSection">
                    <div id="tabContent" />
                </div>
            </div>
        );
    }
}