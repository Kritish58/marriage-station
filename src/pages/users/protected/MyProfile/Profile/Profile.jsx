import { useState } from 'react';
import DetailsCard from '../../../../../components_v2/DetailsCard';
import { BASIC_DETAILS } from '../../../../../constants/mock';
import DocumentIcon from '../../../../../icons/DocumentIcon';
import EducationIcon from '../../../../../icons/EducationIcon';
import LocationIcon from '../../../../../icons/LocationIcon';
import User from '../../../../../icons/User';
import UserGroupIcon from '../../../../../icons/UserGroupIcon';
import EditModal from '../EditModal/EditModal';
import styles from '../MyProfile.module.scss';

const Profile = () => {
   const [openEditModal, setOpenEditModal] = useState(false);
   const [modalTitle, setModalTitle] = useState('');

   return (
      <div>
         <EditModal title={modalTitle} open={openEditModal} handleClose={() => setOpenEditModal(false)} />

         <h4 className="mb-3" style={{ fontWeight: 400 }}>
            My Profile
         </h4>

         <div className={styles['details-section']}>
            <DetailsCard
               title="Basic Details"
               type="list"
               data={BASIC_DETAILS}
               Icon={DocumentIcon}
               onEditClick={() => {
                  setModalTitle('Edit Basic Details');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="About Me"
               type="paragraph"
               Icon={User}
               data={'Please contact me Whatsapp +971564761015 Botim 9823842210'}
               onEditClick={() => {
                  setModalTitle('Edit About Me');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Religion Information"
               type="list"
               data={BASIC_DETAILS}
               Icon={DocumentIcon}
               onEditClick={() => {
                  setModalTitle('Edit Religion Information');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Location Information"
               type="list"
               data={BASIC_DETAILS}
               Icon={LocationIcon}
               onEditClick={() => {
                  setModalTitle('Edit Location Information');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Education / Profession Information"
               type="list"
               data={BASIC_DETAILS}
               Icon={EducationIcon}
               onEditClick={() => {
                  setModalTitle('Edit Education / Profession Information');
                  setOpenEditModal(true);
               }}
            />

            <DetailsCard
               title="Family Details"
               type="list"
               data={BASIC_DETAILS}
               Icon={UserGroupIcon}
               onEditClick={() => {
                  setModalTitle('Edit Family Details');
                  setOpenEditModal(true);
               }}
            />
         </div>
      </div>
   );
};

export default Profile;
