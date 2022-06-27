import React from 'react';
import Conversation from '../Conversation/Conversation';
import ListOfChats from '../ListOfChats/ListOfChats';
import classes from './Chat.module.css';

const Chat = () => {
  return (
    <div className={classes.rowC}>
      <ListOfChats></ListOfChats>
      <Conversation></Conversation>
    </div>
  );
};

export default Chat;
