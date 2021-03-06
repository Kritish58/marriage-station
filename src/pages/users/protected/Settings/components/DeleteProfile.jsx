import { Button, Radio } from 'rsuite';
import cx from 'classnames';
import styles from '../Setting.module.scss';

const DeleteProfile = () => {
   return (
      <div className={styles.pageContent}>
         <p className="lead text-muted">Delete Profile</p>

         <div className={cx(styles.description, 'text-muted d-flex flex-column gap-1 my-2')}>
            <small>Please choose a reason for profile deletion</small>
            <small>Note:If you delete your profile, it cannot be restored</small>
         </div>

         <div className="my-2 d-flex flex-column">
            <Radio>Marriage Fixed</Radio>
            <Radio>Married</Radio>
            <Radio>Other Reasons</Radio>
         </div>
         <Button appearance="primary" color="blue">
            Save Changes
         </Button>
      </div>
   );
};

export default DeleteProfile;
