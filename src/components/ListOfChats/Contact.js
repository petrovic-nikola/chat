import React from 'react';
import Card from '../UI/Card';
import classes from './Contact.module.css';
//import data from '../../data/conversation.json';
//import ContactItem from './ContactItem/ContactItem';

const CONTACT = [
  {
    id: 'c1',
    name: 'John',
    status: 'This is my status',
  },
  {
    id: 'c2',
    name: 'Amy',
    status: 'I love oranges!',
  },
  {
    id: 'c3',
    name: 'John',
    status: 'Hello, I am Jack',
  },
];

const Contact = () => {
  const contactList = CONTACT.map(contact => <li>{contact.name}</li>);

  return (
    <section className={classes.contact}>
      <Card>
        <ul>{contactList}</ul>
      </Card>
    </section>
  );
};

export default Contact;
