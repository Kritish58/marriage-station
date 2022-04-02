import { useState } from 'react';
import { useSelector } from 'react-redux';
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

const Layout = ({ children }) => {
   const { user } = useSelector((state) => state.authState);
   const [expanded, setExpanded] = useState(true);
   const [activeKey, setActiveKey] = useState('1');

   return (
      <div className="d-flex user__main">
         <div className={styles['layout-content']}>
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
                           <Nav.Item className={styles['nav-item']} eventKey="1" icon={<Home />}>
                              {!!expanded && <span>Home</span>}
                           </Nav.Item>
                           <Nav.Item className={styles['nav-item']} eventKey="2" icon={<User />}>
                              {!!expanded && <span>Profile</span>}
                           </Nav.Item>
                           <Nav.Item className={styles['nav-item']} eventKey="3" icon={<Matches />}>
                              {!!expanded && <span>Matches</span>}
                           </Nav.Item>
                           <Nav.Item className={styles['nav-item']} eventKey="4" icon={<Search />}>
                              {!!expanded && <span>Search</span>}
                           </Nav.Item>
                           <Nav.Item className={styles['nav-item']} eventKey="5" icon={<Mail />}>
                              {!!expanded && <span>Mailbox</span>}
                           </Nav.Item>
                           <Nav.Item className={styles['nav-item']} eventKey="6" icon={<Money />}>
                              {!!expanded && <span>Upgrade</span>}
                           </Nav.Item>
                           <Nav.Item className={styles['nav-item']} eventKey="7" icon={<Cog />}>
                              {!!expanded && <span>Settings</span>}
                           </Nav.Item>
                        </Nav>
                     </Sidenav.Body>
                  </Sidenav>
               </div>

               <div className={styles.logout}>
                  <Logout />
                  {!!expanded && <span>Logout</span>}
               </div>
            </div>

            <div className={cx(styles.topbar, expanded && styles['topbar-expanded'])}>
               <Hamburger
                  className={styles.menu}
                  onClick={() => {
                     setExpanded((prev) => !prev);
                  }}
               />
               <h5 className={styles['topbar-title']}>Hello, {user.firstName}</h5>
            </div>
         </div>

         <aside
            className={cx(styles['main-content'], expanded && styles['main-content-expanded'])}
            style={{ flexGrow: '1' }}>
            {children}
         </aside>
      </div>
   );
};

export default Layout;
