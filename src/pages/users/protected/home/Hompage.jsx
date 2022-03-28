import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './HomePage.module.scss';
import { PROFILE_IMAGE } from '../../../../constants/mock';
import { ProgressBar, Tab, Tabs } from 'react-bootstrap';
import PersonCard from '../../../../components_v2/PersonCard';
import CaretIcon from '../../../../icons/Caret';
import Hamburger from '../../../../icons/Hamburger';

export default function Homepage() {
   const { user } = useSelector((state) => state.authState);
   if (!user) return <Navigate replace to="/privacy-policies" />;

   return (
      <div className={styles.home}>
         <div className={styles.topbar}>
            <Hamburger />
            <h5 className={styles['topbar-title']}>Hello, {user.firstName}</h5>
         </div>

         <div className={cx('p-2 text-center small bg-light rounded', styles['verify-alert-box'])}>
            <span>Your Profile is pending verification! Verify now to get better responses</span>
            <button className="btn btn-sm btn-warning ">Verify Profile</button>
         </div>

         <div className={styles.content}>
            <div className={cx(styles['profile-card'], 'rounded')}>
               <div className={cx(styles['profile-card-info'], 'rounded bg-light p-4')}>
                  <img src={PROFILE_IMAGE} alt="profile" />
                  <div className="text-dark mt-2">
                     <span>Kritish Bhattarai</span>
                  </div>
                  <div className="w-100 mt-3">
                     <ProgressBar animated variant="primary" now={30} />
                     <small className="text-muted">Profile is 30% complete</small>
                     <small className={cx('d-block mt-2 d-flex align-items-center', styles.link)}>
                        Complete Your Profile <CaretIcon />{' '}
                     </small>
                  </div>
               </div>
            </div>

            <div className={styles.tabs}>
               <Tabs
                  variant="tabs"
                  defaultActiveKey="recently-joined"
                  id="uncontrolled-tab-example"
                  className="mb-3 w-100">
                  <Tab eventKey="recently-joined" tabClassName={styles['tab-title']} title="Recently Joined">
                     <h6 className="text-muted my-4">Recently Registered last 5 members</h6>
                     {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} className="my-2">
                           <PersonCard />
                        </div>
                     ))}
                  </Tab>
                  <Tab eventKey="short-listed" tabClassName={styles['tab-title']} title="Short Listed">
                     <h6 className="text-muted my-4">Members in your short list</h6>
                     {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} className="my-2">
                           <PersonCard />
                        </div>
                     ))}
                  </Tab>
                  <Tab eventKey="block-listed" tabClassName={styles['tab-title']} title="Block Listed">
                     <h6 className="text-muted my-4">Members in your block list</h6>
                     {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} className="my-2">
                           <PersonCard />
                        </div>
                     ))}
                  </Tab>
                  <Tab eventKey="i-viewed-profile" tabClassName={styles['tab-title']} title="I Viewed Profile">
                     <h6 className="text-muted my-4">Members you checked profile of</h6>
                     {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} className="my-2">
                           <PersonCard />
                        </div>
                     ))}
                  </Tab>
                  <Tab
                     eventKey="who-viewed-my-profile"
                     tabClassName={styles['tab-title']}
                     title="Who Viewed My Profile">
                     <h6 className="text-muted my-4">Members who checked your profile</h6>
                     {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} className="my-2">
                           <PersonCard />
                        </div>
                     ))}
                  </Tab>
               </Tabs>
            </div>

            {/* //* content div closes below */}
         </div>
      </div>
   );
}
