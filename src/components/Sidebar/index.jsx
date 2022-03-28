import { SidebarItem } from './Item';
import { HomeIcon, MailIcon, SearchIcon, UsersIcon, CogIcon, LoginIcon } from '@heroicons/react/outline';
import './index.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authFailure, logout } from '../../redux/reducers';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../api';
import Constants from '../../constants';
import { Spinner } from '../Spinner';
import { PROFILE_IMAGE } from '../../constants/mock';

const menus = [
   {
      label: 'Home',
      icon: HomeIcon,
      route: '/home',
   },
   {
      label: 'Search',
      icon: SearchIcon,
      route: '/search',
   },
   {
      label: 'Matches',
      icon: UsersIcon,
      route: '/matches',
   },
   {
      label: 'Mailbox',
      icon: MailIcon,
      route: '/mailbox',
   },
   {
      label: 'Settings',
      icon: CogIcon,
      route: '/settings',
   },
];

export const Sidebar = () => {
   const [active, setActive] = useState();
   const checkActive = (value) => active === value;
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const { user } = useSelector((state) => state.authState);
   const [loading, setLoading] = useState(true);
   const [images, setImages] = useState(null);

   const handleLogout = () => {
      dispatch(logout());
      navigate('/', { replace: true });
   };

   useEffect(() => {
      const fetchPhoto = async () => {
         try {
            let res = await API.get(Constants.apiEndpoint.photo.uploadProfilePic);
            let found = res.data?.map((d) => d.userDetailId === user.UserDetail.userDetail_id).includes(true);
            if (!found) {
               navigate('/uploadPic', { replace: true });
            } else {
               let imgs = res.data?.filter((d) => d.userDetailId === user.UserDetail.userDetail_id && d);
               setImages(imgs[0]);
            }
         } catch (error) {
            dispatch(authFailure());
         }
      };

      setLoading(true);
      fetchPhoto();
      menus.map((menu) => location.pathname.startsWith(menu.route) && setActive(menu.label));
      setLoading(false);
   }, [location.pathname, user.UserDetail.userDetail_id, navigate, dispatch]);
   return loading ? (
      <div>
         <Spinner />
      </div>
   ) : (
      <div className="sidebar d-flex flex-column justify-content-between align-tems-center">
         <div className="d-flex flex-column sidebar__icons__box">
            {/* <CircularAvatar profilePic={`ftp://@ftp.marriagestation.com.np/${images?.photo1}`} color="color" /> */}
            {menus.map((menu) => (
               <SidebarItem
                  key={menu.label}
                  active={checkActive(menu.label)}
                  icon={menu.icon}
                  label={menu.label}
                  onClick={() => {
                     navigate(menu.route);
                  }}
               />
            ))}
         </div>
         <div className="logout">
            <SidebarItem highlight icon={LoginIcon} label="Log Out" onClick={handleLogout} />
         </div>
      </div>
   );
};

const CircularAvatar = ({ profilePic }) => {
   return (
      <div className="circular__container rounded-circle align-self-center bg-success">
         <img className="rounded-circle avatar__image" width="100%" height="100%" src={PROFILE_IMAGE} alt="profile" />
      </div>
   );
};
