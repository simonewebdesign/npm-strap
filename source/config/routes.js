// pages
import HomePage      from '../pages/home';
import UsersPage     from '../pages/users/index';
import UserShowPage  from '../pages/users/show';
import NotFoundPage  from '../pages/not-found';

const routes = [
  ['/',           HomePage],
  ['/users',      UsersPage],
  ['/users/:id',  UserShowPage],
  ['*',           NotFoundPage]
];

export default routes;
