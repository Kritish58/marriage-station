import ReactSelect from 'react-select';
import { Checkbox } from 'rsuite';

const RegularAdvancedSearch = () => {
   return (
      <div>
         <p className="lead text-muted mb-2 ">Advanded Options</p>

         <div className="px-4 py-3 border rounded bg-white">
            <div className="mb-3">
               <label className="mb-1">Occupation</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-3">
               <label className="mb-1">Employed In</label>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Checkbox>
                     <small>Any</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Government</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Private</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Business</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Defence</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Self Employed</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Not Working</small>
                  </Checkbox>
               </div>
            </div>

            <div className="mb-3">
               <label className="mb-1">Annual Income</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-3">
               <label className="mb-1">Eating Habits</label>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Checkbox>
                     <small>All</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Non Vegetarian</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Vegetarian</small>
                  </Checkbox>
               </div>
            </div>

            <div className="mb-3">
               <label className="mb-1">Drinking Habits</label>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Checkbox>
                     <small>All</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Non Drinker</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Light/Social</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Regular</small>
                  </Checkbox>
               </div>
            </div>

            <div className="mb-3">
               <label className="mb-1">Smoking Habits</label>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Checkbox>
                     <small>All</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Non Smoker</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Light/Social</small>
                  </Checkbox>
                  <Checkbox>
                     <small>Regular</small>
                  </Checkbox>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegularAdvancedSearch;
