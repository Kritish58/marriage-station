import React, { useState } from "react";
import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { toast } from "react-toastify";
import API from "../../../../api";
import { ProfileCard } from "../../../../components/Card/Profile";
import Constants from "../../../../constants";
import "../styles.scss";

const Search = () => {
  // const [page, setPage] = useState(0);
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await API.get(
      `${Constants.apiEndpoint.user.getAllUser}`
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
    <div
      className="user__pages"
      style={{ maxHeight: "100vh", overflow: "auto" }}
    >
      <h2 className="user__pages__title">Search for profiles</h2>
      {users.map((user) => (
        <ProfileCard key={user.User.user_id} user={user} />
      ))}
    </div>
  );
};

export default Search;

const profilePic = {
  width: "13rem",
  height: "14rem",
};

// const ProfileCard = ({ user }) => {
//   return (
//     <div className="d-flex bg-white container-fluid my-4 rounded-3">
//       <div
//         className="left rounded-3 bg-secondary position-relative"
//         style={profilePic}
//       ></div>
//       <div className="right p-4">
//         <h4 className="position-relative">
//           {user.User.firstName}
//           {user.User.lastName}
//           <Badge
//             style={{
//               fontSize: "8px",
//               fontWeight: "lighter",
//               position: "absolute",
//               top: 0,
//               right: -50,
//             }}
//             bg={user.verified === "true" ? "success" : "secondary"}
//           >
//             {user.verified === "true" ? "Verified" : "Not verrified"}
//           </Badge>
//         </h4>
//       </div>
//     </div>
//   );
// };
