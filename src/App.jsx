import React, {useState, Fragment} from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import SearchInput from "./forms/SearchInput";
import UserList from "./forms/UserList";
import './App.css'

const App = () => {
  const usersData = [
    {
      id:1,
      username: '漁夫',
      age: "22",
      context: "喜歡打籃球",
    },
    {
      id:2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    }
  ];

  const initUserInfo = {id: "", username: '', age: '', context: ''};

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initUserInfo);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pageItem=5;
  const allPages=Math.round(usersData.length/pageItem);
  const [currentPage,setCurrentPage]=useState(1);

  function nextPage(){
    setCurrentPage({currentPage:currentPage+1})
  }
  function preventPage(){
    setCurrentPage({currentPage:currentPage-1})
  }
  function changePage(e){
    const thisPage=(e.target.value)
  }
  const currentData=()=>{
    const start=(currentPage-1)*pageItem
    const end=start+pageItem
    return usersData.filter(start,end)
  }




  const addUser = (user) => {
    setUsers([...users, {
      id: users.length + 1,
      ...user
    }]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setAdding(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const addRow = () => {
    setAdding(true);
    setCurrentUser({
      username: '',
      age: 0,
      context: ''
    });
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      username: user.username,
      age: user.age,
      context: user.context
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const performSearch = () => {
    return users.filter(
      (user) =>
        user.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.context.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="container">
      <SearchInput handleSearch={handleSearch} searchTerm={searchTerm}/>
      <div className="listInput">
        <UserList
          users={users}
          addRow={addRow}
          editRow={editRow}
          deleteUser={deleteUser}
          performSearch={performSearch}
        />
        
      </div>
      <div>
        {
          
        }
        {editing &&
        <Fragment>
          <h2>修改</h2>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </Fragment>
        }
        {adding &&
        <Fragment>
          <AddUserForm
            addUser={addUser}
            adding={adding}
            setAdding={setAdding}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </Fragment>
        }
      </div>

    </div>
  );
};

export default App;
