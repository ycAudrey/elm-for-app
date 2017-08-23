<template>
	<div id="city">
		<!-- 头部 -->
		<mt-header title="">
			<router-link to="/location/city" slot="left">
				<mt-button >ele.me</mt-button>
			</router-link>
			<router-link to="/login" slot="right" class="login">
				<mt-button v-if="!$store.state.userInfo.token">登录</mt-button>
			</router-link>
			<router-link to="/login" slot="right">
				<mt-button v-if="!$store.state.userInfo.token">注册</mt-button>
			</router-link>
		</mt-header>
		<!-- 所在城市 -->
		<div class="actualCity">
			<!-- <div class="cityDiv">当前定位城市：<small>定位不准时，请在城市列表中选择</small></div> -->
			<mt-cell title="当前定位城市：" value="定位不准时，请在城市列表中选择"></mt-cell>	
			<mt-cell :title="myCity" is-link  @click.native='selectedCity'></mt-cell>	
			<!-- <div class="cityDiv" style="color:#26A2FF;" @click='selectedCity'>{{myCity}}<small>&gt;</small></div> -->
		</div>
		<!-- 热门城市 -->
		<div class="hotCitys" >			
			<ul>
				<div class="cityDiv">热门城市</div>
				<li v-for="item in hotCitys" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
		</div>
		<!-- 获取城市组 -->
		<div class="groupCity" v-if="groupCity">
			<ul v-if='groupCity["A"]!=null'>
				<div class="cityDiv">A<small>(按字母排序)</small></div>
				<li v-for="item in groupCity['A']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["B"]!=null'>
				<div class="cityDiv">B</div>
				<li v-for="item in groupCity['B']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["C"]!=null'>
				<div class="cityDiv">C</div>
				<li v-for="item in groupCity['C']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["D"]!=null'>
				<div class="cityDiv">D</div>
				<li v-for="item in groupCity['D']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["E"]!=null'>
				<div class="cityDiv">E</div>
				<li v-for="item in groupCity['E']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["F"]!=null'>
				<div class="cityDiv">F</div>
				<li v-for="item in groupCity['F']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["G"]!=null'>
				<div class="cityDiv">G</div>
				<li v-for="item in groupCity['G']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["H"]!=null'>
				<div class="cityDiv">H</div>
				<li v-for="item in groupCity['H']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["I"]!=null'>
				<div class="cityDiv">I</div>
				<li v-for="item in groupCity['I']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["J"]!=null'>
				<div class="cityDiv">J</div>
				<li v-for="item in groupCity['J']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["K"]!=null'>
				<div class="cityDiv">K</div>
				<li v-for="item in groupCity['K']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["L"]!=null'>
				<div class="cityDiv">L</div>
				<li v-for="item in groupCity['L']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["M"]!=null'>
				<div class="cityDiv">M</div>
				<li v-for="item in groupCity['M']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["O"]!=null'>
				<div class="cityDiv">O</div>
				<li v-for="item in groupCity['O']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["P"]!=null'>
				<div class="cityDiv">P</div>
				<li v-for="item in groupCity['P']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["Q"]!=null'>
				<div class="cityDiv">Q</div>
				<li v-for="item in groupCity['Q']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["R"]!=null'>
				<div class="cityDiv">R</div>
				<li v-for="item in groupCity['R']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["S"]!=null'>
				<div class="cityDiv">S</div>
				<li v-for="item in groupCity['S']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["T"]!=null'>
				<div class="cityDiv">T</div>
				<li v-for="item in groupCity['T']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["U"]!=null'>
				<div class="cityDiv">U</div>
				<li v-for="item in groupCity['U']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["V"]!=null'>
				<div class="cityDiv">V</div>
				<li v-for="item in groupCity['V']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["W"]!=null'>
				<div class="cityDiv">W</div>
				<li v-for="item in groupCity['W']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["X"]!=null'>
				<div class="cityDiv">X</div>
				<li v-for="item in groupCity['X']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["Y"]!=null'>
				<div class="cityDiv">Y</div>
				<li v-for="item in groupCity['Y']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
			<ul v-if='groupCity["Z"]!=null'>
				<div class="cityDiv">Z</div>
				<li v-for="item in groupCity['Z']" @click='selectCity(item)'>{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'city',
	data () {
		return {
			myCity:'',
			cityId:'',
			address:'',
			latitude:'',
			longitude:'',
			hotCitys:[],
			groupCity:{}
		}
	},
	computed:{
		
	},
	methods:{
		selectCity(item){
			this.myCity = item.name;
			this.cityId = item.id;
			this.latitude = item.latitude;
			this.longitude = item.longitude;
		},
		selectedCity(){
			if (this.myCity) {
				this.$store.commit('setMyCity',this.myCity);
				this.$store.commit('setCityId',this.cityId);
				this.$store.commit('setLatitude',this.latitude);
				this.$store.commit('setLongitude',this.longitude);
				this.$router.push('/location/street');
			} else{
				console.log('城市定位失败！');
			};
		},
		getMyCity(){
			this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(function(res){
				var data = res.body;
				this.myCity = data.name;
				this.cityId = data.id;
				this.address = data.address;
				this.latitude = data.latitude;
				this.longitude = data.longitude;
			},function(res){
				console.log(res.message);
			});
		},
		getHotCitys(){
			this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(function(res){
				this.hotCitys = res.body;
			},function(res){
				console.log("获取热门城市失败！");
			});
		},
		getGroupCity(){
			this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(function(res){
				this.groupCity = res.body;
			},function(res){
				console.log("获取全部城市失败！");
			});
		}
	},
	mounted(){
		this.getMyCity();
		this.getHotCitys();
		this.getGroupCity();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#city{
	background-color: #F5F5F5;
	font-size: 0.45333rem;
}
#city .mint-header{
	font-size: 0.48rem;
	padding: 0.72rem 0.4rem;
}
#city .cityDiv{
	padding: 0.4rem ;
	overflow: hidden;
	border-top: 1px solid #E6E6E6;
	border-bottom: 1px solid #E6E6E6;
	/*overflow: hidden;*/
}
#city #city .cityDiv>small{
    color: #9F9F9F;
    float: right;
    font-size: 0.32rem;
    padding-top: 0.13333rem;
}
#city .mint-cell-title{
	padding: 0.4rem ;
	font-size: 0.45333rem;
}
#city .mint-cell-value{
	font-size: 0.32rem;
}
#city .mint-cell-allow-right::after{
	width: 0.18666rem;
    height: 0.18666rem;
    right: 0.66666rem;
}
#city ul{
	list-style: none;
	padding: 0;
	overflow: hidden;
}
#city li{
	margin: 0;
	padding: 0;
	width: 24.65%;
	float: left;
	height: 0.8rem;
	text-align: center;
	border-bottom: 1px solid #E6E6E6;
	border-left: 1px solid #E6E6E6;
	padding-top: 0.1949rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
#city .login{
	margin-right: 0.074962rem;
}
#city .actualCity{
    background-color: #FFF;
    /*border-bottom:1px solid #F5F5F5;*/
}
#city .hotCitys{
	background-color: #FFF;
    border-color: #F5F5F5;
    font-size: 0.45333rem;
}
#city .hotCitys li{
	color:#26A2FF;
}
#city .groupCity ul{
    background-color: #FFF;
    font-size: 0.45333rem;
}
</style>
