import config from '~/config';

import Home from '~/pages/Home';

import History from '~/pages/History';

import DetailMovie from '~/pages/DetailMovie/DetailMovie';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.history, component: History },
    { path: config.routes.detailMovie, component: DetailMovie },
];

export { publicRoutes };
