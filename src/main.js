import Vue from 'vue'
import ElementUI from 'element-ui';//引入 Element
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/utils/axios'

Vue.prototype.$axios=axios;

Vue.use(ElementUI);//配置vue的全局，但缺点就是引入的是整个组件，这样子打包会太大了
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
	if(to.name !== 'login'){
		let userinfo = localStorage.getItem('token');
		if(userinfo){
			next();
		}else{
			next({name:'login'})
		}
	}else{
	next();
		
	}
})

new Vue({
//	el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')








//这里创建的vue实例没有el属性，而是在实例后面添加了一个$mount(’#app’)方法。
//$mount(’#app’) ：手动挂载到id为app的dom中的意思
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
//假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载