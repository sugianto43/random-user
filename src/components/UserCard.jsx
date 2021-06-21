import "./UserCard.css";

function UserCard({firstName, lastName, celuller, email, country, picture}) {
  return (
    <>
      <div className="card">
        <img src={picture} alt="user" />
        <p className='name'>{firstName} {lastName}</p>
        <p>+{celuller}</p>
        <p>{email}</p>
        <p>{country}</p>
      </div>
    </>
  );
}

export default UserCard;
