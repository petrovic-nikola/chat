import "./user.styles.css";

const User = ({ name, status, picture_data, setSelectedUser, isActive }) => {
  return (
    <div
      className="user"
      style={{ background: isActive && "Gainsboro" }}
      onClick={setSelectedUser}
    >
      <img src={picture_data.src} alt={picture_data.alt} className="avatar" />
      
      <div>
        <p className="user-name">{name}</p>
        <p className="user-status">{status}</p>
       
      </div>
    </div>
  );
};

export default User;
