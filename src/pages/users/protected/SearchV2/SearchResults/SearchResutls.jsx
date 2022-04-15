import {
   ArrowCircleDownIcon,
   ArrowCircleLeftIcon,
   ArrowDownIcon,
   ArrowLeftIcon,
   ArrowNarrowLeftIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Nav, Sidenav, Checkbox } from 'rsuite';
import PersonCard from '../../../../../components_v2/PersonCard';
import Constants from '../../../../../constants';
import useGetBreakpoint from '../../../../../hooks/useGetBreakpoint';
import styles from './SearchResults.module.scss';

export default function SearchResults() {
   const navigate = useNavigate();
   const breakpoint = useGetBreakpoint();

   const goBack = () => navigate(-1);

   return (
      <div className={styles.searchResults}>
         <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
               <div
                  onClick={goBack}
                  className="d-flex align-items-center gap-2"
                  style={{ cursor: 'pointer', color: 'var(--primary-color)' }}>
                  <ArrowLeftIcon height={16} />
                  <span>Go Back</span>
               </div>

               {(breakpoint === 'sm' || breakpoint === 'md') && (
                  <a
                     href="#search-results"
                     style={{ cursor: 'pointer', textDecoration: 'none' }}
                     className="d-flex gap-2 align-items-center">
                     <span>Go To Results</span>
                     <ArrowDownIcon height={16} />
                  </a>
               )}
            </div>

            <Sidenav className={styles.sideNav} defaultOpenKeys={['1']} activeKey="1">
               <Sidenav.Body>
                  <Nav>
                     <Dropdown eventKey="1" title="Looking For">
                        {['male', 'female'].map((item, index) => (
                           <Dropdown.Item eventKey={`1-${index}`}>
                              <Checkbox>{item}</Checkbox>
                           </Dropdown.Item>
                        ))}
                     </Dropdown>
                     <Dropdown eventKey="2" title="Religion">
                        {Constants.religions.map((item, index) => (
                           <Dropdown.Item eventKey={`2-${index}`}>
                              <Checkbox>{item}</Checkbox>
                           </Dropdown.Item>
                        ))}
                     </Dropdown>
                     <Dropdown eventKey="3" title="Mother Tongue">
                        {Constants.motherTongues.map((item, index) => (
                           <Dropdown.Item eventKey={`3-${index}`}>
                              <Checkbox>{item}</Checkbox>
                           </Dropdown.Item>
                        ))}
                     </Dropdown>
                     <Dropdown eventKey="4" title="Marital Status">
                        {Constants.maritalStatus.map((item, index) => (
                           <Dropdown.Item eventKey={`4-${index}`}>
                              <Checkbox>{item}</Checkbox>
                           </Dropdown.Item>
                        ))}
                     </Dropdown>
                     <Dropdown eventKey="5" title="Caste">
                        {Constants.caste.map((item, index) => (
                           <Dropdown.Item eventKey={`5-${index}`}>
                              <Checkbox>{item}</Checkbox>
                           </Dropdown.Item>
                        ))}
                     </Dropdown>
                     <Dropdown eventKey="6" title="State">
                        {Constants.provinces.map((item, index) => (
                           <Dropdown.Item eventKey={`6-${index}`}>
                              <Checkbox>{item}</Checkbox>
                           </Dropdown.Item>
                        ))}
                     </Dropdown>
                  </Nav>
               </Sidenav.Body>
            </Sidenav>
         </div>

         <div id="search-results">
            <p className="lead mb-2 text-muted px-4">Search Results</p>

            <div className="d-flex gap-2 flex-wrap">
               {[0, 1].map((item) => (
                  <div key={item}>
                     <PersonCard />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
