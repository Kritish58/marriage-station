import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Constants from "../../../../../constants";
import { addAnyOption } from "../../../../../utils/addAnyOption";
import "./style.scss";

const religions = addAnyOption(Constants.religions);
const motherTongues = addAnyOption(Constants.motherTongues);
const maritalStatus = addAnyOption(Constants.maritalStatus);
const caste = addAnyOption(Constants.caste);
const provinces = addAnyOption(Constants.provinces);
export default function FilterBox({ params, setParams }) {
  return (
    <div className="filter">
      <FilterMenu
        label="Looking for"
        data={["male", "female"]}
        value={params["gender"]}
        setValue={(value) => {
          params["gender"] = value;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Religion"
        data={religions}
        value={params["religion"]}
        setValue={(value) => {
          params["religion"] = value;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Mother Tongue"
        data={motherTongues}
        value={params["motherTongue"]}
        setValue={(value) => {
          params["motherTongue"] = value;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Marital Status"
        data={maritalStatus}
        value={params["maritalStatus"]}
        setValue={(value) => {
          params["maritalStatus"] = value;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Caste"
        data={caste}
        value={params["caste"]}
        setValue={(value) => {
          params["caste"] = value;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="State"
        data={provinces}
        value={params["state"]}
        setValue={(value) => {
          params["state"] = value;
          setParams({ ...params });
        }}
      />
      <FilterMenu
        label="Profiles Per Page"
        data={["5", "10", "15", "20", "25", "30"]}
        value={params["perPage"] ? params["perPage"] : "20"}
        setValue={(value) => {
          params["perPage"] = value;
          setParams({ ...params });
        }}
      />
    </div>
  );
}

const FilterMenu = ({ label, data, value, setValue }) => {
  const [show, setShow] = useState(false);
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <section className={`m-2 rounded noselect pointer`}>
      <div
        className="d-flex justify-content-between w-full menu p-2 text-white"
        onClick={() => setShow(!show)}
      >
        {label}
        <div>
          <XIcon width={16} onClick={() => setValue("")} />
        </div>
      </div>
      {show && (
        <section className="submenu p-2">
          {data.map((datum) => (
            <FilterController
              key={datum}
              label={datum}
              show={show}
              value={value}
              setShow={(value) => setShow(value)}
              handleChange={handleChange}
              checked={value === datum}
            />
          ))}
        </section>
      )}
    </section>
  );
};

const FilterController = ({ label, handleChange, value, checked }) => {
  return (
    <section>
      <Form.Check
        type="radio"
        label={label}
        name={label}
        value={label === "Any" ? "" : label}
        onChange={(e) => handleChange(e.target.value)}
        checked={value === label || (label === "Any" && value === undefined)}
      />
    </section>
  );
};
