import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components';
import { routeConfig } from '../utils';
import './main.scss';
import { Error404 } from '../pages';
import Homepage from '../pages/users/protected/home/Hompage';

export const UserRoutes = () => {
   const { user } = useSelector((state) => state.authState);
   const routes = routeConfig.filter((c) => c.roles.some((idx) => idx === user.Roles[0].role));

   console.log(routes);

   return (
      <div className="d-flex user__main">
         <Sidebar />
         <aside style={{ flexGrow: '1' }}>
            <Routes>
               {/* {routes.map((idx) => {
                  let Element = idx.element;
                  return <Route path={idx.path} element={<Element />} title={idx.title} key={`page-${idx.path}`} />;
               })} */}

               <Route path="home" element={<Homepage />} />

               <Route path="*" element={<h2>Home Page Not Found</h2>} />
            </Routes>
         </aside>
      </div>
   );
};
