import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import SearchInput from "./forms/SearchInput";
import UserList from "./forms/UserList";

const App = () => {
  const usersData = [
    {
      username:'漁夫',
      age: "22",
      contant: "喜歡打籃球",
    },
    {
      username:'Sular',
      age: "30",
      contant: "家裡有貓咪",
    }
  ];

  const initUserInfo = {username:'', age:'',contant:''};

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initUserInfo);
  const [editing, setEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (username) => {
    setEditing(false);
    setUsers(users.filter((user) => user.username !== username));
  };

  const updateUser = (username, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.username === username ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      username: user.username,
      age:user.age,
      contant:user.contant
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const performSearch = () => {
    return users.filter(
      (user) =>
        user.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.contant.toLowerCase().includes(searchTerm.toLowerCase())||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="container">
      <SearchInput handleSearch={handleSearch} searchTerm={searchTerm} />
      <div className="">
        <UserList
          users={users}
          editRow={editRow}
          deleteUser={deleteUser}
          performSearch={performSearch}
        />
      </div>
      <div>
        {editing ? (
          <Fragment>
            <h2>修改</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <hr></hr>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default App;
