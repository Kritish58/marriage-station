import { CheckIcon } from "@heroicons/react/outline";
import { ProgressBar } from "react-bootstrap";

export const ProfileCard = () => {
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
        <img
          alt="profile"
          width={200}
          height={200}
          style={{ objectFit: "cover", borderRadius: "12px" }}
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      {/* <ProgressBar
        style={{ width: "100%" }}
        now={65}
        label={`65%`}
        variant="success"
      /> */}
      <div className="profile__info m-2">
        <div className="d-flex justify-content-between">
          <div className="h4">John Doe</div>
          <span className="text-success font-2 small">
            <CheckIcon width={20} />
            <small>Verified</small>
            {/* <MatchScore /> */}
          </span>
        </div>
        <div>20yrs, 5'3'', Nepali</div>
        <div>BIT, Gokarneshwor, Kathmandu, Nepal</div>
      </div>
    </div>
  );
};
