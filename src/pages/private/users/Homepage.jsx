import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Submit } from "../../../components";
import { authFailure, authPending } from "../../../redux/reducers";

export const Homepage = () => {
  const { user } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(authPending());
    dispatch(authFailure());
  };
  return (
    <div>
      Welcome to Marriage Station, {user.email}
      <Submit text="Logout" onClick={onClick} />
    </div>
  );
};
