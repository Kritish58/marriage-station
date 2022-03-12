import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import API from "../../../../api";
import { Spinner } from "../../../../components";
import Constants from "../../../../constants";
import { toaster } from "../../../../utils";
import { naProvider } from "../../../../utils/notAvailable";
import "./index.scss";

const ViewProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      await API.get(`${Constants.apiEndpoint.user.getSelf}/${id}`)
        .then((res) => setUser(naProvider(res.usersData)))
        .catch((err) => toaster("err", err));
    };
    setLoading(true);
    fetchUser();
    setLoading(false);
  }, [id]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="p-4 d-flex flex-column gap-4 align-items-start overflow-auto">
      <section className="d-flex">
        <aside
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "12px",
            background: "gray",
          }}
        ></aside>
        <actions>
          <button className="btn btn-success">Message</button>
          <button className="btn btn-success">Shortlist</button>
          <button className="btn btn-success">Blocklist</button>
        </actions>
      </section>
      <section className="basic">
        <Table striped bordered hover>
          <thead>
            <tr className="p-4 h4 fw-bold">Basic Information</tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Name:</td>
              <td>
                {user?.User?.firstName[0].toUpperCase()}**{" "}
                {user?.User?.lastName}
              </td>
              <td className="fw-bold">Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td className="fw-bold">Height:</td>
              <td>{user.height}</td>
              <td className="fw-bold">Weight:</td>
              <td>{user.weight}</td>
            </tr>
            <tr>
              <td className="fw-bold">Mother Tongue:</td>
              <td>{user.motherTongue}</td>
              <td className="fw-bold">Marital Status:</td>
              <td>{user.maritalStatus}</td>
            </tr>
            <tr>
              <td className="fw-bold">Skin Tone:</td>
              <td>{user.skinTone}</td>
              <td className="fw-bold">Body Type:</td>
              <td>{user.bodyType}</td>
            </tr>
            <tr>
              <td className="fw-bold">Eating Habit:</td>
              <td>{user.diet}</td>
              <td className="fw-bold">Drinking:</td>
              <td>{user.drink}</td>
            </tr>
            <tr>
              <td className="fw-bold">Blood Group:</td>
              <td>{user.bloodGroup}</td>
              <td className="fw-bold">Smoking:</td>
              <td>{user.smoke}</td>
            </tr>
            <tr>
              <td className="fw-bold">Profile Created By:</td>
              <td>{user.createdBy}</td>
              <td className="fw-bold">Referenced By:</td>
              <td>{user.referencedBy}</td>
            </tr>
            <tr>
              <td className="fw-bold">Birth Place:</td>
              <td>{user.height}</td>
              <td className="fw-bold">Birth Time: {user.smoke}</td>
              <td>{user.birthTime}</td>
            </tr>
            <tr>
              <td className="fw-bold">Other known languages:</td>
              <td>{user.languageKnown}</td>
              <td className="fw-bold">Hobby:</td>
              <td>{user.hobby}</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="religious">
        <Table striped bordered hover>
          <thead>
            <tr className="p-4 h4 fw-bold">Religious Information</tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Religion:</td>
              <td>{user.religion}</td>
              <td className="fw-bold">Caste:</td>
              <td>{user.caste}</td>
            </tr>
            <tr>
              <td className="fw-bold">Sub Caste:</td>
              <td>{user.subCaste}</td>
              <td className="fw-bold">Star:</td>
              <td>{user.star}</td>
            </tr>
            <tr>
              <td className="fw-bold">Manglik:</td>
              <td>{user.manglik}</td>
              <td className="fw-bold">Gothra:</td>
              <td>{user.gothra}</td>
            </tr>
            <tr>
              <td className="fw-bold">Horoscope:</td>
              <td>{user.horoscope}</td>
              <td className="fw-bold">Moonsign:</td>
              <td>{user.moonSign}</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="location">
        <Table striped bordered hover>
          <thead>
            <tr className="p-4 h4 fw-bold">Location Information</tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Country:</td>
              <td>{user.livingCountry}</td>
              <td className="fw-bold">Residence Status:</td>
              <td>{user.residenceStatus}</td>
            </tr>
            <tr>
              <td className="fw-bold">State:</td>
              <td>{user.state}</td>
              <td className="fw-bold">City:</td>
              <td>{user.city}</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="education">
        <Table striped bordered hover>
          <thead>
            <tr className="p-4 h4 fw-bold">Education Information</tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Education:</td>
              <td>{user.education}</td>
              <td className="fw-bold">Designation:</td>
              <td>{user.designation}</td>
            </tr>
            <tr>
              <td className="fw-bold">Employed in:</td>
              <td>{user.state}</td>
              <td className="fw-bold">Occupation:</td>
              <td>{user.occupation}</td>
            </tr>
            <tr>
              <td className="fw-bold">Annual Income:</td>
              <td>{user.anualIncome}</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default ViewProfile;
