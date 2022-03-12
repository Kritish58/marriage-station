import { UserIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const ProfileCard = ({ user }) => {
  useEffect(() => {
    Object.keys(user).forEach((key) => {
      if (user[key] === "") user[key] = "N/A";
    });
  }, [user]);
  return (
    <div
      style={{
        display: "flex",
        margin: "2rem",
        padding: "1rem",
        borderRadius: "12px",
      }}
      className="shadow-sm bg-white"
    >
      <div className="d-flex">
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "12px",
            background: "gray",
            color: "#00000022",
          }}
        >
          <UserIcon />
        </div>
      </div>
      <div className="profile__info m-2 d-flex flex-column justify-content-between">
        <section>
          <div className="d-flex">
            <div className="h4">
              {user.User.firstName[0]}**** {user.User.lastName}, {user.age}
            </div>
          </div>
          <div>
            {user.height}, {user.religion}
          </div>
          <div>
            {user.education}, {user.city}, Nepal
          </div>
          <Link to={`/account/${user.userId}`}>View more</Link>
        </section>

        <section>
          <button className="action__button">Message</button>
          <button className="action__button warning">Shortlist</button>
          <button className="action__button danger">Blocklist</button>
        </section>
      </div>
    </div>
  );
};
