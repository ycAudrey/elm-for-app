import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Search from '@/views/search'
import Order from '@/views/order'
import Person from '@/views/person'
import Location from '@/views/location'
import City from '@/views/city'
import Street from '@/views/street'
import Login from '@/views/login'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/location/city'
		},
		{
			path:'/login',
			name: 'login',
			component: Login
		},
		{
			path: '/location',
			name: 'location',
			redirect:'/location/city',
			component: Location,
			children: [
				{
					path: 'city',
					component:City
				},
				{
					path: 'street',
					component:Street
				} 
			]
		},
		{
			path: '/index',
			name: 'index',
			// redirect: '/index/home',
			component: Index,
			children:[
				{
					path: 'home',
					name: 'home',
					component: Home
				},
				{
					path: 'search',
					name: 'search',
					component: Search
				},
				{
					path: 'order',
					name: 'order',
					component: Order
				},
				{
					path: 'person',
					name: 'person',
					component: Person
				}
			]
		}
	]
})
