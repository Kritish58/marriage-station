import { Spinner as Spin } from "react-bootstrap";

export const Spinner = () => {
  return (
    <span className="d-flex justify-content-center">
      <Spin animation="border" variant="success" />
    </span>
  );
};
