import { useEffect } from "react";
import "./index.scss";
import thumbnail from "../../../assets/profile_thumbnail.jpg";
import { Link } from "react-router-dom";
// import { matchCalculator } from "../../../utils/matchCalculator";

export const ProfileCard = ({ user }) => {
  useEffect(() => {
    Object.keys(user).forEach((key) => {
      if (user[key] === "") user[key] = "N/A";
    });
  }, [user]);
  return (
    <div className="card__container">
      <div className="card__main d-flex flex-column justify-content-between shadow-sm">
        <section
          className="img__container"
          style={{
            background: `url(${thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="d-flex justify-content-between actions fw-bold">
          <div className="text-success pointer">+ Shortlist</div>
          <div className="text-danger pointer">- Blocklist</div>
        </div>
        {/* <div className="align-self-center">Match:- {matchCalculator(user)}</div> */}
        <section className="d-flex flex-column flex-grow-1 justify-content-evenly">
          <div className="d-flex justify-content-evenly">
            {/* AGE */}
            <div className="d-flex flex-column align-items-center">
              <span className="fw-bold">{user?.age || "N/A"}</span>
              <span className="text-secondary">Age</span>
            </div>
            {/* HEIGHT */}
            <div className="d-flex flex-column align-items-center">
              <span className="fw-bold">{user?.height || "N/A"}</span>
              <span className="text-secondary">Height</span>
            </div>
            {/* WEIGHT */}
            <div className="d-flex flex-column align-items-center">
              <span className="fw-bold">{user?.weight || "N/A"}</span>
              <span className="text-secondary">Weight</span>
            </div>
          </div>
          <div className="align-self-center d-flex flex-column">
            <div className="align-self-center fw-bold h3">
              {user?.User?.firstName[0] || "N/A"}*****{" "}
              {user?.User?.lastName || "N/A"}
            </div>
            <div className="align-self-center text-secondary info">
              {user?.caste || "N/A"}, {user?.religion || "N/A"}
            </div>
            <div className="align-self-center text-secondary info">
              {user?.city || "N/A"}, {user?.country || "N/A"}
            </div>
          </div>
        </section>
        <Link
          to={`/search/viewProfile/${user.userId}`}
          className="align-self-center info link"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
