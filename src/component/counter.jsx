import React, { Component } from 'react';
import { Badge, Button } from 'react-bootstrap';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    // }

    render() { 
        return (
            <div>
                <Badge variant={this.badgeColor()} className="m-2">{this.badgeFormat()}</Badge>
                <Button variant="dark" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</Button>
                <Button variant="danger" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</Button>
            </div>
        );
    }

    badgeColor(){
        let {value} = this.props.counter
        return (value === 0) ? 'primary' : 'warning'
    }

    badgeFormat(){
        let {value} = this.props.counter
        return (value === 0) ? 'ZERO' : value
    }

    // handleIncrement = () => {
    //     console.log("Increment Button Clicked");
    //     return this.setState({
    //         value: this.props.counter.value + 1
    //     })
    // }
}
 
export default Counter;