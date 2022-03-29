import cx from 'classnames';
import { ProgressBar } from 'react-bootstrap';
import { PROFILE_IMAGE } from '../../constants/mock';
import CaretIcon from '../../icons/Caret';
import styles from './ProfileCard.module.scss';

const ProfileCard = () => {
   return (
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
                  Complete Your Profile <CaretIcon />
               </small>
            </div>
         </div>
      </div>
   );
};

export default ProfileCard;
