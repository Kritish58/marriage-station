export const Error = (props) => {
  return (
    <div className={`${props.className && props.className} text-danger m-2`}>
      {props.children}
    </div>
  );
};
