import useGetBreakpoint from '../../hooks/useGetBreakpoint';
import PersonCardLarge from './PersonCardLarge';
import PersonCardSmall from './PersonCardSmall';

const PersonCard = () => {
   const breakpoint = useGetBreakpoint();

   return breakpoint === 'xxl' || breakpoint === 'xl' ? <PersonCardLarge /> : <PersonCardSmall />;
};

export default PersonCard;
