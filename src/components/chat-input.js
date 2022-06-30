import { useState } from 'react';
import './chat-input.styles.css';

const ChatInput = ({ addNewMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = {
      time: new Date().getTime() / 1000,
      content: inputValue,
      type: 'sent',
    };
    addNewMessage(newMessage);
    setInputValue('');
  };

  return (
    <div className="input-container">
      <input
        name="message"
        value={inputValue}
        onChange={handleChange}
        className="message-input"
      />
      <button onClick={sendMessage} type="button" className="send-message">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
