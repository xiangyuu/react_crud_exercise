import React, {useState, Fragment} from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import SearchInput from "./forms/SearchInput";
import UserList from "./forms/UserList";
import './App.css'

const App = () => {
  const usersData = [
    {
      id: 1,
      username: '漁夫',
      age: "22",
      context: "喜歡打籃球",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
      username: 'Sular',
      age: "30",
      context: "家裡有貓咪",
    },
    {
      id: 2,
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
  const pageItem = 5;
  const [allPages, setAllPages] = useState(Math.ceil(usersData.length / pageItem));
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    if (currentPage == Math.ceil(usersData.length / pageItem)) {

    } else {
      setCurrentPage(currentPage + 1)
    }
  }

  function preventPage() {
    if (currentPage == 1) {

    } else {
      setCurrentPage(currentPage - 1)
    }
  }

  function changePage(e) {
    const thisPage = (e.target.textContent)
    setCurrentPage(thisPage)
  }


  const currentData = () => {
    const filterData = usersData.filter(function (value) {
      return value.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.context.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.username.toLowerCase().includes(searchTerm.toLowerCase())
    })

    setAllPages(Math.ceil(filterData.length / pageItem))

    const start = (currentPage - 1) * pageItem
    const end = start + pageItem
    return filterData.filter(function (value, index) {
      return index >= start && index < end
    })
  }

  const forAllPages = () => {
    let array = []
    for (let i = 0; i < allPages; i++) {
      array.push(<li key={i} className='page' onClick={changePage}>{i + 1}</li>)
    }
    return array
  }

  const addUser = (user) => {
    setUsers([...users, {
      id: users.length + 1,
      ...user
    }])
    currentData();
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
    currentData()
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setAdding(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    currentData()
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
    setCurrentPage(1)
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
          page={currentPage}
          users={currentData}
          addRow={addRow}
          editRow={editRow}
          deleteUser={deleteUser}
          performSearch={performSearch}
        />
      </div>

      <div id='pagenation'>
        <div id='preBtn' onClick={preventPage}>上一頁</div>
        <ul id='pageNum'>
          {
            forAllPages()
          }
        </ul>
        <div id='nextBtn' onClick={nextPage}>下一頁</div>
        {editing &&
        <Fragment>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            currentData={currentData}
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
