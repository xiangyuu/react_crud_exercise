import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.username, user);
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
        <div >
            <label>內容</label>
            <input
                type="text"
                name="contant"
                value={user.contant}
                onChange={handleInputChange}
                required
            />
        </div>
        <button>修改</button>
        <button
            onClick={() => props.setEditing(false)}>
              關閉
        </button>
    </form>
  );
};

export default EditUserForm;
