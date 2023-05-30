import Home from '@/views/Home.vue'

const home = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/index',
				name: 'index',
				component: () => import(/* webpackChunkName: "index" */ '@/views/index/index.vue'),
				children: [
					{
						path: 'follows',
						name: 'follows',
						component: () => import(/* webpackChunkName: "follows" */ '@/views/follow/index.vue'),
						meta: {
							index: 1,
						},
					},
					{
						path: 'recommend',
						name: 'recommend',
						component: () =>
							import(/* webpackChunkName: "recommend" */ '@/views/recommend/index.vue'),
						meta: {
							index: 2,
						},

						// children: [
						// 	{
						// 		path: 'reVideoList',
						// 		name: 'reVideoList',
						// 		component: () =>
						// 			import(
						// 				/* webpackChunkName: "VideoList" */ '@/common/components/videoList/VideoList.vue'
						// 			),
						// 	},
						// ],
					},
					{
						path: 'selection',
						name: 'selection',
						component: () =>
							import(/* webpackChunkName: "recommend" */ '@/views/selection/index.vue'),
						meta: {
							index: 3,
						},
					},
				],
			},
			{
				path: '/video',
				name: 'video',
				component: () => import(/* webpackChunkName: "friends" */ '@/views/video/index.vue'),
			},
			{
				path: '/game',
				name: 'game',
				component: () => import(/* webpackChunkName: "news" */ '@/views/game/index.vue'),
				meta: {
					requiresAuth: true, // 是否需要登录权限
				},
			},
			{
				path: '/community',
				name: 'community',
				component: () => import(/* webpackChunkName: "news" */ '@/views/community/index.vue'),
				meta: {
					requiresAuth: true, // 是否需要登录权限
				},
			},
			{
				path: '/mine',
				name: 'mine',
				component: () => import(/* webpackChunkName: "mine" */ '@/views/mine/index.vue'),
				meta: {
					requiresAuth: true, // 是否需要登录权限
				},
			},
		],
	},
]

export default home
