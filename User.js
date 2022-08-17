import { useContext } from "react";
import { AppContext } from "./Context";

const User = ({ user }) => {
  // There are two functions which is available in app.js and context Api
  // users store all the values and dispatchevent listen the event either we click on Add user or delete button
  const { users, dispatchUserEvent } = useContext(AppContext);

  const handleRemoveUser = () => {
    dispatchUserEvent("REMOVE_USER", { userId: user.id });
  };
  return (
    <div className="User">
      {/* <h3>{user.name}</h3>
      <h4>{user.age}</h4> */}
      {/* <div>
        <small>{user.bio}</small>
      </div> */}
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {/* To display in a table */}
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleRemoveUser}>Delete user</button>
    </div>
  );
};

export default User;
