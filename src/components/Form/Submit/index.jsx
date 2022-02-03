import "./index.scss";

export const Submit = ({ text }) => {
  return (
    <button type="submit" className="align-self-center btn__submit">
      {text}
    </button>
  );
};
