import cx from 'classnames';
import { SETTING_PAGES } from '../Settings';
import styles from '../Setting.module.scss';

const SettingsSideNav = ({ style, activePage, handlePageChange }) => {
   return (
      <div style={style} className={cx(styles.sideNav, 'p-3 py-2 border rounded bg-white')}>
         <span
            className={cx(styles.pageLink, activePage === SETTING_PAGES.editEmail && styles['pageLink-active'])}
            onClick={handlePageChange(SETTING_PAGES.editEmail)}>
            Edit Email Address
         </span>
         <span
            className={cx(styles.pageLink, activePage === SETTING_PAGES.changePassword && styles['pageLink-active'])}
            onClick={handlePageChange(SETTING_PAGES.changePassword)}>
            Change Password
         </span>
         <span
            className={cx(styles.pageLink, activePage === SETTING_PAGES.blockList && styles['pageLink-active'])}
            onClick={handlePageChange(SETTING_PAGES.blockList)}>
            Block List
         </span>
         <span
            className={cx(styles.pageLink, activePage === SETTING_PAGES.photoVisibility && styles['pageLink-active'])}
            onClick={handlePageChange(SETTING_PAGES.photoVisibility)}>
            Photo Visibility
         </span>
         <span
            className={cx(styles.pageLink, activePage === SETTING_PAGES.contactSettings && styles['pageLink-active'])}
            onClick={handlePageChange(SETTING_PAGES.contactSettings)}>
            Contact Settings
         </span>
         <span
            className={cx(styles.pageLink, activePage === SETTING_PAGES.deleteProfile && styles['pageLink-active'])}
            onClick={handlePageChange(SETTING_PAGES.deleteProfile)}>
            Delete Profile
         </span>
      </div>
   );
};

export default SettingsSideNav;
