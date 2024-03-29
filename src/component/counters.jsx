import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 2},
            {id: 4, value: 0},
            {id: 5, value: 0},
        ]
    };

    handleDelete = (countersId) => {
        const counters = this.state.counters.filter(c => c.id !== countersId);
        this.setState({counters})
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({counters})
    }

    render() { 
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                ))}
            </div>
        );
    }
}
 
export default Counters;