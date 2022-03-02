import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () =>
            import ('../views/Shop.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () =>
            import ('../views/Products.vue')
    },
    {
        path: '/support',
        name: 'Support',
        component: () =>
            import ('../views/Support.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router