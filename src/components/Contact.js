import React, { Component } from 'react';
import './styles.css';

class Contact extends Component {
    render() {
        return (
            <div className='container'>
            <p className='name'><span>First name:</span>{this.props.contact.firstName}</p>
            <p className='last-name'><span>Last name:</span>{this.props.contact.lastName}</p>
            <p className='phone-number'><span>Phone number</span>{this.props.contact.phone}</p>   
            <p className='gender'><span>Gender:</span>{this.props.contact.gender}</p>
            </div>
        )
    }
    
}

export default Contact;