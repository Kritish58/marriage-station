import { Button, Input, Radio } from 'rsuite';

const PhotoVisibility = () => {
   return (
      <div>
         <p className="lead text-muted">Photo Visibility</p>
         <small className="text-muted">
            Limit your visibility to others by selecting from three options below.You can password protect your photos
            so that only those to whom you send password can view them.
         </small>

         <div className="my-2 d-flex flex-column">
            <Radio> Hide for All</Radio>
            <Radio> Visiblie for All</Radio>
            <Radio> Visible for paid members only</Radio>
         </div>

         <hr />

         <h6 className="text-muted mb-2" style={{ fontWeight: 400 }}>
            Set Password for Photo
         </h6>

         <div className="d-flex gap-2 flex-wrap">
            <Input className="border" placeholder="Enter Password" style={{ maxWidth: 300 }} />
            <Button size="md" appearance="primary" color="blue">
               Save
            </Button>
         </div>
      </div>
   );
};

export default PhotoVisibility;
