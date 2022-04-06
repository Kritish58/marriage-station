import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './Home.module.scss';
import PersonCard from '../../../../components_v2/PersonCard';
import ProfileCard from '../../../../components_v2/ProfileCard';
import { Button } from 'rsuite';
import CaretIcon from '../../../../icons/Caret';
import VerifyIcon from '../../../../icons/VerifyIcon';
import PersonCardSmall from '../../../../components_v2/PersonCard/PersonCardSmall';
import useGetBreakpoint from '../../../../hooks/useGetBreakpoint';

export default function Home() {
   const isUserVerified = true;

   const breakpoint = useGetBreakpoint();

   const { user } = useSelector((state) => state.authState);
   if (!user) return <Navigate replace to="/privacy-policies" />;

   return (
      <div className={styles.home}>
         <div className={styles.content}>
            <div className={styles['content-profileCard']}>
               <div className={styles.profileCard}>
                  <ProfileCard />
               </div>
               <div className={styles['content-profileCard-options']}>
                  <h6 className={styles.name}>Kritish Bhattarai</h6>
                  <div className={styles['verify-section']}>
                     {isUserVerified ? (
                        <div className={styles.verified}>
                           <VerifyIcon />
                           <small>Verified</small>
                        </div>
                     ) : (
                        <div className={styles.unverified}>
                           <p>Please verify your profile for better responses</p>

                           <Button block size="sm" color="yellow" appearance="primary">
                              Verify
                           </Button>
                        </div>
                     )}
                  </div>

                  <div className={styles.link}>
                     <span>Go To Profile</span>
                     <CaretIcon />
                  </div>

                  <div className={styles.link}>
                     <span>Profile Settings</span>
                     <CaretIcon />
                  </div>
               </div>
            </div>

            <div className={styles['tabs-container']}>
               <Tabs
                  className={styles.tabs}
                  variant="tabs"
                  defaultActiveKey="recently-joined"
                  id="uncontrolled-tab-example">
                  <Tab eventKey="recently-joined" tabClassName={styles['tab-title']} title="Recently Joined">
                     <h6 className="text-muted my-4 lead">Recently Registered last 5 members</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              {breakpoint === 'xxl' || breakpoint === 'xl' ? <PersonCard /> : <PersonCardSmall />}
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab eventKey="short-listed" tabClassName={styles['tab-title']} title="Short Listed">
                     <h6 className="text-muted my-4 lead">Members in your short list</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab eventKey="block-listed" tabClassName={styles['tab-title']} title="Block Listed">
                     <h6 className="text-muted my-4 lead">Members in your block list</h6>
                     <div className="d-flex flex-wrap gap-3">
                        {[0, 1, 2, 3, 4].map((item) => (
                           <div key={item}>
                              <PersonCard />
                           </div>
                        ))}
                     </div>
                  </Tab>
                  <Tab eventKey="i-viewed-profile" tabClassName={styles['tab-title']} title="I Viewed Profile">
                     <h6 className="text-muted my-4 lead">Members you checked profile of</h6>
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
                     <h6 className="text-muted my-4 lead">Members who checked your profile</h6>
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
