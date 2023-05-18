import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{ name: 'home', path: '/', component: () => import('./pages/Index.vue') },
	{ name: 'manual-simple', path: '/manual/simple', component: () => import('./pages/manual/Simple.vue') },
	{ name: 'manual-joystick', path: '/manual/joystick', component: () => import('./pages/manual/Joystick.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
