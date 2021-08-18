import React, {useState} from "react";
import './AddUserForm.css'

const AddUserForm = (props) => {
  const initUserInfo = {username: '', age: '', context: ''};
  const [user, setUser] = useState(initUserInfo);

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setUser({...user, [name]: value});
  };


  return (
    <form
      className='showForm'
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.age || !user.context) return;
        props.addUser(user);
        setUser(initUserInfo);
        props.setAdding();

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
      <button id='addBtn'>新增</button>
    </form>
  );
};

export default AddUserForm;
