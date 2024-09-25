// @ts-ignore
import Home from '../app/home/page.vue' 
// @ts-ignore
import Blog from '../app/blog/page.vue'
// @ts-ignore
import Product from '../app/product/page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})