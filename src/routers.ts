import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Hello from './views/Hello.vue';
import NotFound from './views/NotFound.vue';
import Search from './views/Search.vue';
// import About from './views/About.vue';

/**
 * Lazy load
 * @method require.ensure   // webpack
 */
// const About = (resolve) => {
//     require.ensure(['./views/About.vue'], () => {
//         resolve(require('./views/About.vue'));
//     });
// };

/**
 * Lazy load
 * @method  dynamic import   // https://github.com/tc39/proposal-dynamic-import
 */
const About = () => import('./views/About.vue');


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/',
                    redirect: 'hello'
                },
                {
                    path: 'hello',
                    alias: '/',
                    component: Hello,
                    meta: {
                        title: 'hello'
                    }
                },
                {
                    path: 'about',
                    component: About,
                    meta: {
                        title: 'about'
                    }
                },
                {
                    path: 'search',
                    component: Search,
                    meta: {
                        title: 'search'
                    }
                },
            ]
        },
        // 404
        {
            path: '*',
            component: NotFound,
        },
    ],
});
