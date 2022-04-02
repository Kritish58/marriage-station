import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routeConfig } from '../utils';
import './main.scss';
import Layout from './Layout';

export const UserRoutes = () => {
   const { user } = useSelector((state) => state.authState);
   const routes = routeConfig.filter((c) => c.roles.some((idx) => idx === user.Roles[0].role));

   return (
      <Layout>
         <Routes>
            {routes.map((idx) => {
               let Element = idx.element;
               return <Route path={idx.path} element={<Element />} title={idx.title} key={`page-${idx.path}`} />;
            })}

            <Route path="*" element={<h2>Page Not Found</h2>} />
         </Routes>
      </Layout>
   );
};
