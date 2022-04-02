import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { Tab, Tabs } from 'react-bootstrap';
import PersonCard from '../../../../components_v2/PersonCard';
import ProfileCard from '../../../../components_v2/ProfileCard';

export default function Home() {
   const { user } = useSelector((state) => state.authState);
   if (!user) return <Navigate replace to="/privacy-policies" />;

   return (
      <div className={styles.home}>
         <div className={styles.content}>
            <div className={styles['content-profileCard']}>
               <ProfileCard />
            </div>

            <div className={styles.tabs}>
               <Tabs
                  variant="tabs"
                  defaultActiveKey="recently-joined"
                  id="uncontrolled-tab-example"
                  className="mb-3 w-100">
                  <Tab eventKey="recently-joined" tabClassName={styles['tab-title']} title="Recently Joined">
                     <h6 className="text-muted my-4">Recently Registered last 5 members</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab eventKey="short-listed" tabClassName={styles['tab-title']} title="Short Listed">
                     <h6 className="text-muted my-4">Members in your short list</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab eventKey="block-listed" tabClassName={styles['tab-title']} title="Block Listed">
                     <h6 className="text-muted my-4">Members in your block list</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab eventKey="i-viewed-profile" tabClassName={styles['tab-title']} title="I Viewed Profile">
                     <h6 className="text-muted my-4">Members you checked profile of</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab
                     eventKey="who-viewed-my-profile"
                     tabClassName={styles['tab-title']}
                     title="Who Viewed My Profile">
                     <h6 className="text-muted my-4">Members who checked your profile</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
               </Tabs>
            </div>

            {/* //* content div closes below */}
         </div>
      </div>
   );
}
