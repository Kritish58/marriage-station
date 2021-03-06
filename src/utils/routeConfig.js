import Constants from '../constants';
import { Landing } from '../pages';
import Dashboard from '../pages/admin/Dashboard';
import Home from '../pages/users/protected/Home';
import Matches from '../pages/users/protected/Matches';
import MyProfile from '../pages/users/protected/MyProfile';
import ViewProfile from '../pages/users/protected/profile';
import SearchPage from '../pages/users/protected/search/SearchPage';
import SearchResults from '../pages/users/protected/SearchV2/SearchResults';
import SearchV2 from '../pages/users/protected/SearchV2';
import Settings from '../pages/users/protected/Settings';
import Upgrade from '../pages/users/protected/Upgrade';
import MailBox from '../pages/users/protected/MailBox';

export const routeConfig = [
   {
      path: '/',
      title: 'Marriage Station',
      element: Landing,
      roles: [],
   },
   {
      path: '/home',
      title: 'Home',
      element: Home,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/my-profile',
      title: 'My Profile',
      element: MyProfile,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/upgrade',
      title: 'Upgrade',
      element: Upgrade,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/search',
      title: 'Search Page',
      element: SearchV2,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/search-results',
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
      element: Matches,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/mailbox',
      title: 'MailBox',
      element: MailBox,
      roles: [Constants.roles.NormalUser],
   },
   {
      path: '/settings',
      title: 'Settings',
      element: Settings,
      roles: [Constants.roles.NormalUser],
   },
];
