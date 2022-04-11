import { useState } from 'react';
import BlockList from './components/BlockList';
import ChangePassword from './components/ChangePassword';
import ContactSettings from './components/ContactSettings';
import DeleteProfile from './components/DeleteProfile';
import EditEmail from './components/EditEmail';
import PhotoVisibility from './components/PhotoVisibility';
import SettingsSideNav from './components/SettingsSideNav';

export const SETTING_PAGES = {
   editEmail: 'editEmail',
   changePassword: 'changePassword',
   blockList: 'blockList',
   photoVisibility: 'photoVisibility',
   contactSettings: 'contactSettings',
   deleteProfile: 'deleteProfile',
};

const Settings = () => {
   const [activePage, setActivePage] = useState(SETTING_PAGES.editEmail);

   const handlePageChange = (page) => () => {
      setActivePage(page);
   };

   const renderPageContent = () => {
      switch (activePage) {
         case SETTING_PAGES.editEmail:
            return <EditEmail />;

         case SETTING_PAGES.changePassword:
            return <ChangePassword />;

         case SETTING_PAGES.blockList:
            return <BlockList />;

         case SETTING_PAGES.photoVisibility:
            return <PhotoVisibility />;

         case SETTING_PAGES.contactSettings:
            return <ContactSettings />;

         case SETTING_PAGES.deleteProfile:
            return <DeleteProfile />;

         default:
            break;
      }
   };

   return (
      <div>
         <p className="mb-2 lead">Profile Settings</p>
         <div className="d-flex gap-3">
            <SettingsSideNav style={{ minWidth: 220 }} activePage={activePage} handlePageChange={handlePageChange} />
            <div className="p-3 bg-white border rounded" style={{ flexGrow: 1, height: 'fit-content' }}>
               {renderPageContent()}
            </div>
         </div>
      </div>
   );
};

export default Settings;
