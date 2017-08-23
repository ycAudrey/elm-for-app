<template>
	<div id="person">
		<!-- 头部 -->
		<mt-header title="我的">
			<span slot="left">
			    <mt-button icon="back"  @click.native="$router.go(-1)"></mt-button>
			</span>
			<router-link to="/login" slot="right" class="login">
                <mt-button type="primary" v-if="!$store.state.userInfo.token">登录</mt-button>
            </router-link>
            <router-link to="/login" slot="right">
                <mt-button type="primary" v-if="!$store.state.userInfo.token">注册</mt-button>
            </router-link>
	    </mt-header>
	    <div class="personImg">
	        <img src="http://images.cangdu.org/aaa.jpeg"> 
	        <div class="personDiv" v-if="$store.state.userInfo.token">Hello,{{userName}} !</div>	    	
	    </div>
	    <div class="myInfo">
	    	<div>
	    		<div><span style='color:#FF9900;'>0.00</span>元</div>
	    		<div>我的余额</div>
	    	</div>
	    	<div>
	    		<div><span style='color:#FF5F3E;'>0</span>个</div>
	    		<div>我的优惠</div>
	    	</div>
	    	<div>
	    		<div><span style='color:#6AC20B;'>0</span>分</div>
	    		<div>我的积分</div>
	    	</div>
	    </div>
	    <div class="operations">
	        <mt-cell title="我的订单" is-link to="/index/order"></mt-cell>
	        <mt-cell title="积分商城" is-link></mt-cell>
	        <mt-cell title="饿了么会员卡" is-link></mt-cell>
	        <mt-cell title="服务中心" is-link></mt-cell>
	        <mt-cell title="下载饿了么APP" is-link></mt-cell>
	    </div>
	</div>
</template>

<script>
export default {
	name: 'person',
	data () {
		return {
			userName: this.$store.state.userInfo.userName,      
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#person{
	background-color: #F5F5F5;
}
#person .mint-header{
    font-size: 0.48rem;
    padding: 0.72rem 0.4rem;
}
#person .mint-button{
    overflow: visible;
}
#person i.mintui{
    font-size: 0.4rem;
}
#person .personImg{
	background-color: #26A2FF;
	overflow: hidden;
}
#person .personImg img{
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	overflow: hidden;
	border:1px solid #F5F5F5;
	float: left;
	margin: 0.4rem ; 
}
#person .myInfo{
	overflow: hidden;
	background-color: #fff;
	font-size: 0.4rem;
}
#person .myInfo span{
	font-size: 0.6666rem;
	font-weight: bold;
}
#person .myInfo>div{
	float: left;
	width: 32.8%;
	text-align: center;
	padding: 0.26666rem 0;
}
#person .operations{
	margin-top: 10px;
    margin-bottom: 1.2rem;
}
#person .mint-cell{
	height: 1.28rem;
	display: flex;
}
#person .mint-cell-wrapper{
	font-size: 0.426666rem;
	padding-left: 0;
}
#person .mint-cell-title{
	padding-left: 0.66666rem;
}
#person .mint-cell-allow-right::after{
	width: 0.18666rem;
    height: 0.18666rem;
    right: 0.66666rem;
}
#person .login{
	margin-right: 5px;
}
#person .personDiv{
	color: #FFF;
	font-size: 0.6rem;
	padding-top: 0.8rem;
	margin-left: 0.26666rem;
}
#person .mint-button-text{
     font-size: 0.4rem;
}
</style>
