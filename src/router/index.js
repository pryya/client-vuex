import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () =>
    import ('@/containers/DefaultContainer')

// Views
const Dashboard = () =>
    import ('@/views/Dashboard')

const Login = () =>
    import ('@/views/auth/Login')

// User
const Users = () =>
    import ('@/views/user/Index')



Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            name: 'Login',
            component: Login,
        },
        // {
        //     path: '/dashboard',
        //     name: 'dashboard',
        //     component: () =>
        //         import ( /* webpackChunkName: "Auth" */ "@/views/dashboard/Index"),
        // },
        {
            path: '/home',
            redirect: '/dashboard',
            name: 'Home',
            component: DefaultContainer,
            children: [{
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard,
                },
                {
                    path: '/users',
                    name: 'Users',
                    component: Users
                },

            ]
        },



    ]
})