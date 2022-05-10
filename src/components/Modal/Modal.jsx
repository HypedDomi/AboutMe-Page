import { Component } from 'react';
import "./Modal.css";
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import Tabs from "../TabBar/Tabs";
import UserInfo from "../UserInfo/UserInfo";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{ "status": "offline" }],
        };
    }

    loadData = () => {
        fetch("http://discord-api-react-bambus.herokuapp.com/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json
                });
            })
            .catch((err) => {
                console.log(err);
            }
        );
    }

    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 60000);
    }

    render() {
        const { items } = this.state;
        return (
            <div className="modal">
                <div className="topSection">
                    <header className="modalHeader">
                        <div className="banner" >
                            <img src={process.env.PUBLIC_URL + "/images/banner.png"} loading="lazy" alt="" />
                        </div>
                        <div className="avatarHeader">
                            <AvatarWrapper status={items.status} />
                        </div>
                        <div className="nameTag">
                            <span className="name">Dominik</span>
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