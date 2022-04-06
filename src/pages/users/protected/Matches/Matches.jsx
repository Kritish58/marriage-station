import { Button } from 'rsuite';
import styles from './Matches.module.scss';
import PersonCard from '../../../../components_v2/PersonCard';
import ReactSelect from 'react-select';

const options = [
   { value: 'value', label: 'label' },
   { value: 'value', label: 'label' },
   { value: 'value', label: 'label' },
];

const Matches = () => {
   return (
      <div className={styles.matches}>
         <h4 className="lead">Custom Match</h4>
         <p>
            <small>Select your preferences below to find matches</small>
         </p>

         <form>
            <div>
               <label>Looking For</label>
               <ReactSelect options={options} />
            </div>
            <div>
               <label>Height</label>
               <div className="d-flex gap-3 align-items-center">
                  <ReactSelect options={options} />
                  <span>To</span>
                  <ReactSelect options={options} />
               </div>
            </div>
            <div>
               <label>Complexion</label>
               <ReactSelect options={options} />
            </div>
            <div>
               <label>Mother Tongue</label>
               <ReactSelect options={options} />
            </div>
            <div>
               <label>Religion</label>
               <ReactSelect options={options} />
            </div>
            <div>
               <label>Country</label>
               <ReactSelect options={options} />
            </div>
            <div>
               <label>Caste</label>
               <ReactSelect options={options} />
            </div>
            <div>
               <label>Education</label>
               <ReactSelect options={options} />
            </div>

            <div>
               <Button appearance="primary" color="green">
                  Search
               </Button>
            </div>
         </form>

         <hr />
         <h4 className="mb-2 lead"> Search Results: 2</h4>
         <div className="d-flex gap-2 flex-wrap">
            {[0, 1, 2].map((item) => (
               <div>
                  <PersonCard key={item} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Matches;
