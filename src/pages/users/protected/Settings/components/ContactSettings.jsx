import { Button, Radio } from 'rsuite';

const ContactSettings = () => {
   return (
      <div>
         <p className="lead text-muted">Contact Settings</p>
         <small className="text-muted">
            Your opted settings for receiving alerts through emails are mentioned here. You may choose to edit the
            existing settings.
         </small>

         <div className="my-2 d-flex flex-column">
            <Radio>Show to all paid members</Radio>
            <Radio>Show to only interest accepted and paid members.</Radio>
         </div>

         <Button appearance="primary" color="blue">
            Save Changes
         </Button>
      </div>
   );
};

export default ContactSettings;
