import cx from 'classnames';
import { PROFILE_IMAGE } from '../../constants/mock';
import styles from './ProfileCard.module.scss';

const ProfileCard = () => {
   return (
      <div className={cx(styles['profile-card'], 'rounded')}>
         <div className={cx(styles['profile-card-info'])}>
            <img src={PROFILE_IMAGE} alt="profile" className="rounded" />
         </div>
      </div>
   );
};

export default ProfileCard;
