import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
let router = new Router({
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     return {x: 0, y: 0};
    // },
    routes: [
       {
        path: '/',
        component: () => import('../pages/layout/Layout.vue'),
        redirect: {
            name: 'employees-overview'
        },
        children: [
            {
                path: '/',
                name: 'employees-overview',
                component: () => import('../pages/employees/employees-overview/EmployeesOverview.vue')
            },
           
        ]

       }]
});

export default router;