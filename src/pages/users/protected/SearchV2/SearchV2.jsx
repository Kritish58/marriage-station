import { Button, Input, Nav } from 'rsuite';
import { useState } from 'react';
import RegularBasicSearch from './components/RegularBasicSearch';
import RegularAdvancedSearch from './components/RegularAdvancedSearch';
import useGetBreakpoint from '../../../../hooks/useGetBreakpoint';
import { useNavigate } from 'react-router-dom';

const SEARCH_TABS = {
   id: 'idSearch',
   regular: 'regularSearch',
};

const SearchV2 = () => {
   const breakpoint = useGetBreakpoint();
   const navigate = useNavigate();

   const [activeTab, setActiveTab] = useState(SEARCH_TABS.regular);

   const SearchNav = ({ active, onSelect, ...props }) => {
      return (
         <Nav {...props} activeKey={active} onSelect={onSelect}>
            <Nav.Item eventKey={SEARCH_TABS.regular}>Regular Search</Nav.Item>
            <Nav.Item eventKey={SEARCH_TABS.id}>ID Search</Nav.Item>
         </Nav>
      );
   };

   const handleSearchClick = () => {
      navigate('/search-results');
   };

   const RegularSearch = () => {
      return (
         <div>
            <p className="my-3 text-muted">
               <small>Select the options below to search for your matches. All fields are optional</small>
            </p>

            <div
               className="mb-3"
               style={{
                  display: 'grid',
                  gridTemplateColumns:
                     breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'lg' ? '1fr' : '1fr 1fr',
                  gap: 16,
               }}>
               <div style={{ flexGrow: 1 }}>
                  <RegularBasicSearch />
               </div>
               <div style={{ flexGrow: 1 }}>
                  <RegularAdvancedSearch />
               </div>
            </div>

            <Button onClick={handleSearchClick} size="lg" appearance="primary" color="green" block>
               Search
            </Button>
         </div>
      );
   };

   const IDSearch = () => {
      return (
         <div>
            <p className="my-3 text-muted">
               <small>Enter the id of the member you want to search</small>
            </p>
            <div className="d-flex flex-column gap-2">
               <div style={{ maxWidth: 300 }}>
                  <Input placeholder="Enter Id" />
               </div>
               <div>
                  <Button size="sm" appearance="primary" color="green">
                     Search
                  </Button>
               </div>
            </div>
         </div>
      );
   };

   return (
      <div>
         <div style={{ width: 'fit-content' }}>
            <SearchNav appearance="subtle" active={activeTab} onSelect={setActiveTab} />
         </div>

         <div>
            {activeTab === SEARCH_TABS.regular && <RegularSearch />}
            {activeTab === SEARCH_TABS.id && <IDSearch />}
         </div>
      </div>
   );
};

export default SearchV2;
