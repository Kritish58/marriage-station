import { ArrowLeftIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../../../api';
import { Spinner } from '../../../../components';
import { ProfileCard } from '../../../../components/Card/Profile';
import Constants from '../../../../constants';
import { paramsCleaner } from '../../../../utils/paramsCleaner';
import FilterBox from './filter';
import './style.scss';

export default function SearchResults() {
   const navigate = useNavigate();
   let [queries] = useSearchParams();
   const { user } = useSelector((state) => state.authState);

   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [count, setCount] = useState(0);
   const [pageNumber, setPageNumber] = useState(1);
   const [params, setParams] = useState(paramsCleaner(queries, user.UserDetail.gender));

   useEffect(() => {
      setLoading(true);

      Object.keys(params).forEach((key) => params[key].length === 0 && delete params[key]);

      const fetchUsers = async () => {
         await API.get(`${Constants.apiEndpoint.user.getAllUser}`, {
            params: {
               ...params,
               pageNumber,
            },
         })
            .then((res) => {
               setUsers(res.data.filteredData);
               setCount(res.count);
               setPageNumber(res.pageInfo.pageNumberInfo);
            })
            .catch((err) => toast.error(err));
      };
      fetchUsers();
      setLoading(false);
      return () => {
         setUsers([]);
      };
   }, [queries, user, pageNumber, params]);

   const nextPage = () => {
      setPageNumber(pageNumber + 1);
      let data = params;
      data['pageNumber'] = pageNumber + 1;
      setParams(data);
   };
   const prevPage = () => {
      if (pageNumber > 1) {
         setPageNumber(pageNumber - 1);
         let data = params;
         data['pageNumber'] = pageNumber - 1;
         setParams(data);
      }
   };

   return loading && count === 0 ? (
      <Spinner />
   ) : (
      <div className="search__page">
         <h2 className="py-4">Search results</h2>

         <div className="d-flex">
            <aside className="filter__user" style={{ flex: 1, maxHeight: '75vh' }}>
               <section
                  className="filter__box rounded-3 p-2"
                  style={{
                     height: '100%',
                     width: '100%',
                     background: 'white',
                     overflowY: 'auto',
                  }}>
                  <span style={{ fontWeight: 'bold', padding: '8px' }}>Re-fine your search</span>
                  <FilterBox params={params} setParams={(value) => setParams(value)} />
               </section>
            </aside>
            <aside className="user__list d-flex flex-column" style={{ flex: 3 }}>
               <section style={{ maxHeight: '80vh', overflow: 'auto' }} className="p-4 results__list">
                  {users.map((user) => (
                     <ProfileCard key={user.User.user_id} user={user} />
                  ))}
               </section>
            </aside>
         </div>
         <section className="w-full d-flex justify-content-between align-items-center">
            <div
               className="d-flex justify-content-center align-items-center pointer primary__color"
               onClick={() => navigate(-1)}>
               <ArrowLeftIcon width={16} className="mx-1" />
               <span>Back to search</span>
            </div>
            <section className="pagination">
               {pageNumber > 1 && (
                  <button className="outline__button" onClick={prevPage}>
                     Prev
                  </button>
               )}
               <span className="pageNumber">{pageNumber}</span>
               <button className="outline__button" onClick={nextPage}>
                  Next
               </button>
            </section>
         </section>
      </div>
   );
}
