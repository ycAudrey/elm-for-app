<template>
	<div id="home">
	   <!--  头部 -->
		<mt-header fixed :title="address">
			<router-link to="/index/search" slot="left" >
				<mt-button icon="search"></mt-button>
			</router-link>
			<router-link to="/login" slot="right" class="login">
                <mt-button v-if="!$store.state.userInfo.token">登录</mt-button>
            </router-link>
            <router-link to="/login" slot="right">
                <mt-button v-if="!$store.state.userInfo.token">注册</mt-button>
            </router-link>
	    </mt-header>
	    <!-- 轮播 -->
	    <div id="page-swipe">
	        <mt-swipe :auto="0">
                <!-- <mt-swipe-item >
                    <ul>
                        
                    </ul>
                </mt-swipe-item> -->
	            <mt-swipe-item>
                    <ul>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg">
                     		<div>甜品饮品</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
                     		<div>美食</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg">
                     		<div>准时达</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg">
                     		<div>新店特惠</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg">
                     		<div>鲜花蛋糕</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg">
                     		<div>包子粥店</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg">
                     		<div>商超便利</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg">
                     		<div>预定早餐</div>
                     	</li>
                    </ul>
    		    </mt-swipe-item>
    		    <mt-swipe-item>
    		         <ul>
    		         	<li>
                     		<img src="https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg">
                     		<div>果蔬生鲜</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg">
                     		<div>汉堡薯条</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg">
                     		<div>披萨意面</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg">
                     		<div>日韩料理</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
                     		<div>简餐</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg">
                     		<div>土豪推荐</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg">
                     		<div>麻辣烫</div>
                     	</li>
                     	<li>
                     		<img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg">
                     		<div>川湘菜</div>
                     	</li>
    		         </ul>
    		    </mt-swipe-item>
	        </mt-swipe>
	    </div>
	    <!-- 附近商家 -->
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" :bottom-loading-text='bottomText'>
        <div class="restaurants">
            <div v-if='restaurants.length!=0' style='color:#9E9E9E;'>附近商家</div>
        	<div v-for='item in restaurants' class="restaurantsList">
        		<img alt="商家图片" :src="imgURL+item['image_path']">
                <div class="introduce">
            		<div >
            			<span style='background-color:#FFD930;font-size:0.3rem;'>品牌</span>
            			<span style='font-weight:bold;'>{{item.name}}</span>
            			<span style='color:#9E9E9E;font-size:0.3rem;position:absolute;right:0.2rem;'>
    	        			<small v-for='support in item.supports'>
    	        			     {{support['icon_name']}}
    	        			</small>
            			</span>
            		</div>
            		<div style="font-size:0.3rem;margin:0.3rem;">
            			<span style='color:#FF904E;'>{{item.rating}}</span>
            			<span style='color:#666;'>月售{{item["recent_order_num"]}}单</span>
                        <span style="position:absolute;right:0.2rem;font-size:0.2rem;">
                			<span v-if='item.delivery_mode' style='color:#FFF;background-color:#26A2FF;padding:1px;'>{{ item.delivery_mode.text }}</span>
                			<span v-if='item.supports[1]' style='color:#26A2FF;border:1px solid #26A2FF;padding:1px;'>{{item.supports[1].name}}</span>
                        </span>
            		</div>
            		<div style='font-size:0.3rem;'>
            			<span  style='color:#666;'>￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
                        <span style="position:absolute;right:0.2rem;">
                			<span  style='color:#666;'>{{item.distance}}/</span>
                			<span  style='color:#26A2FF;'>{{item['order_lead_time']}}</span>
                        </span>
            		</div>
                </div>
        	</div>
        </div>
        </mt-loadmore>
        
	</div>
</template>

<script>
export default {
	name: 'home',
	data () {
		return {
			// address:'ele',
			imgURL:'http://images.cangdu.org/',
			restaurants:[],
            category:[],
            allLoaded:false,
            offset:0,
            limit:20,
            totalCount:0,//餐馆总数
            bottomText:"拼命加载中……",
		}
	},
    computed:{
        address(){
            return this.$store.state.streetAddress;
        },
        latitude(){
            return this.$store.state.latitude;
        },
        longitude(){
            return this.$store.state.longitude;
        }
    },
	methods:{
        loadBottom(){
            this.offset += this.limit;
            setTimeout(()=>{
                this.$http.get('http://cangdu.org:8001/shopping/restaurants',{params:{latitude:this.latitude,longitude:this.longitude,offset:this.offset,limit:this.limit}}).then(res=>{
                    this.restaurants = this.restaurants.concat(res.body);
                    if (((this.offset+20)/20)>(this.totalCount/20)) {
                        this.bottomText = "抱歉，没有更多数据了~";
                        this.allLoaded = true;
                    }
                },function(res){
                    console.log("获取餐馆失败！")
                });
            },1000)
        },
        getTotalCount(){
            this.$http.get('http://cangdu.org:8001/shopping/restaurants/count').then(function(res){
                this.totalCount = res.body.count;
            });
        },
		getRestaurants(){
			this.$http.get('http://cangdu.org:8001/shopping/restaurants',{params:{latitude:this.latitude,longitude:this.longitude,offset:this.offset,limit:this.limit}}).then(res=>{
				this.restaurants = res.body;
			},function(res){
				console.log("获取餐馆失败！")
			});
		},
        getCategory(){
            this.$http.get('http://cangdu.org:8001/v2/index_entry').then(function(res){
                this.category = res.body;
            },function(res){
                console.log("获取目录失败！");
            });
        }
	},
    created(){
        this.getCategory();
        this.getTotalCount();
    },
	mounted(){
		this.getRestaurants();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#home{
	background-color: #F5F5F5;
	font-size: 0.4rem;
	margin-bottom: 1.5rem;
}
#home .mint-header{
    font-size: 0.48rem;
    padding: 0.72rem 0.4rem;
}
#home .mint-button{
    overflow: visible;
}
#home i.mintui{
    font-size: 0.4rem;
}
#home .mint-button-text{
     font-size: 0.4rem;
}
#home #page-swipe{
    padding-top: 1.68rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
}
#home #page-swipe .mint-swipe {
   height: 4.8rem;
}
#home .mint-swipe-indicator{
   background-color: #000 !important;
}
#home .mint-swipe-indicator.is-active{
   background-color: #007aff !important;
}
#home #page-swipe .mint-swipe-item {
   line-height: 0.6rem;
}
#home .restaurants{
    margin-top: 0.2rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    padding: 0.2rem 0.3rem;
}
#home .restaurantsList{
	clear: left;
	overflow: hidden;
	padding: 0.5rem 0;
	border-bottom: 1px solid #e4e4e4;	
}
#home .restaurantsList img{
	float: left;
	width: 2rem;
	height: 2rem;
    margin-right: 0.2rem;
}
#home ul{
	list-style: none;
	margin: 0;
	padding: 0;
	/*overflow: hidden;*/
}
#home li{
	width: 25%;
	float: left;
	text-align: center;

}
#home img{
	width:1.3rem;
	height: 1.3rem;
}
#home .login{
    margin-right: 0.2rem;
}
</style>
