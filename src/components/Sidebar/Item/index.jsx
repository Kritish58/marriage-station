import './index.scss';

export const SidebarItem = ({ icon: Icon, label, active, highlight, onClick }) => {
   return (
      <div
         className={`m-2 p-4 rounded-3 d-flex sidebar__item ${active ? 'active' : ''} ${highlight ? 'highlight' : ''}`}
         onClick={onClick}>
         <Icon width="24" height="24" className="align-self-center" />
         <h6 className="align-self-center my-2 mx-3">{label}</h6>
      </div>
   );
};
