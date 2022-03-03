import React, { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../../api";
import { Spinner } from "../../../../components";
import { ProfileCard } from "../../../../components/Card/Profile";
import Constants from "../../../../constants";
import { paramsCleaner } from "../../../../utils/paramsCleaner";
import "../styles.scss";

export const Search = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  let [queries] = useSearchParams();
  useEffect(() => {
    let params = paramsCleaner(queries);
    const fetchUsers = async () => {
      await API.get(`${Constants.apiEndpoint.user.getAllUser}`, {
        params,
      })
        .then((res) => {
          console.log(res);
          setCount(res.count);
          setUsers(res.data.filteredData);
        })
        .catch((err) => toast.error(err));
    };
    setLoading(true);
    fetchUsers();
    setLoading(false);
    return () => {
      setUsers([]);
    };
  }, [queries]);

  return loading ? (
    <Spinner />
  ) : count === 0 ? (
    <h2 className="p-4">No match found</h2>
  ) : (
    <div className="search__page">
      <h2 className="py-4">Search results</h2>
      <div className="d-flex">
        <aside className="filter__user" style={{ flex: 1, maxHeight: "75vh" }}>
          <h4 className="strong">Filter</h4>
          <section
            className="filter__box rounded-3"
            style={{ height: "100%", width: "100%", background: "white" }}
          ></section>
        </aside>
        <aside className="user__list d-flex flex-column" style={{ flex: 3 }}>
          <section style={{ maxHeight: "80vh", overflow: "auto" }}>
            {users.map((user) => (
              <ProfileCard key={user.User.user_id} user={user} />
            ))}
          </section>
          <section className="align-self-end  p-4">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </section>
        </aside>
      </div>
    </div>
  );
};
