import React from "react";

const UserList = (props) => (
  <table>
      {props.performSearch().length > 0 ? (
        props.performSearch().map((user) => (
          <tr key={Math.random()}>
            <td>姓名:{user.username}</td>
            <td>年齡:{user.age}</td>
            <td>內容:{user.contant}</td>
            <td>
              <button onClick={() => {props.editRow(user);}}>修改</button>
              <button onClick={() => props.deleteUser(user.username)}>刪除</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>沒有任何用戶資料!!</td>
        </tr>
      )}
  </table>
);

export default UserList;
