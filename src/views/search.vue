<template>
	<div id="search">
		<!-- 头部 -->
		<mt-header title="搜索">
			<span slot="left">
				<mt-button icon="back" @click.native="$router.go(-1)"></mt-button>
			</span>
	    </mt-header>
	    <!-- 搜索框 -->
	    <div class="search">
	    	<mt-field label="" placeholder="请输入商家或美食名称" v-model="keyWord"><mt-button @click.native="toSearch" icon="search"></mt-button></mt-field>
	    </div>
	    <div class="info" v-if='errorInfo'>{{errorInfo}}</div>
	    <div class="info" v-if="restaurantsList.length!=0">商家</div>
	    <!-- 搜索结果列表 -->
	    <div class="searchList">
	    	<div v-for='item in restaurantsList' class="restaurantsList">
	    		<img  :src="imgURL+item['image_path']" style="margin-right:0.2rem;">
	    		<div >
	    			<span>{{item.name}}</span>
	    			<span>
	        			
	    			</span>
	    		</div>
	    		<div>
	    			<span>月售{{item["recent_order_num"]}}单</span>
	    		</div>
	    		<div>
	    			<span>￥{{item.float_minimum_order_amount}}起送/距离{{item.distance}}</span>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
export default {
	name: 'search',
	data () {
		return {
			errorInfo:'',
			keyWord:'',
			restaurantsList:[],
			latitude:23.15052,
			longitude:113.49631,
			imgURL:'http://images.cangdu.org/'
		}
	},
	methods:{
		toSearch(){
			this.errorInfo='';
			let position = this.latitude+','+this.longitude;
			this.$http.get('http://cangdu.org:8001/v4/restaurants',{params:{geohash:position,keyword:this.keyWord}}).then(function(res){
				this.restaurantsList = res.body;
				if (this.restaurantsList.length==0) {
					this.errorInfo='很抱歉！无搜索结果';
				}
			},function(res){
				console.log("查找数据失败！");
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#search .mint-header{
    font-size: 0.48rem;
    padding: 0.72rem 0.4rem;
}
#search .mint-button--default{
	box-shadow: none !important;
}
#search .mint-button{
    overflow: visible;
}
#search i.mintui{
    font-size: 0.4rem;
}
#search .mint-cell-wrapper{
	font-size: 0.4rem;
}
#search .restaurantsList{
	clear: left;
	overflow: hidden;
	padding: 0.5rem 0.3rem;
	border-bottom: 1px solid #e4e4e4;
	font-size: 0.4rem;
}
#search .info{
    font-size: 0.4rem;
    padding: 0.26666rem;
}
#search .searchList{
    margin-bottom: 1.2rem;
}
#search .search{
	font-size: 0.4rem;
}
#search .restaurantsList img{
	float: left;
	width: 2rem;
	height: 2rem;
}
</style>
