
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') },
      { path: '/courses', component: () => import('pages/courses.vue') },
      { path: '/sign in', component: () => import('pages/signin.vue') },
      { path: '/sign up', component: () => import('pages/signup.vue') },
      { path: '/header', component: () => import('pages/header.vue') },
      { path: '/start', component: () => import('pages/start.vue') },
      { path: '/videos', component: () => import('pages/videos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
