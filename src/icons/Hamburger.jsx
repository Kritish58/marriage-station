import cx from 'classnames';

const Hamburger = ({ onClick, className }) => {
   return (
      <div className={cx(className, 'd-inline')} onClick={onClick}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
         </svg>
      </div>
   );
};

export default Hamburger;
