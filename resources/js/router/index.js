import Vue from 'vue'
import Router from 'vue-router'
import EmployeesOverview from '../pages/employees/employees-overview/EmployeesOverview.vue';
import CreateEmployee from '../pages/employees/create-employee/createEmployee.vue';

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
                name: 'employee-overview',
                component: EmployeesOverview
            },
            {
                path: '/create-employee',
                name: 'create-employee',
                component: CreateEmployee
            },
           
        ]

       }]
});

export default router;