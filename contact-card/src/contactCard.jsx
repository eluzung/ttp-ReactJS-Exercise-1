import React, { Component, ReactPropTypes } from "react";

class ContactCard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ContactName: props.contactName,
            phoneNumber: props.phoneNumber,
            workNumber: props.workNumber,
            email: props.email,
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Contact Card</h1>
                    <h2>Name: {this.state.ContactName}</h2>
                    <h3>Phone number: {this.state.phoneNumber}</h3>
                    <h3>Work number: {this.state.workNumber}</h3>
                    <h3>Email: {this.state.email}</h3>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default ContactCard;