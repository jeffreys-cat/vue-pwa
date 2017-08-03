import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Hello from './views/Hello.vue';
import NotFound from './views/NotFound.vue';
import About from './views/About.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
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
            ]
        },
        // 404
        {
            path: '*',
            component: NotFound,
        },
    ],
});
