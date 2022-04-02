import cx from 'classnames';
import { Button } from 'rsuite';
import { PROFILE_IMAGE } from '../../constants/mock';
import styles from './PersonCard.module.scss';

const PersonCard = () => {
   return (
      <div className={cx(styles.card, 'd-flex border shadow-sm p-3 bg-light rounded w-100')}>
         <img src={PROFILE_IMAGE} className="rounded" alt="" />

         <div className={styles.content}>
            <div className={styles.header}>
               <div className={styles['text-info']}>
                  <strong>Supriya Shekhar</strong>
                  <span>5'4", 23 years</span>
                  <span>Id: Abcd_123</span>
               </div>

               <div className={styles.buttons}>
                  <Button size="xs" appearance="subtle" color="blue">
                     View Profile
                  </Button>
                  <Button size="xs" appearance="subtle" color="blue">
                     Send Interest
                  </Button>
               </div>
            </div>

            <div className={styles.footer}>
               <Button color="blue" appearance="subtle" size="xs">
                  Send Message
               </Button>
               <Button color="green" appearance="subtle" size="xs">
                  Add To Short List
               </Button>
               <Button color="red" appearance="subtle" size="xs">
                  Add To Block List
               </Button>
            </div>
         </div>
      </div>
   );
};

export default PersonCard;
