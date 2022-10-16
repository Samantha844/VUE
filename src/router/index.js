import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from '../components/HelloWorld'
import DetalleInfo from '../components/detalle';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/detalle/:id',
        name: 'detalleInfo',
        component: DetalleInfo
    }
]

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
