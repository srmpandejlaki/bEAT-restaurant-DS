import dashboard from '../view/pages/dashboard';
import details from '../view/pages/detail';
import favorito from '../view/pages/favorite';

const routes = {
  '/': dashboard,
  '/home': dashboard,
  '/detail/:id': details,
  '/favorite': favorito,
};

export default routes;
