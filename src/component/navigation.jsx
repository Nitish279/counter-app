import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {
    render() { 
        return (
            <Navbar bg="light">
                <Navbar.Brand>Brand link</Navbar.Brand>
            </Navbar>
        );
    }
}
 
export default Navigation;