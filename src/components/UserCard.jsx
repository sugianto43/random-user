import "./UserCard.css";
import user from "../assets/user.png";

function UserCard() {
  return (
    <>
      <div className="card">
        <img src={user} alt="user" />
        <p className='name'>Random User</p>
        <p>+62813434245</p>
        <p>abstrac@email.com</p>
        <p>Indonesia</p>
      </div>
    </>
  );
}

export default UserCard;
