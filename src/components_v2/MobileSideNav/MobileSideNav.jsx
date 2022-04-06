import cx from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, Sidenav } from 'rsuite';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers';

import styles from './MobileSideNav.module.scss';

import Home from '../../icons/Home';
import User from '../../icons/User';
import Matches from '../../icons/Matches';
import Search from '../../icons/Search';
import Mail from '../../icons/Mail';
import Money from '../../icons/Upgrade';
import Cog from '../../icons/Cog';
import Logout from '../../icons/Logout';
import { USER_ROUTES } from '../../routes/constants';

const MobileSideNav = ({ isOpen }) => {
   const [activeKey, setActiveKey] = useState('1');

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleNavItemClick = (path) => () => {
      navigate(path);
   };

   const handleLogout = () => () => {
      dispatch(logout());
      navigate('/', { replace: true });
   };

   return (
      <div className={cx(styles.sidebar, isOpen ? styles['sidebar-open'] : styles['sidebar-closed'])}>
         <div className={styles['rsuite-sidenav']}>
            <Sidenav appearance="inverse" defaultOpenKeys={['3', '4']} activeKey={activeKey} onSelect={setActiveKey}>
               <Sidenav.Body>
                  <Nav>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="1"
                        icon={<Home />}
                        onClick={handleNavItemClick(USER_ROUTES.home)}>
                        {<span>Home</span>}
                     </Nav.Item>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="2"
                        icon={<User />}
                        onClick={handleNavItemClick(USER_ROUTES.myProfile)}>
                        {<span>Profile</span>}
                     </Nav.Item>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="3"
                        icon={<Matches />}
                        onClick={handleNavItemClick(USER_ROUTES.matches)}>
                        {<span>Matches</span>}
                     </Nav.Item>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="4"
                        icon={<Search />}
                        onClick={handleNavItemClick(USER_ROUTES.search)}>
                        {<span>Search</span>}
                     </Nav.Item>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="5"
                        icon={<Mail />}
                        onClick={handleNavItemClick(USER_ROUTES.mailbox)}>
                        {<span>Mailbox</span>}
                     </Nav.Item>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="6"
                        icon={<Money />}
                        onClick={handleNavItemClick(USER_ROUTES.upgrade)}>
                        {<span>Upgrade</span>}
                     </Nav.Item>
                     <Nav.Item
                        className={styles['nav-item']}
                        eventKey="7"
                        icon={<Cog />}
                        onClick={handleNavItemClick(USER_ROUTES.settings)}>
                        {<span>Settings</span>}
                     </Nav.Item>
                  </Nav>
               </Sidenav.Body>
            </Sidenav>
         </div>

         <div className={styles.logout} onClick={handleLogout}>
            <Logout />
            {<span>Logout</span>}
         </div>
      </div>
   );
};

export default MobileSideNav;
