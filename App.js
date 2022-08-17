import React, { useState } from "react";
import "./App.css";
import AddUser from "./Context/AddUser";
// const AppContext = createContext();
import { AppContext } from "./Context/Context";
import UserList from "./Context/UserList";

// const UserDetails = () => {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <div>
//       <p>User: {user}</p>
//       <button onClick={() => setUser(null)}>Logout</button>
//     </div>
//   );
// };

// const Login = () => {
//   const { user, setUser } = useContext(UserContext);
//   const [loginName, setLoginName] = useState("");
//   return (
//     <div>
//       <input
//         value={loginName}
//         onChange={(e) => setLoginName(e.target.value)}
//         placeholder="Login Name"
//         name="username"
//       />
//       <input
//         type="password"
//         value={loginPass}
//         onChange={(e) => setLoginPass(e.target.value)}
//         placeholder="Login Password"
//         name="password"
//       />
//       <button onClick={() => setUser(loginName)}>Login</button>
//     </div>
//   );
// };

function App() {
  const [users, setUsers] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        return;
      case "REMOVE_USER":
        setUsers(users.filter((user) => user.id !== payload.userId));
        return;
      default:
        return;
    }
  };
  return (
    <div className="App">
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <UserContext.Provider value={{ user, setUser }}>
    //       <div className="App">
    //         <h2>React Hooks</h2>
    //         {user ? <UserDetails /> : <Login />}
    //       </div>
    //     </UserContext.Provider>
    //   </header>
    // </div>
  );
}

export default App;
