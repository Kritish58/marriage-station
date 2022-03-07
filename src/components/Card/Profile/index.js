import { CheckIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
// import { ProgressBar } from "react-bootstrap";
// import { CrossIcon } from "react-select/dist/declarations/src/components/indicators";

export const ProfileCard = ({ user }) => {
  const { user: CurrentUser } = useSelector((state) => state.authState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // background: "white",
        margin: "2rem",
        padding: "1rem",
        borderRadius: "12px",
      }}
      className="shadow-sm bg-white"
    >
      <div className="d-flex justify-content-center">
        {/* <img
          alt="profile"
          width={200}
          height={200}
          style={{ objectFit: "cover", borderRadius: "12px" }}
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        /> */}
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
      <div className="profile__info m-2">
        <div className="d-flex justify-content-between">
          <div className="h4">{user.User.firstName[0]}****</div>
          <span
            className={`${
              user.verified === "true" ? "text-success" : "text-danger"
            } font-2 small`}
          >
            {user.verified === "true" ? (
              <CheckIcon width={20} />
            ) : (
              <XIcon width={20} />
            )}
            <small>
              {user.verified === "true" ? "Verified" : "Unverified"}
            </small>
          </span>
        </div>
        <p>{user.User.user_id === CurrentUser.user_id ? "Self" : "Other"}</p>
        <div>
          {user.height}, {user.religion}
        </div>
        <div>
          BIT, {user?.workLocation}, {user?.city}, Nepal
        </div>
      </div>
    </div>
  );
};
