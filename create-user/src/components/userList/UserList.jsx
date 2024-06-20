import "./UserList.css";

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img src={user.imageUrl} alt="" />
                <h3>
                  {user.firstName} {user.lastName}, {user.age} age
                </h3>
                <p>From: {user.country}</p>
                <p>Job: {user.job}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
