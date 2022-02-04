import "./index.scss";

export const IconButton = ({ icon: IconElement, color, onClick }) => {
  const buttonStyle = {
    height: "40px",
    width: "40px",
    background: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // float: "left",
    borderRadius: "12px",
  };
  const iconStyle = {
    height: "32px",
    width: "32px",
    color: color ? color : "white",
  };
  return (
    <div className="i" style={buttonStyle} onClick={onClick}>
      <IconElement style={iconStyle} />
    </div>
  );
};
