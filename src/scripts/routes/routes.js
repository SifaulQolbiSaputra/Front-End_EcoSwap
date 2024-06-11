import Home from '../views/pages/home';
import PickUp from '../views/pages/pick-up';
import SwapPoint from '../views/pages/swap-point';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/pick-up': PickUp,
  '/swap-point': SwapPoint,
  // '/detail-article/:id': DetailArticle,
};

export default routes;
