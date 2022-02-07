import "./index.scss";
import { Dropdown } from "react-bootstrap";
export const CountryCode = ({ value, onChange, options, className }) => {
  return (
    <div className={`countryCode ${className}`}>
      <Dropdown className="d-inline me-2 countryCode__dropdown">
        <Dropdown.Toggle
          as="label"
          id="dropdown-autoclose-true"
          className="toggle"
        >
          <span>{value}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown__menu">
          {options.map((option) => (
            <Dropdown.Item
              className="dropdown__item"
              key={option.value}
              onClick={() => onChange(option.value)}
            >
              <img
                src={`https://flagcdn.com/16x12/${option.code}.png`}
                width="16"
                height="12"
                alt={`flag-${option.code}`}
              />
              {option.value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
