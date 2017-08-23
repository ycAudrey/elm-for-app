import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		myCity: sessionStorage.getItem("myCity"), //所在城市
		city_id: sessionStorage.getItem("cityId"), //所在城市id
		streetAddress: sessionStorage.getItem("address"), //所在区域
		latitude:sessionStorage.getItem("latitude") , //维度
		longitude:sessionStorage.getItem("longitude") , //经度
		userInfo:{
			userName:'', 
			token:false, 
		},
	},
	getters:{
		
	},
	mutations: {
		setMyCity(state,city){
			sessionStorage.setItem("myCity",city);
			state.myCity = city;
		},
		setCityId(state,cityId){
			sessionStorage.setItem("cityId",cityId);
			state.city_id = cityId;
		},
		setStreetAddress(state,Address){
			sessionStorage.setItem("address",Address);
			state.streetAddress = Address;
		},
		setLatitude(state,Latitude){
			sessionStorage.setItem("latitude",Latitude);
			state.latitude = Latitude;
		},
		setLongitude(state,Longitude){
			sessionStorage.setItem("longitude",Longitude);
			state.longitude = Longitude;
		},
		setSelected(state,selected){
			state.selected = selected;
		},
		setUserInfo(state,userInfo){
			state.userInfo.userName = userInfo.userName;
			state.userInfo.token = userInfo.token;
		}
	}
})

export default store;