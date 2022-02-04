import "./index.scss";

export const Submit = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      className="align-self-center btn__submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
