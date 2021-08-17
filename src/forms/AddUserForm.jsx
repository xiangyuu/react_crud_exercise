import React, { useState } from "react";

const AddUserForm = (props) => {
  const initUserInfo = { username:'',age:'',contant:''};
  const [user, setUser] = useState(initUserInfo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.age || !user.contant) return;

        props.addUser(user);
        setUser(initUserInfo );
      }}
    >
        <div>
            <label>姓名</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                required
            />
        </div>
        <div>
            <label>年齡</label>
            <input
                type="text"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                required
            />
        </div>
        <div>
            <label>內容</label>
            <input
                type="text"
                name="contant"
                value={user.contant}
                onChange={handleInputChange}
                required
            />
        </div>
        <button>新增</button>
    </form>
  );
};

export default AddUserForm;
