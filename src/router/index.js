import Vue from 'vue'
import Router from 'vue-router'
// const Index = ()=>import('@/components/index')
const ListIndex = ()=>import('@/components/StudyDesign/Index')
const CreateList = ()=>import('@/components/StudyDesign/Create/CreateList')
const ShareList = ()=>import('@/components/StudyDesign/Share/ShareList')
const ClassifyList = ()=>import('@/components/StudyDesign/Classify/ClassifyList')
const MakeNew = ()=>import('@/components/StudyDesign/Create/MakeNew')

const UseList = ()=>import('@/components/StudyDesign/Use/UseList')
const UseIndex = ()=>import('@/components/StudyDesign/Use/UseIndex')

// 设计使用
const AllSubmit = ()=>import('@/components/StudyDesign/Use/AllSubmit/AllSubmit.vue')
const DataStatist = ()=>import('@/components/StudyDesign/Use/DataStatist/DataStatist.vue')
const AllNotes = ()=>import('@/components/StudyDesign/Use/AllNotes/AllNotes.vue')
const PersonStatist = ()=>import('@/components/StudyDesign/Use/DataStatist/PersonStatist.vue')
// const AllSubmit = ()=>import('@/components/StudyDesign/Use/AllSubmit/AllSubmit.vue')



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
        component: UseList,
      },
    ]
  },
  {
    path: '/UseIndex',
    name: '学习设计使用',
    component: UseIndex,
    children:[
      {
        path:'/use/AllSubmit',
        name:'全部提交',
        component:AllSubmit,
      },
      {
        path:'/use/DataStatist',
        name:'数据统计',
        component:DataStatist,
        children:[
          {
          path:'/use/Data/person',
          name:'按照人员统计',
          component:PersonStatist,
        },
      ]
      },
      {
        path:'/use/AllNotes',
        name:'全部笔记',
        component:AllNotes,
      },
      // {
      //   path:'/use/AllSubmit',
      //   name:'全部提交',
      //   component:AllSubmit,
      // },
    ]
  },
  // 学习设计使用
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
