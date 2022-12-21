import config from '~/config';

import Home from '~/pages/Home';

import History from '~/pages/History';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.history, component: History },
];

export { publicRoutes };
