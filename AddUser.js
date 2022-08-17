import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

const AddUser = () => {
  const { dispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");

  const handleAddUser = () => {
    const user = { id: Math.random(), name, age, bio };
    dispatchUserEvent("ADD_USER", { newUser: user });
    setAge("");
    setBio("");
    setName("");
  };

  return (
    <div>
      <h3>Add New User</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        placeholder="age"
      />
      <br />
      <textarea
        type="text"
        value={bio}
        onChange={(e) => {
          setBio(e.target.value);
        }}
        placeholder="bio"
      />
      <br />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
