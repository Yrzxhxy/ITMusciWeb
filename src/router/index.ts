import {createRouter,createWebHistory} from 'vue-router'
const routes =[
   {
      path:'/',
      name:'index',
      component:()=>import('../views/MusicPavilion/index.vue'),
      redirect:'recommend',
      children: [
         {
           path: 'recommend',
           name:'recommend',
           component:()=>import('../views/MusicPavilion/child/recommend.vue'),
         },
         {
           path: 'singer',
           name:'singer',
           component:()=>import('../views/MusicPavilion/child/singer.vue'),
         },
         {
            path: 'songlist',
            name:'songlist',
            component:()=>import('../views/MusicPavilion/child/songList.vue'),
          },
       ],
   },
   {
      path:'/personalPlay',
      name:'personalPlayList',
      component:()=>import('../views/PersonalPlaylists/index.vue'),
   }
  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router