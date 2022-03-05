import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Constants from "../../../../../constants";
import "./style.scss";

export default function FilterBox() {
  return (
    <div>
      <FilterMenu label="Age" data={Constants.religions} />
      <FilterMenu label="Religion" data={Constants.religions} />
      <FilterMenu label="Mother Tongue" data={Constants.motherTongues} />
      <FilterMenu label="Marital Status" data={Constants.maritalStatus} />
      <FilterMenu label="Caste" data={Constants.caste} />
      <FilterMenu label="State" data={Constants.provinces} />
    </div>
  );
}

const FilterMenu = ({ label, data }) => {
  const [show, setShow] = useState(false);
  return (
    <section className={`m-2 rounded noselect pointer`}>
      <div
        className="d-flex justify-content-between w-full menu p-2 text-white"
        onClick={() => setShow(!show)}
      >
        {label}
        <div>
          <XIcon width={16} />
        </div>
      </div>
      {show && (
        <section className="submenu p-2">
          {data.map((datum) => (
            <FilterController
              key={datum}
              label={datum}
              show={show}
              setShow={(value) => setShow(value)}
            />
          ))}
        </section>
      )}
    </section>
  );
};

const FilterController = ({ label }) => {
  return (
    <section>
      <Form.Check type="checkbox" label={label} />
    </section>
  );
};
