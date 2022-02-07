import React, { useState } from "react";
import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { toast } from "react-toastify";
import API from "../../../../api";
import Constants from "../../../../constants";

const Search = () => {
  // const [page, setPage] = useState(0);
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await API.get(
      `${Constants.apiEndpoint.user.allUser}`
      // {
      //   params: { count, page },
      // }
    )
      .then((res) => {
        console.log(res);
        setUsers(res.data.rows);
      })
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    fetchUsers();
    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="h2 my-4">Search for profiles</div>
      {users.map((user) => (
        // <h2 key={user.userDetail_id}>{user.User.firstName}</h2>
        <ProfileCard key={user.userDetail_id} user={user} />
      ))}
    </div>
  );
};

export default Search;

const profilePic = {
  width: "13rem",
  height: "14rem",
};

const ProfileCard = ({ user }) => {
  return (
    <div className="d-flex bg-white container-fluid my-4 rounded-3">
      <div
        className="left rounded-3 bg-secondary position-relative"
        style={profilePic}
      ></div>
      <div className="right p-4">
        <h4 className="position-relative">
          {user.User.firstName}
          {user.User.lastName}
          <Badge
            style={{
              fontSize: "8px",
              fontWeight: "lighter",
              position: "absolute",
              top: 0,
              right: -50,
            }}
            bg={user.verified === "true" ? "success" : "secondary"}
          >
            {user.verified === "true" ? "Active" : "Inactive"}
          </Badge>
        </h4>
      </div>
    </div>
  );
};
