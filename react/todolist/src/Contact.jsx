import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.data.name}</li>
                    <li>{this.props.data.email}</li>
                </ul>
            </div>
        );
    }
}

export default Contact;
