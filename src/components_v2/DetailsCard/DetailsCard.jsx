import { Button } from 'rsuite';
import styles from './DetailsCard.module.scss';

const DetailsCard = ({ title, type, data, onEditClick, Icon }) => {
   return (
      <div className={styles.details}>
         <div className={styles['details-title']}>
            <div className={styles.text}>
               <Icon />
               <h4 className="lead text-muted">{title}</h4>
            </div>
            <Button appearance="primary" color="green" onClick={onEditClick}>
               Edit
            </Button>
         </div>

         {type === 'list' ? (
            <div className={styles['details-content-list']}>
               {data.map((item, index) => (
                  <div className={styles['text-item']} key={index}>
                     <span>{item.title}</span>
                     <span>{item.value}</span>
                  </div>
               ))}
            </div>
         ) : (
            <div className={styles['details-content-paragraph']}>{data}</div>
         )}
      </div>
   );
};

export default DetailsCard;
