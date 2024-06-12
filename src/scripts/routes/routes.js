import Home from '../views/pages/home';
import PickUpRequest from '../views/pages/pick-up-requset';
import SwapPoint from '../views/pages/swap-point';
import HistoryTransaction from '../views/pages/history-transaction';
import DetailArticle from '../views/pages/detail-article';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/pick-up-request': PickUpRequest,
  '/swap-point': SwapPoint,
  '/history-transaction': HistoryTransaction,
  '/detail-article/:id': DetailArticle,
};

export default routes;
