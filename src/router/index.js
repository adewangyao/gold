import Vue from 'vue'
import Router from 'vue-router'
// const Index = ()=>import('@/components/index')
const ListIndex = ()=>import('@/components/StudyDesign/Index')
const CreateList = ()=>import('@/components/StudyDesign/Create/CreateList')
const ShareList = ()=>import('@/components/StudyDesign/Share/ShareList')
const ClassifyList = ()=>import('@/components/StudyDesign/Classify/ClassifyList')
const MakeNew = ()=>import('@/components/StudyDesign/Create/MakeNew')
// 不知道路由
const Unknow = ()=>import('@/components/StudyDesign/Create/Unknow')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
    path: '/listindex',
    name: '学习设计',
    component: ListIndex,
    children:[
      {
        path: '/createlist',
        name: '创建列表',
        component: CreateList,
      },
      {
        path: '/sharelist',
        name: '分享列表',
        component: ShareList,
      },
      {
        path: '/classifylist',
        name: '分类列表',
        component: ClassifyList,
      },
      {
        path: '/uselist',
        name: '使用列表',
        component: ClassifyList,
      },
    ]
  },
  {
    path: '/makenew',
    name: '创建学习设计',
    component: MakeNew,
  },
  {
    path: '/Unknow',
    name: 'Unknow',
    component: Unknow,
  }
]
})
