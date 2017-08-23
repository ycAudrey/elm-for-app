// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './rem/rem'
import store from './store'

Vue.use(MintUI)
Vue.use(VueResource)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
	if(store.state.myCity==''||store.state.myCity==null){
		if(to.path=='/location/city'||to.path=='/login'){
			next();//console.log('1',to.path);
		}else{
			next('/location/city');//console.log('2',to.path);
		}
	}
	else{
		if(store.state.streetAddress==''||store.state.streetAddress==null){
			if(to.path=='/location/street'||to.path=='/location/city'){
				next();//console.log('3',to.path,',',store.state.myCity);
			}else{
				next('/location/street');//console.log('4',to.path,',',store.state.city);
			}
		}else{
			next();
		}
	}
	// if(to.path=='/index/home'){
	// 	if (store.state.streetAddress!='') {
	// 		next();
	// 		console.log('address不为空！',store.state.streetAddress,',',to.path);
	// 	}else{
	// 		next('/location/city');
	// 		console.log('address为空！',store.state.streetAddress,',',to.path);
	// 	}
	// }else{
	// 	if (to.path=='/location/city') {
	// 		next();
	// 		console.log('to path',store.state.streetAddress,',',to.path);
	// 	};
	// }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
