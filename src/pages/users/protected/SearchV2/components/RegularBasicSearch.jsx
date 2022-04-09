import { Checkbox, Radio } from 'rsuite';
import ReactSelect from 'react-select';

const RegularBasicSearch = () => {
   return (
      <div>
         <p className="lead text-muted mb-2">Basic Options</p>
         <div className="px-4 py-3 bg-white border rounded">
            <div className="mb-2">
               <label className="mb-1">Gender</label>
               <div>
                  <Radio>Bride</Radio>
                  <Radio>Groom</Radio>
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Age</label>
               <div className="d-flex gap-3 align-items-center">
                  <div style={{ flexGrow: 1 }}>
                     <ReactSelect options={{ value: 'any', label: 'any' }} />
                  </div>
                  <span>To</span>
                  <div style={{ flexGrow: 1 }}>
                     <ReactSelect options={{ value: 'any', label: 'any' }} />
                  </div>
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Height</label>
               <div className="d-flex gap-3 align-items-center">
                  <div style={{ flexGrow: 1 }}>
                     <ReactSelect options={{ value: 'any', label: 'any' }} />
                  </div>
                  <span>To</span>
                  <div style={{ flexGrow: 1 }}>
                     <ReactSelect options={{ value: 'any', label: 'any' }} />
                  </div>
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Marital Status</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Religion</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Caste</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Mother Tongue</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Country</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">State</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">City</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Education</label>
               <div>
                  <ReactSelect options={{ value: 'any', label: 'any' }} />
               </div>
            </div>

            <div className="mb-2">
               <label className="mb-1">Photo Setting</label>
               <div>
                  <Checkbox>
                     <small>With Photo</small>
                  </Checkbox>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegularBasicSearch;
