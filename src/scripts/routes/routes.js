import Home from '../views/pages/home';
import PickUpRequest from '../views/pages/pick-up-request';
import SwapPoint from '../views/pages/swap-point';
import HistoryTransaction from '../views/pages/history-transaction';
import DetailArticle from '../views/pages/detail-article';
import HomeAdmin from '../views/pages/homeAdmin';
import ListPickup from '../views/pages/list-pickup';
import DetailPickup from '../views/pages/detail-pickup';
import ListWithdrawal from '../views/pages/list-withdrawal';
import DetailWithdrawal from '../views/pages/detail-withdrawal';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/home-admin': HomeAdmin,
  '/pickups': PickUpRequest,
  '/swap-point': SwapPoint,
  '/history-transaction': HistoryTransaction,
  '/detail-article/:id': DetailArticle,
  '/list-pickup': ListPickup,
  '/pickups/:id': DetailPickup,
  '/list-withdrawal': ListWithdrawal,
  '/withdrawals/:id': DetailWithdrawal,
};

export default routes;
