import { XIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Constants from "../../../../../constants";
import "./style.scss";

export default function FilterBox({ params, setParams }) {
  return (
    <div className="filter">
      <FilterMenu
        label="Age"
        data={Constants.religions}
        values={params["age"]}
        setValues={(values) => {
          // let data = {};
          params["age"] = values;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Religion"
        data={Constants.religions}
        values={params["religion"]}
        setValues={(values) => {
          // let data = {};
          params["religion"] = values;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Mother Tongue"
        data={Constants.motherTongues}
        values={params["motherTongue"]}
        setValues={(values) => {
          // let data = {};
          params["motherTongue"] = values;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Marital Status"
        data={Constants.maritalStatus}
        values={params["maritalStatus"]}
        setValues={(values) => {
          // let data = {};
          params["maritalStatus"] = values;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Caste"
        data={Constants.caste}
        values={params["caste"]}
        setValues={(values) => {
          // let data = {};
          params["caste"] = values;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="State"
        data={Constants.provinces}
        values={params["state"]}
        setValues={(values) => {
          // let data = {};
          params["state"] = values;
          setParams({ ...params });
        }}
      />
    </div>
  );
}

const FilterMenu = ({ label, data, values, setValues }) => {
  const [show, setShow] = useState(false);
  // const [values, setValues] = useState([]);
  const handleChange = (add, value) => {
    add
      ? values
        ? setValues([...values, value])
        : setValues([value])
      : setValues(values.filter((i) => i !== value));
  };
  return (
    <section className={`m-2 rounded noselect pointer`}>
      <div
        className="d-flex justify-content-between w-full menu p-2 text-white"
        onClick={() => setShow(!show)}
      >
        {label}
        <div>
          <XIcon width={16} onClick={() => setValues([])} />
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
              handleChange={handleChange}
              checked={values?.includes(datum)}
            />
          ))}
        </section>
      )}
    </section>
  );
};

const FilterController = ({ label, handleChange, checked }) => {
  const ref = useRef();
  return (
    <section>
      <Form.Check
        ref={ref}
        type="checkbox"
        label={label}
        name={label}
        value={label}
        onChange={(e) => handleChange(ref.current.checked, e.target.value)}
        checked={checked === true}
      />
    </section>
  );
};
