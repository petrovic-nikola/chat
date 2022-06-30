import {
  convertTimeStampToTime,
  //convertTimeStampToDateWithSlash,
} from '../utils/date-converter.util';
import './message.styles.css';

const Message = ({ type, content, time }) => {
  return (
    <div className={`message ${type === 'sent' && 'my-message'}`}>
      <p>{content}</p>
      <p>{` ${convertTimeStampToTime(time)}`}</p>
    </div>
  );
};

export default Message;
