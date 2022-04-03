import { useState } from 'react';
import { Button, Nav } from 'rsuite';
import ProfileCard from '../../../../components_v2/ProfileCard';
import CaretIcon from '../../../../icons/Caret';
import VerifyIcon from '../../../../icons/VerifyIcon';
import styles from './MyProfile.module.scss';
import Preference from './Preference';
import Profile from './Profile';

const isUserVerified = true;

const MyProfile = () => {
   const [active, setActive] = useState('myProfile');

   const ProfileNav = ({ active, onSelect, ...props }) => {
      return (
         <Nav {...props} activeKey={active} onSelect={onSelect}>
            <Nav.Item eventKey="myProfile">My profile</Nav.Item>
            <Nav.Item eventKey="preferences">My Preferences</Nav.Item>
         </Nav>
      );
   };

   return (
      <div className={styles.myProfile}>
         <div style={{ width: 'fit-content' }}>
            <ProfileNav appearance="subtle" active={active} onSelect={setActive} />
         </div>

         <div className={styles.content}>
            <div className={styles['content-profileCard']}>
               <div className={styles.profileCard}>
                  <ProfileCard />
                  <Button size="sm" className={styles['photo-edit-button']}>
                     Edit
                  </Button>
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
                     <span>Go To Home</span>
                     <CaretIcon />
                  </div>

                  <div className={styles.link}>
                     <span>Profile Settings</span>
                     <CaretIcon />
                  </div>
               </div>
            </div>

            <div style={{ flexGrow: 1 }}>
               {active === 'myProfile' && <Profile />}
               {active === 'preferences' && <Preference />}
            </div>

            {/* //* content div closes below */}
         </div>
      </div>
   );
};

export default MyProfile;
