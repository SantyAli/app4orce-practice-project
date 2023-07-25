// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'chat',
    path: '/dashboard/chat',
    icon: icon('ic_cart'),
  },
  {
    title: 'sign in',
    path: '/signIn',
    icon: icon('ic_cart'),
  },
  {
    title: 'otp',
    path: '/otp',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
