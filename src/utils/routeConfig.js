import Constants from '../constants';
import { Landing } from '../pages';
import Dashboard from '../pages/admin/Dashboard';
import Homepage from '../pages/users/protected/home/Hompage';
import PreferenceMatches from '../pages/users/protected/matches/PreferenceMatch';
import ViewProfile from '../pages/users/protected/profile';
import SearchPage from '../pages/users/protected/search/SearchPage';
import SearchResults from '../pages/users/protected/search/SearchResults';
export const routeConfig = [
   {
      path: '/',
      title: 'Marriage Station',
      element: Landing,
      roles: [],
   },
   {
      path: '/home',
      title: 'Homepage',
      element: Homepage,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/',
      title: 'Admin',
      element: Dashboard,
      roles: [Constants.roles.SuperAdmin],
   },
   {
      path: '/search',
      title: 'Search Page',
      element: SearchPage,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/search/account',
      title: 'List User',
      element: SearchResults,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: 'search/viewProfile/:id',
      title: 'View Profile',
      element: ViewProfile,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/matches',
      title: 'Matches',
      element: PreferenceMatches,
      roles: [Constants.roles.NormalUser],
   },
];
