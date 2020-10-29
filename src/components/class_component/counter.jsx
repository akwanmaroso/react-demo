import React, { Component } from "react";
import Unmount from "./unmount";
import ViewCounter from "./view-counter";

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            component: false
        }
    }

    handleAddCount = () => {
        this.setState({
            count: this.state.count + 1,
            component: !this.state.component
        })
    }

    componentDidUpdate() {
        console.log(`Update terjadi... `);
    }

    componentWillUnmount() {
        console.log(`Unmount terjadi... `);
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <ViewCounter count={this.state.count} />    
                <button onClick={this.handleAddCount}>+1</button>
                {
                    this.state.component ? (
                        <Unmount />
                    ):(
                        ""
                    )
                }
            </div>
        )
    }
}