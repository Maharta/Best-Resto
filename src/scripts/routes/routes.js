import Homepage from '../views/pages/homepage';
import Detail from '../views/pages/detail';

const routes = {
  '/': Homepage, // default page
  '/detail/:id': Detail,
};

export default routes;
