import React, { Component } from 'react';

export default class Tab extends Component {
    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const { onClick, props: { activeTab, label } } = this;

        let className = 'tabBarItem';
        if (activeTab === label) {
            className += ' selected';
        }

        return (
            <div className={className} onClick={onClick}>{label}</div>
        );
    }
}