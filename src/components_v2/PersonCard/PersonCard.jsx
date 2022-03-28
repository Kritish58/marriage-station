import cx from 'classnames';
import { PROFILE_IMAGE } from '../../constants/mock';
import styles from './PersonCard.module.scss';

const PersonCard = () => {
   return (
      <div className={cx(styles.card, 'd-flex border shadow-sm p-3 bg-light rounded w-100')}>
         <img src={PROFILE_IMAGE} className="rounded" alt="" />

         <div className={styles['card-content']}>
            <div className={cx(styles['card-content-header'], 'd-flex')}>
               <h5 className="m-0">N&bull;&bull; Shahi</h5>
               <button className="btn btn-sm btn-outline-primary">View Profile</button>
               <small>Id: MS584</small>
            </div>
            <hr />
            <div className={cx(styles['card-content-info'])}>
               <div className={styles['card-content-info-item']}>
                  <span>Age: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Education: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Height: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Location: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Religion: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Occupation: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Caste: </span> <span>25 Years</span>
               </div>
               <div className={styles['card-content-info-item']}>
                  <span>Mother Tongue: </span> <span>25 Years</span>
               </div>

               <div className={styles['card-content-info-base']} style={{ gridColumn: 'span 2' }}>
                  <span>About me:</span> <span>something about this self ...</span>
                  <button className={cx(styles.readmore, 'rounded mx-2 text-primary')}>Read More</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PersonCard;
