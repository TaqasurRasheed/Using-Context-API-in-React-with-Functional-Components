import React from "react";
//import { AppContext } from "./Context";
import User from "./User";

const UserList = () => {
  //const { users } = useContext(AppContext);
  return (
    <div>
      <h3>Available Users</h3>
      {/* {users.map((user) => (
        <User key={user.id} user={user} />
      ))} */}

      <User />
      {/* We are displaying the values in a table in User js with the help of map function */}
    </div>
  );
};

export default UserList;
