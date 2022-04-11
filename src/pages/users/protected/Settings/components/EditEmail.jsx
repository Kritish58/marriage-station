import { Button, Input } from 'rsuite';

const EditEmail = () => {
   return (
      <div>
         <p className="lead text-muted">Edit Email Address</p>
         <small>
            A valid e-mail id will be used to send you partner search mailers, member to member communication mailers
            and special offers.
         </small>

         <div className="mt-4 mb-3 d-flex gap-2 flex-wrap">
            <Input className="border" placeholder="Enter New Email" style={{ maxWidth: 300 }} />
            <Button size="md" appearance="primary" color="blue">
               SAVE
            </Button>
            <Button size="md" appearance="subtle" color="blue">
               RESET
            </Button>
         </div>
      </div>
   );
};

export default EditEmail;
