import React from "react";
import { userList } from "./UserList";
export default function UserDisplay() {
  return (
    <>
      <table id="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userList
            .filter((user) => {
              return user.role === "user";
            })
            .map((filteredUser) => {
              return (
                <>
                  <tr>
                    <td>{filteredUser.id}</td>
                    <td>{filteredUser.name}</td>
                    <td>{filteredUser.username}</td>
                    <td>{filteredUser.email}</td>
                    <td>{filteredUser.mobileNumber}</td>
                    <td>{filteredUser.address}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
