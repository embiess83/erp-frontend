import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: icon('ic-user'),
  },
  {
    title: 'Products',
    path: '/products',
    icon: icon('ic-user'),
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: icon('ic-user'),
  },
  {
    title: 'Users',
    path: '/users',
    icon: icon('ic-user'),
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
