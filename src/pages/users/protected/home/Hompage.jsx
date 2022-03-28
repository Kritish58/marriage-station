import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './HomePage.module.scss';
import { PROFILE_IMAGE } from '../../../../constants/mock';
import { ProgressBar, Tab, Tabs } from 'react-bootstrap';

export default function Homepage() {
   const { user } = useSelector((state) => state.authState);
   if (!user) return <Navigate replace to="/privacy-policies" />;
   return (
      <div className={styles.home}>
         <div className={styles.topbar}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
               height={20}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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
                        Complete Your Profile{' '}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2}
                           height={16}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>{' '}
                     </small>
                  </div>
               </div>
            </div>

            <div className={styles.tabs}>
               <Tabs variant="tabs" defaultActiveKey="recently-joined" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="recently-joined" tabClassName={styles['tab-title']} title="Recently Joined">
                     <h5>Recently Joined</h5>
                  </Tab>
                  <Tab eventKey="short-listed" tabClassName={styles['tab-title']} title="Short Listed">
                     <h5>Short Listed</h5>
                  </Tab>
                  <Tab eventKey="block-listed" tabClassName={styles['tab-title']} title="Block Listed">
                     <h5>Block Listed</h5>
                  </Tab>
                  <Tab eventKey="i-viewed-profile" tabClassName={styles['tab-title']} title="I Viewed Profile">
                     <h5>I Viewed Profile</h5>
                  </Tab>
                  <Tab
                     eventKey="who-viewed-my-profile"
                     tabClassName={styles['tab-title']}
                     title="Who Viewed My Profile">
                     <h5>Who Viewed My Profile</h5>
                  </Tab>
               </Tabs>
            </div>
            {/* //* content div closes below */}
         </div>
      </div>
   );
}
