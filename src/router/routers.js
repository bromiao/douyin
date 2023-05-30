import home from './module/home'

const routes = [
	{
		path: '/',
		redirect: '/index/recommend',
	},
	{
		path: '/index',
		redirect: '/index/recommend',
	},
	...home,
]

export default routes
