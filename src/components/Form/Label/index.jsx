export const Label = ({ name, label, className }) => {
  return (
    <label htmlFor={name} className={`${className} my-2`}>
      {label}
    </label>
  );
};
