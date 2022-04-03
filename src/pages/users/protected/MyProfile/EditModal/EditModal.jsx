import { Modal, Button } from 'rsuite';

const EditModal = ({ title, open, handleClose }) => {
   return (
      <Modal overflow={true} open={open} onClose={handleClose}>
         <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
         </Modal.Header>
         <Modal.Body></Modal.Body>
         <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
               Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
               Cancel
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default EditModal;
