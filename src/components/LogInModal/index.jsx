import { Modal } from "react-bootstrap";
import LoginForm from "./login";
import "./index.scss";
import ResetPasswordForm from "./forgotpassword";

export const LogInModal = ({
  forgotPassword,
  showLogIn,
  handleLogInClose,
  handleForgotPassword,
}) => {
  return (
    <Modal show={showLogIn} onHide={handleLogInClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {forgotPassword ? "Reset password" : "Log In"}
        </Modal.Title>
      </Modal.Header>
      {!forgotPassword ? (
        <LoginForm handleForgotPassword={handleForgotPassword} />
      ) : (
        <ResetPasswordForm handleLogInClose={handleLogInClose} />
      )}
    </Modal>
  );
};
