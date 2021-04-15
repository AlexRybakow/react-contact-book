import React, { Component } from 'react';
import Contact from './Contact';
import './styles.css';

class Contacts extends Component {
    state = {
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Джозеф",
            lastName: "Трібіанський",
            phone: "+380981238756",
            gender:"male"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        input:''
    }
    handleSearchChange = event => {
        this.setState({input: event.target.value})
    }

   render() {
       let userInput;
       const Value = this.state.input;
        userInput = Value !== '' ?
        userInput = this.state.contacts.filter((contact) => 
        contact.lastName.toLowerCase().includes(Value.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(Value.toLowerCase()) ||
        contact.phone.includes(Value))  
        :this.state.contacts
        
    
    return ( 
        <div className = "contacts-wrapper">
            <div className = "search">
                <input className ='user-input' type = "text" placeholder='Введите имя'  value = {this.state.input} onChange = {this.handleSearchChange} />
            </div>
            { userInput.map((contact, i) => <Contact contact={contact} key={i} />) }
        </div>
     );
   }

}

export default Contacts;