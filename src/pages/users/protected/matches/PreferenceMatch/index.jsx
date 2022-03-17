import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import API from "../../../../../api";
import { Spinner } from "../../../../../components";
import Constants from "../../../../../constants";
import { toaster } from "../../../../../utils";
import { paramsCleaner } from "../../../../../utils/paramsCleaner";

export default function PreferenceMatches() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPreference = async () => {
      try {
        let response = await API.get(
          Constants.apiEndpoint.partnerPreferences.getPartnerPreferences
        );
        let found;
        response.data?.partnerPreference?.every((pref) => {
          if (pref.userDetailId === user.UserDetail.userDetail_id) {
            console.table([pref.userDetailId, user.UserDetail.userDetail_id]);
            found = pref;
            return false;
          }
          return true;
        });
        if (found) {
          console.log(paramsCleaner(createSearchParams(found)));
          //   let response = await API.get(
          //     `${Constants.apiEndpoint.user.getAllUser}`,
          //     {
          //       params: {
          //         ...paramsCleaner(createSearchParams(found)),
          //       },
          //     }
          //   );
          //   console.log(response);
        } else {
          console.log("Not found");
        }
      } catch (error) {
        toaster("error", error);
      }
    };
    fetchPreference();
    return () => {};
  }, [user.UserDetail.userDetail_id]);

  return loading ? (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner />
    </div>
  ) : (
    <div>Preference Matches</div>
  );
}
