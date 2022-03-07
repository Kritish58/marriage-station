import React, { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../../api";
import { Spinner } from "../../../../components";
import { ProfileCard } from "../../../../components/Card/Profile";
import Constants from "../../../../constants";
import { paramsCleaner } from "../../../../utils/paramsCleaner";
import FilterBox from "./filter";
import "./style.scss";

export default function SearchResults() {
  let [queries] = useSearchParams();
  const { user } = useSelector((state) => state.authState);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [params, setParams] = useState(
    paramsCleaner(queries, user.UserDetail.gender, pageNumber)
  );

  useEffect(() => {
    setLoading(true);
    Object.keys(params).forEach(
      (key) => params[key].length === 0 && delete params[key]
    );
    console.table(params);
    let data = {
      caste: "Chhetri",
    };
    // caste=Brahmin&&caste=Chhetri
    data["caste"] = "Brahmin";
    console.log(data);
    // const fetchUsers = async () => {
    //   await API.get(`${Constants.apiEndpoint.user.getAllUser}`, {
    //     params,
    //   })
    //     .then((res) => {
    //       setUsers(res.data.filteredData);
    //       setCount(res.count);
    //       setPageNumber(res.pageInfo.pageNumberInfo);
    //     })
    //     .catch((err) => toast.error(err));
    // };
    // fetchUsers();
    setLoading(false);
    return () => {
      setUsers([]);
    };
  }, [queries, user, pageNumber, params]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return loading && count === 0 ? (
    <Spinner />
  ) : (
    <div className="search__page">
      <h2 className="py-4">Search results</h2>
      <div className="d-flex">
        <aside className="filter__user" style={{ flex: 1, maxHeight: "75vh" }}>
          <section
            className="filter__box rounded-3 p-2"
            style={{
              height: "100%",
              width: "100%",
              background: "white",
              overflowY: "auto",
            }}
          >
            <span style={{ fontWeight: "bold", padding: "8px" }}>
              Re-fine your search
            </span>
            <FilterBox
              params={params}
              setParams={(value) => setParams(value)}
            />
          </section>
        </aside>
        <aside className="user__list d-flex flex-column" style={{ flex: 3 }}>
          <section style={{ maxHeight: "80vh", overflow: "auto" }}>
            {users.map((user) => (
              <ProfileCard key={user.User.user_id} user={user} />
            ))}
          </section>
          <section className="align-self-end p-4">
            <Pagination>
              <Pagination.Prev disabled={pageNumber === 1} onClick={prevPage} />
              <Pagination.Item>{pageNumber}</Pagination.Item>
              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </section>
        </aside>
      </div>
    </div>
  );
}
