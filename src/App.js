import { useState } from 'react';

// Components
import ChatInput from './components/chat-input';
import User from './components/user';
import Message from './components/message';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';
import db from './db.json';

const App = () => {
  const [users, setUsers] = useState(db.data);
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = user => {
    setSelectedUser(user);
  };

  const addNewMessage = sentMessage => {
    setSelectedUser(prevValue => {
      return {
        ...prevValue,
        messages: [...prevValue.messages, sentMessage],
      };
    });
    setUsers(prevValue => {
      return prevValue.map(user =>
        user.name === selectedUser.name
          ? { ...user, messages: [...user.messages, sentMessage] }
          : user
      );
    });
  };

  const sortMessagesByDate = messages => {
    return messages
      .sort(function (a, b) {
        return new Date(b.time * 1000) - new Date(a.time * 1000);
      })
      .reverse();
  };

  return (
    <>
      <Header></Header>
      <div className="content">
        <div className="chat">
          <div className="users">
            {users.map((user, i) => (
              <User
                isActive={selectedUser?.name === user.name}
                setSelectedUser={() => selectUser(user)}
                {...user}
                key={i}
              />
            ))}
          </div>
          <div className="chatWindow">
            {selectedUser ? (
              <div className="chat-component">
                <div className="messages-container">
                  {sortMessagesByDate(selectedUser.messages).map(
                    (message, i) => (
                      <Message {...message} key={i} />
                    )
                  )}
                </div>
                <ChatInput addNewMessage={addNewMessage} />
              </div>
            ) : (
              <div className="placeholder">
                <p>Please select chat to start conversation</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default App;
