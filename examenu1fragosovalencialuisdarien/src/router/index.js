
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/inicio',
        name: 'inicio',
        component: () => import('../components/Inicio.vue'),
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: () => import('../components/Formulario.vue'),
    },
    {
        path: '/tablaPaginada',
        name: 'tablaPaginada',
        component: () => import('../components/TablaPaginada.vue'),
    }
]

const router = new VueRouter({ routes, })
export default router;