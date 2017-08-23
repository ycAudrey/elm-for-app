<template>
	<div class="street">
		<!-- 头部 -->
		<mt-header :title="myCity">
			<mt-button icon="back" slot="left" @click.native='$router.go(-1)'></mt-button>	
			<router-link to="/location/city" slot="right" class="login">
				<mt-button >切换城市</mt-button>
			</router-link>
		</mt-header>
		<!-- 搜索地址 -->
		<div class="searchAddress">
			<!-- <mt-field id="searchAddr" placeholder="输入学校、商务楼、地址" v-model="keyword"></mt-field> -->
			<input type="search" placeholder="输入学校、商务楼、地址" v-model="keyword"/>
		</div>
		<!-- 显示搜索结果 -->
		<div class="searchResult" >
			<div v-for="item in addressList" @click="setAddress(item)">
				<big>{{item.name}}</big>
				<br/>
				<small>{{item.address}}</small>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'street',
	data () {
		return {
			// myCity:'广州',
			type:'search',
			// city_id:'5',
			keyword:'',
			addressList:[]
		}
	},
	computed:{
		myCity(){
			return this.$store.state.myCity;
		},
		city_id(){
			return this.$store.state.city_id;
		}
	},
	methods:{
		searchAddress(){
			this.$http.get('http://cangdu.org:8001/v1/pois',{params:{type:this.type,city_id:this.city_id,keyword:this.keyword}}).then(function(res){
				this.addressList = res.body;
			},function(res){
				console.log("搜索地址失败！");
			});
		},
		setAddress(item){
			this.$store.commit('setStreetAddress',item.address);
			this.$router.push('/index/home');
		}
	},
	watch:{
		keyword:function(val,oldval){
			if (val) {
				this.searchAddress();
			} else{
				this.addressList=[];
			};
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.street{
	background-color: #F5F5F5;
	font-size: 0.45333rem;
}
.mint-header{
	font-size: 0.48rem;
	padding: 0.72rem 0.4rem;
}
.searchAddress{	
	border-bottom: 1px solid #E6E6E6;
}
.searchResult{
	margin-top: 10px;
	background-color: #FFF;
}
input{
	/*background-color: pink;*/
	width: 100%;
	font-size: 0.53333rem ;
	padding:0.26666rem 0.53333rem ;
	border:none;
}
input:focus{
	border:none;
}
.searchResult>div{
	padding: 10px ;
	border: 1px solid #E6E6E6;
}
</style>
