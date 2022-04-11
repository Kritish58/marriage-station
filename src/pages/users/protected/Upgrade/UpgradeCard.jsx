import { CalendarIcon, CheckIcon } from '@heroicons/react/outline';
import { Button } from 'rsuite';

const UpgradeCard = ({ title, duration, profileViews, liveChat, personalMessage, price, onClick }) => {
   return (
      <div className="py-3 px-4 border bg-white rounded" style={{ maxWidth: 400 }}>
         <h3 className=" text-center mb-4" style={{ fontWeight: 400, color: 'var(--primary-color)' }}>
            {title}
         </h3>
         <div className="d-flex gap-2 my-3">
            <div className="d-flex gap-1 align-items-center text-muted">
               <CalendarIcon height={16} />
               <span>Duration: </span>
            </div>
            <span>{duration}</span>
         </div>

         <div className="d-flex justify-content-between gap-4 my-3">
            <div className="d-flex gap-2">
               <span className="text-muted">View Profile: </span>
               <span>{profileViews}</span>
            </div>
            <CheckIcon color="green" height={20} />
         </div>

         <div className="d-flex justify-content-between gap-4 my-3">
            <div className="d-flex gap-2">
               <span className="text-muted">Live Chat: </span>
               <span>{liveChat}</span>
            </div>
            <CheckIcon color="green" height={20} />
         </div>

         <div className="d-flex gap-4 my-3">
            <div className="d-flex gap-2">
               <span className="text-muted">Personal Message: </span>
               <span>{personalMessage}</span>
            </div>
            <CheckIcon color="green" height={20} />
         </div>

         <hr />

         <h4 className=" text-center mb-2" style={{ fontWeight: 400, color: 'var(--primary-color)' }}>
            {price}
         </h4>

         <div className="my-2">
            <Button appearance="primary" color="orange" block onClick={onClick}>
               BUY NOW
            </Button>
         </div>
      </div>
   );
};

export default UpgradeCard;
