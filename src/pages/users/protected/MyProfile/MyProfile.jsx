import { useState } from 'react';
import { Nav } from 'rsuite';
import styles from './MyProfile.module.scss';

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
         <ProfileNav appearance="subtle" active={active} onSelect={setActive} />
      </div>
   );
};

export default MyProfile;
