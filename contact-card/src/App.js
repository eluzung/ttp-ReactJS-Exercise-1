import React, { Component, ReactPropTypes } from "react";
import ContactCard from './contactCard';
import contactData from './contactData';
import './App.css';

function App() {
  // return <>{contactData.map((data)=>(<ContactCard ...data/></ContactCard>
  // )}</>;

  return (<> { contactData.map((data) => <ContactCard 
    contactName={data.contactName}
    phoneNumber={data.phoneNumber}
    workNumber={data.workNumber}
    email={data.email}
    />)} </>)

}

export default App;
