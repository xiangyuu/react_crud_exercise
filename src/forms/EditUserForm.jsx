import React, { useState, useEffect } from "react";
import './EditUserForm.css'
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
      id='showForm'
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
          <div className='inputBox'>
            <label className='inputText'>姓名</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className='inputBox'>
            <label className='inputText'>年齡</label>
            <input
                type="text"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className='inputBox'>
            <label className='inputText'>內容</label>
            <input
                type="text"
                name="context"
                value={user.context}
                onChange={handleInputChange}
                required
            />
        </div>
        <button id='editBtn'>修改</button>
        <button
            onClick={() => props.setEditing(false)}>
              關閉
        </button>
    </form>
  );
};

export default EditUserForm;
