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
        return <h1>Contact Card</h1>
    }
}

export default ContactCard;