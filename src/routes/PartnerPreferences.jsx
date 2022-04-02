import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import API from '../api';
import { Spinner } from '../components';
import Constants from '../constants';
import { PartnerPreferences } from '../pages';
import { toaster } from '../utils';

export function PartnerPreferenceVerification({ children }) {
   const navigate = useNavigate();
   const { user } = useSelector((state) => state.authState);
   const [loading, setLoading] = useState(false);
   const [found, setFound] = useState(true);
   useEffect(() => {
      const fetchPartnerPreferences = async () => {
         try {
            let response = await API.get(Constants.apiEndpoint.partnerPreferences.getPartnerPreferences);
            setFound(
               response.data?.partnerPreference
                  ?.map((pref) => pref.userDetailId === user.UserDetail.userDetail_id)
                  .includes(true)
            );
            if (!found) navigate('/partnerPreferences', { replace: true });
         } catch (error) {
            toaster('error', error);
         }
      };
      setLoading(true);
      fetchPartnerPreferences();
      setLoading(false);
   }, [navigate, found, user.UserDetail.userDetail_id]);
   return loading ? (
      <div className="d-flex justify-content-center">
         <Spinner />
      </div>
   ) : found ? (
      children
   ) : (
      <Routes>
         <Route path="/partnerPreferences" element={<PartnerPreferences setFound={(value) => setFound(value)} />} />
      </Routes>
   );
}
