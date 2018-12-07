import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import noPath from '@/components/404'
import work from '@/view/work'
import hobby from '@/view/hobby'
import study from '@/view/study'
import slider from '@/view/slider'
import user from '@/view/user'
Vue.use(Router)

export default new Router({
	mode:'history',
	scrollBehavior(to,from,savePosition){  //点击浏览器的前进后退按钮或切换导航时触发该事件
		//console.log(to);  //要进入的目标路由对象，即要去向哪里
		//console.log(from);  //离开的路由对象，即从哪里来
		//console.log(savePosition);  //记录滚动条的坐标位置 只在点击前进后退按钮时才记录
		if(savePosition){
			return savePosition
		}else{
			return {x:0,y:0}
		}
	},
  routes: [
  	{
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/user/:userId?',
      name: 'User',
      component: user
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/about',
      component: about,
      children:[
      	{
      		path:'',  //默认的子路由 /about
      		name: 'Work',
      		component:work
      	},
      	{
      		path:'study',
      		name: 'Study',
      		component:study
      	},
      	{
      		path:'hobby',
      		name: 'Hobby',
      		component:hobby
      	}
      ]
    },
    {
      path: '/document',
      name: 'Document',
      components:{
      	default:document,
      	slider:slider
      }
    },
    {
    	path:'*',
    	//component:noPath
    	//重定向
    	//redirect:'/about'
    	//redirect:{path:'/home'}
    	//redirect:{name:'Document'}
    	redirect:(to)=>{  //动态设置重定向的目标
    		console.log(to) //目标路由对象就是访问的路径的路由信息
    		if(to.path === '/123'){
    			return '/home'
    		}else if(to.path === '/456'){
    			return {path:'/about'}
    		}else{
    			return {name:'Document'}
    		}
    	}
    }
  ]
})
