import "./index.scss";

export const Submit = ({ text, className, onClick }) => {
  return (
    <button
      type="submit"
      className={`align-self-center btn__submit ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
