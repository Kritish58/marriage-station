import { Button, Input } from 'rsuite';
import cx from 'classnames';
import styles from '../Setting.module.scss';
import PersonCard from '../../../../../components_v2/PersonCard/PersonCard';

const BlockList = () => {
   return (
      <div className={styles.pageContent}>
         <p className="lead text-muted">Block List</p>
         <div className={cx(styles.description, 'small text-muted')}>
            Contains all those profiles whom you consider not worth interacting and have blocked.
         </div>

         <div className="mt-4 mb-3 d-flex gap-2 flex-wrap">
            <Input className="border" placeholder="Profile id" style={{ maxWidth: 300 }} />
            <Button size="md" appearance="primary" color="red">
               Block
            </Button>
         </div>

         <hr />
         <div>
            <h6 className="text-muted my-2" style={{ fontWeight: 400 }}>
               My Block List (2 Members)
            </h6>
            <div className="d-flex flex-wrap gap-3">
               {[0, 1].map((item) => (
                  <div key={item}>
                     <PersonCard />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default BlockList;
