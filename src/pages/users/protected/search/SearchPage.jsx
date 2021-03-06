import { useFormik } from "formik";
import { useMemo, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Submit } from "../../../../components";
import AdvanceSearchInput from "./forms/advance";
import BasicSearchInput from "./forms/basic";
import "./style.scss";
export default function SearchPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("basic");

  // FORM INITIAL VALUES
  const initialValues = useMemo(
    () => ({
      ageFrom: 18,
      ageTo: 35,
      gender: "male",
      religion: "",
      motherTongue: "",
      maritalStatus: "",
      caste: "",
      state: "",
      city: "",
      country: "",
      education: "",
      occupation: "",
      annualIncome: "",
      diet: "",
      drink: "",
      smoke: "",
      bodyType: "",
      star: "",
      manglik: "",
    }),
    []
  );

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => handleSubmit(formik.values),
  });

  const handleSubmit = (values) => {
    navigate({
      pathname: "/search/account",
      search: `?${createSearchParams(values)}`,
    });
  };

  return (
    <section className="search__page">
      <h2 className="page__title">Search</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 search__form basic__search__form"
      >
        {/* TOGGLE */}
        <div className="search__toggle d-flex">
          <div
            className={`search__menu p-2 ${active === "basic" ? "active" : ""}`}
            onClick={() => setActive("basic")}
          >
            Basic Search
          </div>
          <div
            className={`search__menu p-2 ${
              active === "advance" ? "active" : ""
            }`}
            onClick={() => setActive("advance")}
          >
            Advance Search
          </div>
        </div>

        {/* FORM */}
        <section className="search__box p-2">
          {active === "basic" ? (
            <BasicSearchInput formik={formik} />
          ) : (
            <AdvanceSearchInput formik={formik} />
          )}
        </section>
        <section className="action">
          <Submit className="w-auto rounded m-2 p-2 d-inline" text="Search" />
        </section>
      </form>
    </section>
  );
}
