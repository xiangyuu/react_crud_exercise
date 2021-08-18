import React from "react";
import './UserList.css'

const UserList = (props) => (
  <div>
    <div>
      {props.users().length > 0 ? (
        props.users().map((user,key) => (
          <div id='listItem' key={key}>
            <div id='listLeft'>
              <div className='tdBtn'>姓名:{user.username}</div>|
              <div className='tdBtn'>年齡:{user.age}</div>|
              <div className='tdBtn'>內容:{user.context}</div>
            </div>
            <div id='listRight'>
              <div>
                <button id='editBtn' onClick={() => {
                  props.editRow(user);
                }}>修改
                </button>
                <button id='delBtn' onClick={() => props.deleteUser(user.id)}>刪除</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <tr>
          <td colSpan={4}>沒有任何用戶資料!!</td>
        </tr>
      )}
    </div>
    <button onClick={() => {
      props.addRow();
    }}>新增
    </button>
  </div>
);

export default UserList;
