import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../views/page1.vue'
import page2 from '../views/page2.vue'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'
import list from '../views/list.vue'
import write from '../views/write.vue'
import view from '../views/view.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: page1
        },
        {
            path: '/page1',
            component: page1
        },
        {
            path: '/page2',
            component: page2
        },
        {
            path: '/page3',
            component: page3
        },
        {
            path: '/page4',
            component: page4
        },
        {
            path: '/contact/list',
            component: list
        },
        {
            path: '/contact/write',
            component: write
        },
        {
            path:'/contact/view',
            component: view
        }
    ]
})