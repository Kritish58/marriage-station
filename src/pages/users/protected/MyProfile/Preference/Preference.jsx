import { useState } from 'react';
import DetailsCard from '../../../../../components_v2/DetailsCard';
import { BASIC_DETAILS } from '../../../../../constants/mock';
import DocumentIcon from '../../../../../icons/DocumentIcon';
import EducationIcon from '../../../../../icons/EducationIcon';
import LocationIcon from '../../../../../icons/LocationIcon';
import EditModal from '../EditModal/EditModal';
import styles from '../MyProfile.module.scss';

const Preference = () => {
   const [openEditModal, setOpenEditModal] = useState(false);
   const [modalTitle, setModalTitle] = useState('');

   return (
      <div>
         <EditModal title={modalTitle} open={openEditModal} handleClose={() => setOpenEditModal(false)} />

         <h4 className="mb-3" style={{ fontWeight: 400 }}>
            My Preferences
         </h4>

         <div className={styles['details-section']}>
            <DetailsCard
               title="Basic Preferences"
               type="list"
               data={BASIC_DETAILS}
               Icon={DocumentIcon}
               onEditClick={() => {
                  setModalTitle('Edit Basic Preferences');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Religion Preferences"
               type="list"
               data={BASIC_DETAILS}
               Icon={DocumentIcon}
               onEditClick={() => {
                  setModalTitle('Edit Religion Preferences');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Location Preferences"
               type="list"
               data={BASIC_DETAILS}
               Icon={LocationIcon}
               onEditClick={() => {
                  setModalTitle('Edit Location Preferences');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Education / Profession Preferences"
               type="list"
               data={BASIC_DETAILS}
               Icon={EducationIcon}
               onEditClick={() => {
                  setModalTitle('Edit Education / Profession Preferences');
                  setOpenEditModal(true);
               }}
            />
         </div>
      </div>
   );
};

export default Preference;
