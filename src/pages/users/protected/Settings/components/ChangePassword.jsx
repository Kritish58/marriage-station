import { Button, Input } from 'rsuite';
import cx from 'classnames';
import styles from '../Setting.module.scss';

const ChangePassword = () => {
   return (
      <div className={styles.pageContent}>
         <p className="lead text-muted">Change Password</p>
         <div className={cx(styles.description, 'small text-muted')}>
            Your password must have a minimum of 6 characters. We recommend you choose an alphanumeric password. E.g.:
            Matri123
         </div>

         <div className="my-2  mt-3 d-flex flex-column gap-3 flex-wrap">
            <div className="">
               <label className="text-muted">Enter Old Password</label>
               <Input className="border" placeholder="old password" style={{ maxWidth: 300 }} />
            </div>

            <div className="">
               <label className="text-muted">Enter New Password</label>
               <Input className="border" placeholder="new password" style={{ maxWidth: 300 }} />
            </div>

            <div className="">
               <label className="text-muted">Confirm New Password</label>
               <Input className="border" placeholder="confirm password" style={{ maxWidth: 300 }} />
            </div>

            <div>
               <Button appearance="primary" color="red">
                  Change Password
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ChangePassword;
