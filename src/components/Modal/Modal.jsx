import { Component } from 'react';
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import Tabs from "../TabBar/Tabs";
import UserInfo from "../UserInfo/UserInfo";
import ActivityWrapper from '../Activites/ActivityWrapper';
import "./Modal.css";

var oldState;
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            data: {},
        };
    }

    loadData = () => {
        this.setState({ ...this.state, isFetching: true });
        oldState = this.state;
        fetch("https://discord-api-react-bambus.herokuapp.com/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                    isFetching: false
                });
            });
    }

    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 60000);
    }

    render() {
        const { isFetching, data } = this.state;
        return (
            <div className="modal">
                <div className="topSection">
                    <header className="modalHeader">
                        <div className="banner" >
                            <img src={process.env.PUBLIC_URL + "/images/banner.png"} loading="lazy" alt="" />
                        </div>
                        <div className="avatarHeader">
                            <AvatarWrapper status={isFetching ? oldState?.data.hasOwnProperty("status") ? oldState.data.status : "offline" : data.status} />
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
                            <div label="Activity">
                                <ActivityWrapper data={isFetching ? oldState?.data.hasOwnProperty("activities") ? oldState.data.activities : [] : data.activities} />
                            </div>
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