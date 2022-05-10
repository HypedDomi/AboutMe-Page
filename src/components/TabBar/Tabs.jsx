import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';
import Tab from "./Tab";

let container = null;
export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    componentDidUpdate() {
        const { props: { children }, state: { activeTab } } = this;
        container.render(children.find(child => child.props.label === activeTab).props.children);
    }


    componentDidMount() {
        const { props: { children }, state: { activeTab } } = this;
        container = createRoot(document.getElementById('tabContent'));
        container.render(children.find(child => child.props.label === activeTab).props.children);
    }

    render() {
        const { onClickTabItem, props: { children }, state: { activeTab } } = this;
        return (
            <div className="tabBar">
                {
                    children.map((child) => {
                        const { label } = child.props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })
                }
            </div>
        );
    }
}