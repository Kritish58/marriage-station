import React from 'react';
import { Dropdown, Nav, Sidenav, Checkbox } from 'rsuite';
import Constants from '../../../../../constants';
import styles from './SearchResults.module.scss';

export default function SearchResults() {
   return (
      <div className={styles.searchResults}>
         <Sidenav className={styles.sideNav} defaultOpenKeys={['1', '2']} activeKey="1">
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
   );
}
