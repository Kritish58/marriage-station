import cx from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../icons/Home';
import MatchesIcon from '../../icons/Matches';
import SearchIcon from '../../icons/Search';
import UserIcon from '../../icons/User';
import styles from './BottomNav.module.scss';

const NAV_ITEMS = {
   home: 'home',
   profile: 'my-profile',
   search: 'search',
   matches: 'matches',
};

const BottomNav = () => {
   const navigate = useNavigate();

   const [activeNav, setActiveNav] = useState(NAV_ITEMS.home);

   const handleNavItemClick = (navItem) => () => {
      setActiveNav(navItem);
      navigate(`/${navItem}`);
   };

   return (
      <div className={styles.bottomNav}>
         <div
            className={cx(styles['nav-item'], activeNav === NAV_ITEMS.home && styles['nav-item-active'])}
            onClick={handleNavItemClick(NAV_ITEMS.home)}>
            <HomeIcon />
            <small>Home</small>
         </div>
         <div
            className={cx(styles['nav-item'], activeNav === NAV_ITEMS.profile && styles['nav-item-active'])}
            onClick={handleNavItemClick(NAV_ITEMS.profile)}>
            <UserIcon />
            <small>Profile</small>
         </div>
         <div
            className={cx(styles['nav-item'], activeNav === NAV_ITEMS.search && styles['nav-item-active'])}
            onClick={handleNavItemClick(NAV_ITEMS.search)}>
            <SearchIcon />
            <small>Search</small>
         </div>
         <div
            className={cx(styles['nav-item'], activeNav === NAV_ITEMS.matches && styles['nav-item-active'])}
            onClick={handleNavItemClick(NAV_ITEMS.matches)}>
            <MatchesIcon />
            <small>Matches</small>
         </div>
      </div>
   );
};

export default BottomNav;
