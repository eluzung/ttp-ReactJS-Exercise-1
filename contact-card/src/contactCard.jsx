import React, { Component, ReactPropTypes } from "react";

class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ContactName: "John Doe",
            phoneNumber: "123-456-SCAM",
            workPhone: "987-654-SCAM",
            email: "johnDoe@scam.com",
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Contact Card</h1>
                    <h2>Name: {this.state.ContactName}</h2>
                    <h3>Phone number: {this.state.phoneNumber}</h3>
                    <h3>Work number: {this.state.workPhone}</h3>
                    <h3>Email: {this.state.email}</h3>
                </div>
            </div>
        )
    }
}

export default ContactCard;