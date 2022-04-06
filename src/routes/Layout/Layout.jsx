import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { Nav, Sidenav } from 'rsuite';
import Hamburger from '../../icons/Hamburger';
import styles from './Layout.module.scss';
import 'rsuite/dist/rsuite.min.css';
import Home from '../../icons/Home';
import User from '../../icons/User';
import Matches from '../../icons/Matches';
import Search from '../../icons/Search';
import Mail from '../../icons/Mail';
import Money from '../../icons/Upgrade';
import Cog from '../../icons/Cog';
import Logout from '../../icons/Logout';
import useGetBreakpoint from '../../hooks/useGetBreakpoint';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers';
import { USER_ROUTES } from '../constants';
import BottomNav from '../../components_v2/BottomNav/BottomNav';
import MobileSideNav from '../../components_v2/MobileSideNav';

const Layout = ({ children }) => {
   const { user } = useSelector((state) => state.authState);
   const [expanded, setExpanded] = useState(true);
   const [activeKey, setActiveKey] = useState('1');

   const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

   const breakpoint = useGetBreakpoint();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogout = () => () => {
      dispatch(logout());
      navigate('/', { replace: true });
   };

   const handleNavItemClick = (path) => () => {
      navigate(path);
   };

   const menuClick = () => {
      if (breakpoint === 'sm' || breakpoint === 'md') {
         setOpenMobileSidebar((prev) => !prev);
         return;
      }

      setExpanded((prev) => !prev);
   };

   return (
      <div className="d-flex user__main">
         <div className={styles['layout-content']}>
            <div
               className={cx(
                  styles.topbar,
                  expanded && styles['topbar-expanded'],
                  (breakpoint === 'sm' || breakpoint === 'md') && styles['topbar-smallScreen']
               )}>
               <Hamburger className={styles.menu} onClick={menuClick} />
               <h5 className={styles['topbar-title']}>Hello, {user.firstName}</h5>
            </div>

            {(breakpoint === 'xl' || breakpoint === 'xxl' || breakpoint === 'lg') && (
               <div className={cx(styles.sidebar, expanded && styles['sidebar-expanded'])}>
                  {/* <Sidebar /> */}

                  <div className={styles['rsuite-sidenav']}>
                     <Sidenav
                        appearance="inverse"
                        expanded={expanded}
                        defaultOpenKeys={['3', '4']}
                        activeKey={activeKey}
                        onSelect={setActiveKey}>
                        <Sidenav.Body>
                           <Nav>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="1"
                                 icon={<Home />}
                                 onClick={handleNavItemClick(USER_ROUTES.home)}>
                                 {!!expanded && <span>Home</span>}
                              </Nav.Item>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="2"
                                 icon={<User />}
                                 onClick={handleNavItemClick(USER_ROUTES.myProfile)}>
                                 {!!expanded && <span>Profile</span>}
                              </Nav.Item>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="3"
                                 icon={<Matches />}
                                 onClick={handleNavItemClick(USER_ROUTES.matches)}>
                                 {!!expanded && <span>Matches</span>}
                              </Nav.Item>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="4"
                                 icon={<Search />}
                                 onClick={handleNavItemClick(USER_ROUTES.search)}>
                                 {!!expanded && <span>Search</span>}
                              </Nav.Item>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="5"
                                 icon={<Mail />}
                                 onClick={handleNavItemClick(USER_ROUTES.mailbox)}>
                                 {!!expanded && <span>Mailbox</span>}
                              </Nav.Item>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="6"
                                 icon={<Money />}
                                 onClick={handleNavItemClick(USER_ROUTES.upgrade)}>
                                 {!!expanded && <span>Upgrade</span>}
                              </Nav.Item>
                              <Nav.Item
                                 className={styles['nav-item']}
                                 eventKey="7"
                                 icon={<Cog />}
                                 onClick={handleNavItemClick(USER_ROUTES.settings)}>
                                 {!!expanded && <span>Settings</span>}
                              </Nav.Item>
                           </Nav>
                        </Sidenav.Body>
                     </Sidenav>
                  </div>

                  <div className={styles.logout} onClick={handleLogout}>
                     <Logout />
                     {!!expanded && <span>Logout</span>}
                  </div>
               </div>
            )}
         </div>

         <aside
            className={cx(
               styles['main-content'],
               expanded && styles['main-content-expanded'],
               (breakpoint === 'sm' || breakpoint === 'md') && styles['main-content-smallScreen']
            )}
            style={{ flexGrow: '1' }}>
            {children}
         </aside>

         <MobileSideNav isOpen={openMobileSidebar} />
         {breakpoint === 'sm' && <BottomNav />}
      </div>
   );
};

export default Layout;
